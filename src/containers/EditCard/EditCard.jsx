// positionFixed, a css property,  allows a model to be overlayed over HTML elements
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { editCard } from '../../actions';

class EditCard extends Component {
  constructor(props){
    super(props);

    // Values contained constitue the initial state
    this.state = {
      title: this.props.card.title,
      body: this.props.card.body,
      priority_id: this.props.card.priority_id.toString(),
      status_id: this.props.card.status_id.toString(),
      assigned_to: this.props.card.assigned_to.toString()
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleAssignedChange = this.handleAssignedChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    const { value } = e.target;
    this.setState({title : value}); 
  }

  handleBodyChange(e) {
    const { value } = e.target;
    this.setState({body : value});
  }

  handlePriorityChange(e) {
    const { value } = e.target;
    this.setState({priority_id : value});
  }

  handleStatusChange(e) {
    const { value } = e.target;
    this.setState({status_id : value});
  }

  handleAssignedChange(e) {
    const { value } = e.target;
    this.setState({assigned_to : value});
  }

  handleSubmit(e) {
    e.preventDefault(); // Stops default behavior, e.g. page refreshes.
    const { 
      title, 
      body, 
      priority_id,
      status_id,
      assigned_to } 
      = this.state;
    const id = this.props.card.id;
    this.props.editCard({
      id,
      title,
      body,
      priority_id,
      status_id,
      assigned_to
    });
    this.props.handleCancel(e);
  }

  render(){
    if (this.props.render) {
      return (
      <div className="edit-form">
        <p>Edit Form #{this.props.card.id}</p>
        
        <div>
          <label>Title: </label>
          <input type="text" placeholder={this.state.title}
          onChange={this.handleTitleChange}/>
        </div>

        <div>
          <label>Body: </label>
          <input type="text" placeholder={this.state.body}
          onChange={this.handleBodyChange}/>
        </div>

        <div>
          <label>Priority: </label>
          <input type="radio" name="priority" value="1"
          checked={this.state.priority_id === '1'}
          onChange={this.handlePriorityChange}/>
          Low
          <input type="radio" name="priority" value="2"
          checked={this.state.priority_id === '2'}
          onChange={this.handlePriorityChange}/>
          Medium
          <input type="radio" name="priority" value="3"
          checked={this.state.priority_id === '3'}
          onChange={this.handlePriorityChange}/>
          High
          <input type="radio" name="priority" value="4"
          checked={this.state.priority_id === '4'}
          onChange={this.handlePriorityChange}/>
          Blocker
        </div>

        <div>
          <label>Status: </label>
          <input type="radio" name='status_id' value='1'
          checked={this.state.status_id === '1'}
          onChange={this.handleStatusChange}/>
          Queue
          <input type="radio" name="status_id" value="2"
          checked={this.state.status_id === "2"}
          onChange={this.handleStatusChange}/>
          In Progress
          <input type="radio" name="status_id" value="3"
          checked={this.state.status_id === "3"}
          onChange={this.handleStatusChange}/>
          Done
        </div>

        <div>
          <label>Assigned To: </label>
          <input type="radio" name='assigned_to' value='1'
          checked={this.state.assigned_to === '1'}
          onChange={this.handleAssignedChange}/>
          User One
          <input type="radio" name="assigned_to" value="2"
          checked={this.state.assigned_to === "2"}
          onChange={this.handleAssignedChange}/>
          User Two
          <input type="radio" name="assigned_to" value="3"
          checked={this.state.assigned_to === "3"}
          onChange={this.handleAssignedChange}/>
          User Three
        </div>

        <button onClick={this.handleSubmit}>
          Apply
        </button>
        <button onClick={this.props.handleCancel}>
          Cancel
        </button>
      </div> )
    } else {
      return null;
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editCard: (newValues) => {
      const editCardAction = editCard(newValues);
      dispatch(editCardAction);
    }
  }
}

EditCard = connect(
  null,
  mapDispatchToProps
)(EditCard);

export default EditCard;