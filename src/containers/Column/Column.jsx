import React, {Component} from 'react';
import Card from '../Card';
import { connect } from 'react-redux';
import { removeCard } from '../../actions';

class Column extends Component {
  constructor (props){
    super(props);
    
    this.state = {
      columnName: ("column-" + this.props.name),
    }

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
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
        <>
        <Card key={card.id} card={card} />
        <form key={"deleteForm_" + card.id} className="delete-form">
          <button key={"deleteButton_" + card.id} value={card.id} onClick={this.handleDelete} >
            Delete Card
          </button>
        </form>
        </>
      );
    });

    return (
      <div className={this.state.columnName}>
        <div className="header-bg">
          <h1 className="header-text">
            {this.props.label}
          </h1>
        </div>
        {cardList}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeCard: (id) => {
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