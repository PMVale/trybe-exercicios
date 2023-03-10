import React from 'react'
import Loading from './components/Loading';
import User from './components/User';

class App extends React.Component {
  state = {
    loading: true,
    userData: [],
  }

  componentDidMount() {
    this.fetchUser();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const AGE = 50;
    const userAge = nextState.userData[0].dob.age;
    console.log(userAge)
    if (userAge > AGE) {return false}
    return true;
  }
  
  fetchUser = async () => {
    const response = await fetch('https://api.randomuser.me/ ');
    const data = await response.json();
    console.log(data);
    this.setState({
      userData: data.results,
      loading: false,
    })
  }

  getUserData = (data) => {
    return {
      name: `${data.name.first} ${data.name.last}`,
      email: data.email,
      age: data.dob.age,
      image: data.picture.large,
    }
  }
  
  render() {
    const {loading, userData} = this.state;
    return (
      <div>
        {
          loading 
            ? <Loading />
            :
              <User
                data={this.getUserData(userData[0])}
              />
        }
      </div>
    )
  }
}

export default App;
