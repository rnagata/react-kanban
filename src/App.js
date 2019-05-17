import React from 'react';
import './App.css';
// import KanbanBoard from './containers/KanbanBoard';
// import Card from './components/Card';
import Column from './components/Column';
import {connect} from "react-redux";
import {loadCards} from "./actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.handleInputChange = this.handleInputChange.bind(this);
  }
  // handleInputChange(e) {
  //   const { value } = e.target;
  //   this.setState({ input: value });
  // }
  componentDidMount(){
    this.props.loadCards();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Kanban Board</h1>
        </header>
        <div>
          <Column cards={this.props.cards} />
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