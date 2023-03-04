import React from 'react';
import Select from './Select';
import TextInput from './TextInput';

class Form extends React.Component {
  
  state = {
    textArea: '',
    select: '',
    text: '',
    email: '',
    checkbox: false,
    formError: false,
  }

  // handleTextAreaChange = (event) => {
  //   this.setState({textAreaValue: event.target.value})
  // }

  // handleSelectChange = (event) => {
  //   this.setState({selectValue: event.target.value})
  // }

  // handleInputTextChange = (event) => {
  //   this.setState({inputTextValue: event.target.value})
  // }

  // handleInputEmailChange = (event) => {
  //   this.setState({inputEmailValue: event.target.value})
  // }
  
  handleError = () => {
    const { text, email, textArea, select, checkbox } = this.state;
    const errorCases = [
      !text.length,
      !email.match(/^\S+@\S+$/i),
      !textArea.length,
      !select.length,
      !checkbox,
    ];

    const filledForm = errorCases.every((error) => error !== true);

    this.setState({
      formError: !filledForm,
    });
  }
  handleChange = ({target}) => {
    // const { name, target } = target;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.handleError)
  }


  render() {
    
    const { textArea, select, email, text, checkbox } = this.state
    
    return (
      <div>
        <h1>Form</h1>
        <form>
          <fieldset>
            <legend>Coloque seus dados</legend>
            <label>Coloque seu texto:
              <textarea name='textArea' value={textArea} onChange={this.handleChange}></textarea>
            </label>
            <br />
            <Select value={select} handleChange={this.handleChange} />
            <br />
            <TextInput handleChange={this.handleChange} valueText={text} valueEmail={email} />
            <br />
            <label>Selecione
              <input name='checkbox' type={'checkbox'} value={checkbox} onChange={this.handleChange}></input>
            </label>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form;