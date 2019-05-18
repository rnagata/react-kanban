import React, {Component} from 'react';
import Card from '../../components/Card';

class Column extends Component {
  constructor (props){
    super(props);
  }

  render(){
    const cardList = this.props.cards
    .filter((card) => {
      console.log('column render filter ', card);
      return card.status_id.toString() === this.props.statusFilter;
    })
    .map((card) => {
      console.log(card);
      return (
        <Card
          key={card.id}
          title={card.title}
          body={card.body}
          priority={card.priority.name + ' Priority'}
          createdBy={'Created By: ' + card.createdBy.first_name + " " + card.createdBy.last_name}
          assignedTo={'Assigned To: ' + card.assignedTo.first_name + " " + card.assignedTo.last_name}
        />
      )
    })
    return (
      <div className="column">
        <div><h1>{this.props.label}</h1></div>
        {cardList}
      </div>
    );
  }
}

export default Column;