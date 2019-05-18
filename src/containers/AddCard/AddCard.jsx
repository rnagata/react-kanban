import React, {Component, createRef} from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions';

class AddCard extends Component {
  constructor (props){
    super(props);
    
    // Values contained constitue the initial state
    this.state = {
      title: 'Default Title', 
      body: 'Default Body', 
      priority_id: '1', // value should match value of a 'priority' radio button
      created_by: '1', // default to user with id of 1
      assigned_to: '3' // value should match value of an 'assigned_to' radio button
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleAssignedChange = this.handleAssignedChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    const { value } = e.target;
    this.setState({title : value}, () => { //Asynchronous
      // console.log('title ', this.state.title);
    }); 
  }

  handleBodyChange(e) {
    const { value } = e.target;
    this.setState({body : value}, () => {
      // console.log('body ', this.state.body);
    })
  }

  handlePriorityChange(e) {
    const { value } = e.target;
    this.setState({priority_id : value}, () => {
      // console.log('priority ', this.state.priority_id);
    })
  }

  handleAssignedChange(e) {
    const { value } = e.target;
    this.setState({assigned_to : value}, () => {
      // console.log('assigned to ', this.state.assigned_to);
    })
  }

  handleSubmit(e) {
    e.preventDefault(); // ?
    const { title, body, priority_id, created_by, assigned_to } = this.state;

    this.props.addCard({
      title,
      body,
      priority_id,
      created_by,
      assigned_to
    });

    this.setState({ // this setState() is what our fields will be changed to once the form has been submitted
      title: 'Default Title',
      body: 'Default Body',
      priority_id: '1', // priority_id here should match initial state
      created_by: '1', // created_by here should match initial state
      assigned_to: '3' // assigned_to here should match initial state
    });
  }

  render(){
    return (
      <form className="add-form">
        <h3>Add Card</h3>
        <div>
          <label>Title: </label>
          <input type="text" value={this.state.title}
            onChange={this.handleTitleChange}/>
        </div>
        <div>
          <label>Body: </label>
          <input type="text" value={this.state.body}
            onChange={this.handleBodyChange}/>
        </div>
        <div>
          <label>Priority: </label>
          <input type="radio" name='priority' value='1'
            checked={this.state.priority_id === '1'} // This button should only render as checked when the priority_id key in state has a value of true
            onChange={this.handlePriorityChange}/> 
            Low
          <input type="radio" name='priority' value='2'
            checked={this.state.priority_id === '2'} // ^ Same
            onChange={this.handlePriorityChange}/> 
            Medium
          <input type="radio" name='priority' value='3'
            checked={this.state.priority_id === '3'} // ^ Same
            onChange={this.handlePriorityChange}/>
            High
          <input type="radio" name='priority' value='4'
            checked={this.state.priority_id === '4'} // ^ Same
            onChange={this.handlePriorityChange}/> 
            Blocker
        </div>
        {/* Make dynamically populated or a user search later? */}
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
          Add Card
        </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => {
      const addCardAction = addCard(card);
      dispatch(addCardAction);
    }
  };
}

AddCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard);

export default AddCard;