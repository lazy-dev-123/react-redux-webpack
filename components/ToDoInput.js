import React, { Component } from 'react'
import actions from '../redux/actions'

class ToDoInput extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			inputText: ''
		}
	}

	handleChange(event) {
		this.setState({
			inputText: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.dispatch(actions.addTodo(this.state.inputText));
	}

 	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
				<input 
					type="text" 
					placeholder="Type in your todo" 
					value={this.state.inputText} 
					onChange={this.handleChange.bind(this)} 
				/>
				<input type="submit" text="Submit" />
				</form>
			</div>
		)
	}
}

export default ToDoInput