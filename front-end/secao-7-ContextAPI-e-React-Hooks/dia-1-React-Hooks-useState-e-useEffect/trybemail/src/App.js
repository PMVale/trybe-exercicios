import { useState, useEffect } from 'react'

const emailList = [
  {
    id: 0,
    title: 'Email de spam',
    status: 0,
  },
  {
    id: 1,
    title: 'Você tem uma herança a receber',
    status: 0,
  },
  {
    id: 2,
    title: 'Principe Nigeriano precisa de sua ajuda',
    status: 0,
  },
];

function App() {

  const [emails, setEmails] = useState(emailList);

  const readBtn = (id) => {
    // const newEmails = [...emails];
    // const newEmails = emails;
    // newEmails[id].status = 1;
    // console.log(newEmails);
    // setEmails(newEmails);
    setEmails((prevEmails) => prevEmails.map((item) => item.id === id ? {...item, status: 1} : item));
  };

  const unreadBtn = (id) => {
    // const newEmails = [...emails];
    // const newEmails = emails;
    // newEmails[id].status = 0;
    // console.log(newEmails);
    // setEmails(newEmails);
    setEmails((prevEmails) => prevEmails.map((item) => item.id === id ? {...item, status: 0} : item));
  };

  const readAllBtn = () => {
    // const newEmails = [...emails];
    // const newEmails = emails;
    // newEmails.forEach((item) => item.status = 1);
    // console.log(newEmails);
    // setEmails(newEmails);
    setEmails((prevEmails) => prevEmails.map((item) => ({...item, status: 1})));
  };

  const unreadAllBtn = () => {
    // const newEmails = [...emails];
    // const newEmails = emails;
    // newEmails.forEach((item) => item.status = 0);
    // console.log(newEmails);
    // setEmails(newEmails);
    setEmails((prevEmails) => prevEmails.map((item) => ({...item, status: 0})));
  }

  useEffect(() => {
    console.log(emails.every((item) => item.status === 1));
    if (emails.every((item) => item.status === 1)) {
      return alert('Parabéns! Você leu todas suas mensagens!');
    }
  }, [emails]);

  return (
    <div>
      <h1>TrybeMail</h1>
      <button type='button' onClick={ readAllBtn } >Marcar todos como lidos</button>
      <button type='button' onClick={ unreadAllBtn }>Marcar todos como não lidos</button>
      {emails.map((item) => (
        <div key={item.id}>
          <span>{item.title}</span>
          <button type='button' onClick={ () => readBtn(item.id)}>Lido</button>
          <button type='button' onClick={ () => unreadBtn(item.id)}>Não Lido</button>
        </div>
      ))}
    </div>
  );
}

export default App;
