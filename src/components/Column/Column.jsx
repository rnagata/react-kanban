import React, {Component} from 'react';
import Card from '../Card';

class Column extends Component {
  constructor (props){
    super(props);
  }

  render(){
    console.log('Column', this.props.cards);
    const cardList = this.props.cards
    .map((card) => {
      return (
        <Card
          key={card.id}
          title={card.title}
          body={card.body}
          priority={card.priority.name}
          status={card.status.name}
          createdBy={card.createdBy.first_name}
          assignedTo={card.assignedTo.first_name}
        />
      )
    })
    return (
      <>
      {cardList}
      </>
    );
  }
}



// const Column = (props) => {
//   const {
//     cards, title
//   } = props;

//   return (
//     <div className="column">
//       <div>{title}</div>
//       <div>{cards}</div>
//     </div>
//   );
// }

export default Column;