import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>Escolha uma opção:
        <select name='select' value={ value } onChange={handleChange} >
          <option value={''}></option>
          <option value={'1'}>Opção 1</option>
          <option value={'2'}>Opção 2</option>
          <option value={'3'}>Opção 3</option>
        </select>
        {value === '' ? 'Escolha uma das opções' : ''}
      </label>
)
  }
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Select;