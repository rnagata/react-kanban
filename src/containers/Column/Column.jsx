import React, {Component} from 'react';
import Card from '../../components/Card';
import { connect } from 'react-redux';
import { removeCard } from '../../actions';

class Column extends Component {
  constructor (props){
    super(props);

    this.state = {

    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.removeCard(e.target.value);
  }

  render(){
    const cardList = this.props.cards
    .filter((card) => {
      return card.status_id.toString() === this.props.statusFilter;
    })
    .map((card) => {
      return (
        <div>
        <Card
          key={card.id}
          id = {card.id}
          title={card.title}
          body={card.body}
          priority={card.priority.name + ' Priority'}
          createdBy={'Created By: ' + card.createdBy.first_name + " " + card.createdBy.last_name}
          assignedTo={'Assigned To: ' + card.assignedTo.first_name + " " + card.assignedTo.last_name}
        />
        <form>
          <button value={card.id} onClick={this.handleSubmit}>
            Delete Card
          </button>
          {/* <button value={card.id} onClick={this.handleSubmit}>
            Edit Card
          </button> */}
        </form>
        </div>
      );
    })
    return (
      <div className="column">
        <div><h1>{this.props.label}</h1></div>
        {cardList}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeCard: (id) => {
      // console.log('remove card id', id);
      const removeCardAction = removeCard(id);
      dispatch(removeCardAction);
    }
  };
}

Column = connect(
  null,
  mapDispatchToProps
)(Column);

export default Column;