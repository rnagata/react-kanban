import React from 'react';
import './App.css';
import Login from './containers/Login';
import Column from './containers/Column';
import AddCard from './containers/AddCard';
import {connect} from "react-redux";
import {loadCards} from "./actions";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: 'Kanban Board'
    }
  }

  componentDidMount(){
    this.props.loadCards();
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="app-title">{this.state.header}</h1>
          <Login/>
        </header>
        <div className="board">
          <Column cards={this.props.cards} statusFilter='1' label='Queue' name='queue'/>
          <Column cards={this.props.cards} statusFilter='2' label='In Progress' name='in-progress'/>
          <Column cards={this.props.cards} statusFilter='3' label='Done' name='done'/>
        </div>
        <AddCard/>
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
  return {
    cards: state.cardReducer.cards
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;