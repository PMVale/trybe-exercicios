const inputName = document.getElementById('name');

const inputEmail = document.getElementById('email');

const textarea = document.getElementById('about-me');

const submitBtn = document.getElementById('submit');

nameCheck = () => {
  inputName.addEventListener('change', () => {
      if (inputName.value.length < 10 || inputName.value.length > 40) {
        alert('Campo deve ter entre 10 e 40 caracteres');
        inputName.value = '';
      };
  });
};

emailCheck = () => {
  inputEmail.addEventListener('change', () => {
      if (inputEmail.value.length < 10 || inputEmail.value.length > 40) {
        alert('Campo deve ter entre 10 e 40 caracteres');
        inputEmail.value = '';
      };
  });
};

areaCheck = () => {
  textarea.addEventListener('change', () => {
    if (textarea.value.length > 500) {
      alert('Limite de texto de 500 caracteres');
      // textarea.value = '';
    };
  });
};

submitBlock = () => {
  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
  });
};

submitCheck = () => {
  submitBtn.addEventListener('click', (event) => {
    if (inputName.value.length < 10 || inputName.value.length > 40) {
      event.preventDefault();
      alert('Dados inválidos');
    } else if (inputEmail.value.length < 10 || inputEmail.value.length > 40) {
      event.preventDefault();
      alert('Dados inválidos');
    } else if (textarea.value.length > 500) {
      event.preventDefault();
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip');
    };
  });
};

nameCheck();

emailCheck();

areaCheck();

// submitBlock();

submitCheck();
