import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestAPI } from '../redux/actions';

class Character extends Component {
  state = {
    inputText: '',
  }

  handleChange = ({target}) => {
    const {name, value} = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const {inputText} = this.state;
    const {isLoading, name, titles, aliases, dispatch, hasSearched} = this.props;
    return (
      <div>
        <div>
          <input type='text' value={inputText} name='inputText' onChange={this.handleChange} placeholder='Coloque o nome completo do personagem'/>
          <button type='button' onClick={ () => dispatch(requestAPI(inputText)) }>Pesquisar</button>
        </div>
        <div>
          {hasSearched && (
            isLoading 
            ? <p>Carregando...</p> 
            : <div>
                <h2>{name}</h2>
                <ul>
                  <h3>Títulos</h3>
                  {titles.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul>
                  <h3>Apelidos</h3>
                  {aliases.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
          )}
        </div>
      </div>
    );
  }
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  aliases: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  hasSearched: state.hasSearched,
  name: state.data.name,
  titles: state.data.titles,
  aliases: state.data.aliases,
});

export default connect(mapStateToProps)(Character);