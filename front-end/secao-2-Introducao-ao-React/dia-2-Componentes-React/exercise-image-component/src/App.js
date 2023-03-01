import Image from './Image';
import './App.css';
import staringCat from './staringCat.jpg'
import UserProfile from './UserProfile';

function App() {
  const joao = {
    id: 102,
    name: 'João',
    email: 'joao@gmail.com',
    avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png'
  };

  const amelia = {
    id: 77,
    name: 'Amélia',
    email: 'amelia@gmail.com',
    avatar: 'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png'
  };
  return (
    <section>
      <section>
        <Image source={ staringCat } alternativeText = 'Cute cat staring'/>
      </section>
      <section>
        <UserProfile user={ joao }/>
        <UserProfile user={ amelia }/>
      </section>
    </section>
  );
}

export default App;
