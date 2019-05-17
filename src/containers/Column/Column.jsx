import React, {Component} from 'react';
import Card from '../../components/Card';

class Column extends Component {
  constructor (props){
    super(props);
  }

  render(){
    // console.log('Column', this.props.cards);
    const cardList = this.props.cards
    .filter((card) => {
      // console.log(card);
      // console.log('id ', card.status_id);
      // console.log('filter ', this.props.statusFilter);
      return card.status_id == this.props.statusFilter;
    })
    .map((card) => {
      // console.log('map ', cardList);
      return (
        <Card
          key={card.id}
          title={card.title}
          body={card.body}
          priority={card.priority.name + ' Priority'}
          createdBy={'Created By: ' + card.createdBy.first_name}
          assignedTo={'Assigned To: ' + card.assignedTo.first_name}
        />
      )
    })
    return (
      <>
      <div className="column">
        <div><h1>{this.props.label}</h1></div>
        <div className="card">{cardList}</div>
      </div>
      </>
    );
  }
}

export default Column;