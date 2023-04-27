// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email, clicked } = props;
  const emailColor = clicked && ((verifyEmail(email)) ? 'green' : 'red');
  return (
    <div>
      <h2 style={{color: emailColor}} data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {
           email && (
             <h3 data-testid="id-is-email-valid" >
               {(verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}
             </h3>
           )
         }
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;
