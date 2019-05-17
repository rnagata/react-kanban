import React from 'react';
import './App.css';
import Column from './containers/Column';
import {connect} from "react-redux";
import {loadCards} from "./actions";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    this.props.loadCards();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Kanban Board</h1>
        </header>
        <div className="board">
          <Column cards={this.props.cards} statusFilter='1' label='Queue'/>
          <Column cards={this.props.cards} statusFilter='2' label='In Progress'/>
          <Column cards={this.props.cards} statusFilter='3' label='Done'/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCards: () => {
      return dispatch(loadCards());
    }
  };
};

// state parameter refers to the entire Redux store state.
const mapStateToProps = state => {
  console.log('mapStateToProps', state.cardReducer.cards);
  return {
    cards: state.cardReducer.cards
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;