import React from 'react';
import './App.css';
import KanbanBoard from './containers/KanbanBoard';
import {connect} from "react-redux";
import {loadCards} from "./actions";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Kanban Board',
      columns: [
        {
          title: 'Queue'
        },
        {
          title: 'In Progress'
        },
        {
          title: 'Done'
        }
      ]
    }
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
    // const input = this.state.input;
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.title}</h1>
        </header>
        <div>
          <KanbanBoard columns={this.state.columns} />
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

App = connect(
  null, // mapStateToProps,
  mapDispatchToProps
)(App);

export default App;