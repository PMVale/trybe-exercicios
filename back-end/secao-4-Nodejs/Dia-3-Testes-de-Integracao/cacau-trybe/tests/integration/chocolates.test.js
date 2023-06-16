const chai = require('chai');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const sinon = require('sinon');

const fs = require('fs');

const {expect} = chai;

const app = require('../../src/app');

const mockFile = JSON.stringify({
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

const mockFile2 = JSON.stringify({
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: ' Mint Pretty Good',
      brandId: 2,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Testando a API Cacau Trybe', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile').resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });

  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates', async function () {
      const output =   [
        { "id": 1, "name": "Mint Intense", "brandId": 1 },
        { "id": 2, "name": "White Coconut", "brandId": 1 },
        { "id": 3, "name": "Mon Chéri", "brandId": 2 },
        { "id": 4, "name": "Mounds", "brandId": 3 }
      ];
      const brands = [
        { "id": 1, "name": "Lindt & Sprungli" },
        { "id": 2, "name": "Ferrero" },
        { "id": 3, "name": "Ghirardelli" }
      ];
      response = await chai.request(app).get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.haveOwnProperty('chocolates');
      expect(response.body.chocolates).to.deep.equal(output);
      expect(response.body.chocolates).to.be.instanceOf(Array);
      expect(response.body).to.haveOwnProperty('brands');
      expect(response.body.brands).to.deep.equal(brands);
      expect(response.body.brands).to.be.instanceOf(Array);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o id 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai.request(app).get('/chocolates/4');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal({ id: 4, name: 'Mounds', brandId: 3 });
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/99');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });

  describe('Usando o método GET em /chocolates/total', function () {
    it('Retorna o total de chocolates', async function () {
      const response = await chai.request(app).get('/chocolates/total');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ "totalChocolates": 4 });
    });
  });

  describe('Usando o método GET em /chocolates/search', function () {
    it('Retorna os chocolates que incluem Mo no nome', async function () {
      const response = await chai.request(app).get('/chocolates/search?name=Mo');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(
        [
        {
          "id": 3,
          "name": "Mon Chéri",
          "brandId": 2
        },
        {
          "id": 4,
          "name": "Mounds",
          "brandId": 3
        }
      ]
      );
    });

    it('Verifica o comportamento caso a query feita não ache algo', async function () {
      const response = await chai.request(app).get('/chocolates/search?name=Xablau');

      expect(response.status).to.be.equal(404);
      expect(response.body.chocolates).to.deep.equal([]);
    });
  });

  describe('Usando o método PUT em /chocolates/:id', function () {
    it('Verifica se o chocolate é atualizado com os valores corretos', async function () {
      const mockData = { 
        "name": "Mint Pretty Good",
        "brandId": 2
      };
      // sinon.restore();
      sinon.stub(fs.promises, 'writeFile').resolves();
      // sinon.stub(fs.promises, 'readFile').resolves(mockFile2);
      const response = (await chai.request(app).put('/chocolates/1').send(mockData));
      expect(response.body).to.be.deep.equal(mockData);
      expect(response.status).to.be.equal(200);
      expect(fs.promises.writeFile.called).to.be.equal(true);
    });

    it('Verifica o comportamento caso o id do chocolate passado não seja encontrado', async function () {
      sinon.stub(fs.promises, 'writeFile').resolves();
      const response = await chai.request(app).put('/chocolates/555');
      expect(response.body).to.be.deep.equal({"message": "chocolate not found"});
      expect(response.status).to.be.equal(404);
    })
  });
});
