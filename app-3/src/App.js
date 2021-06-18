import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: ' ',
      drinks: ['Water', 'Tea', 'Milk', 'Beer', 'Margaritas']
    };
  }

  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    let drinksToDisplay = this.state.foods
    .filter((element, index) => {
      return element.includes(this.state.filterString);
    })
    .map((element, index) => {
      return <h2 key={index}> {element} </h2>
    });

    return (
      <div className='App'>
        <input onChange={e => this.handleChange(e.target.value)} type='text' />
        {drinksToDisplay}
      </div>
    );
  }
}

export default App;
