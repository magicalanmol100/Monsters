import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchTerm:""
    };
  }
  handleChange=(e)=>{
    this.setState({searchTerm:e.target.value})
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(err => console.log('error'));
  }
  render() {
    const {monsters,searchTerm}=this.state;
    const filteredMonsters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/></div>
    )
  }
}

export default App;
