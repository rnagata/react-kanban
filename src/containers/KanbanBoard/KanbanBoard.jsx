import React, {Component} from 'react';
import Column from '../../components/Column';

class KanbanBoard extends Component {
  constructor (props) {
    super(props);

    this.state = {
      input: ''
    };
  }
  
  render() {
    const columns = this.props.columns
    // .filter((book) => {
    //   return book.title.toLowerCase().includes(input.toLowerCase());
    // })
    .map((column, idx) => {
      return (
        <Column 
          key={idx}
          title={column.title}
        />
      );
    });
  
    return (
      <>
      {columns}
      </>
    )
  }
}

export default KanbanBoard;
