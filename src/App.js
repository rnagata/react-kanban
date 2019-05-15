import React from 'react';
import './App.css';
import KanbanBoard from './containers/KanbanBoard';
//import Column from './components/Column';

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

export default App;