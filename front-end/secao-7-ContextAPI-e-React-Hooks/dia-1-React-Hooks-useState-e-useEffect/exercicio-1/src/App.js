import { useState } from "react";


function App() {

  const [formName, setFormName] = useState('');
  const [formAge, setFormAge] = useState('0');
  const [formCity, setFormCity] = useState('');

  const handleChange = ({target}) => {
    const {name, value} = target;
    switch(name) {
      case 'formName':
        return setFormName(value);
      case 'formAge':
        return setFormAge(value);
      case 'formCity':
        return setFormCity(value);
      default:
        return;
    }
  }

  return (
    <div>
      <h1>Exercicio</h1>
      <form>
        <label>
          Nome Completo:
          <input type="text" value={formName} name='formName' onChange={ handleChange } />
        </label>
        <label>
          Idade:
          <input type="number" value={formAge} name='formAge' onChange={ handleChange } />
        </label>
        <label>
          Cidade:
          <input type="text" value={formCity} name='formCity' onChange={ handleChange } />
        </label>
      </form>
    </div>
  );
}

export default App;
