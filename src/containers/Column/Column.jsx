import React, {Component} from 'react';
import Card from '../../components/Card';
import { connect } from 'react-redux';
import { removeCard } from '../../actions';

class Column extends Component {
  constructor (props){
    super(props);
    
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
        <div>
        <Card card={card} key={card.id}/>
        <form>
          <button value={card.id} onClick={this.handleDelete}>
            Delete Card
          </button>
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