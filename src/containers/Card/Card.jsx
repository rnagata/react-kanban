import React, {Component} from 'react';
import EditCard from '../../containers/EditCard';

class Card extends Component {
  constructor(props){
    super(props);

    this.state = {
      renderEditCard: false
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleEdit(e){
    e.preventDefault();
    this.setState({renderEditCard : !this.state.renderEditCard});
  }

  handleCancel(e){
    e.preventDefault();
    this.setState({renderEditCard : !this.state.renderEditCard});
  }

  render(){
    let renderEditCard = this.state.renderEditCard;

    return(
      <div className="card">
        <EditCard card={this.props.card} render={renderEditCard} handleCancel={this.handleCancel}/>
        <h3>
          {this.props.card.title} #{this.props.card.id}
        </h3>
        <p>{this.props.card.body}</p>
        <p>{this.props.card.priority.name}</p>
        <p>
          {'Created By: ' +
          this.props.card.createdBy.first_name +
          this.props.card.createdBy.last_name}
        </p>
        <p>
          {'Assigned To: ' +
          this.props.card.assignedTo.first_name +
          this.props.card.assignedTo.last_name}
        </p>
        <button onClick={this.handleEdit}>Edit</button>
      </div>
    )
  }
}

export default Card;