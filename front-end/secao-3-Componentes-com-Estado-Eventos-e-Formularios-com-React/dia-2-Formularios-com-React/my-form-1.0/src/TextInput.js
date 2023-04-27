import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { valueText, valueEmail, handleChange } = this.props;
    const limitText = 25;
    return (
      <div>
        <label htmlFor='text'>Coloque seu nome:
          <input name='text' type={'text'} value={valueText} onChange={handleChange} id='text' />
          { !valueText ? 'O nome precisa ser preenchido' : ''}
          { valueText.length > limitText ? 'O nome não pode ter mais de 25 caracteres' : ''}
        </label>
        <br />
        <label>Coloque seu email:
          <input name='email' type={'email'} value={valueEmail} onChange={handleChange}></input>
          { !valueEmail ? 'O email precisa ser preenchido' : ''}
          { valueEmail.length > limitText ? 'O email não pode ter mais de 25 caracteres' : ''}
        </label>
      </div>
)
  }
}

TextInput.propTypes = {
  valueText: PropTypes.string.isRequired,
  valueEmail: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default TextInput;