import React from "react";
import { compose } from 'redux';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import { addTask, deleteTask, changeInput } from './actions';
import "./App.css";
import { makeSelectArray, makeSelectInputValue } from "./selectors";
import { createStructuredSelector } from "reselect";



class TodoList extends React.Component {
	
	onAddTaskClick = () => {
		const {inputValue} = this.props;
		if(inputValue !== '') {
			this.props.onAddTask();
		}
	}

	onDeleteTaskClick = (task) => {
		this.props.onDeleteTask(task);
	}

	onChangeInputValueType = (e) => {
		this.props.onChangeInputValue(e.target.value);
	}
	

	// onInputDate = (e) => {
	// 	let textDate = e.target.value;
	// 	this.setState({inputDate: textDate});
	// 	console.log(textDate);
	// }

	// onInputTime = (e) => {
	// 	let textTime = e.target.value;
	// 	this.setState({inputTime: textTime});
	// 	console.log(textTime);
	// }

	// onInputComments = (e) => {
	// 	let textComments = e.target.value;
	// 	this.setState({comments: textComments});
	// 	console.log(textComments);
	// }

	// addNote = (e) => {
	// 	e.preventDefault();
	// 	let changeArr = this.state.array;
	// 	let inputObj = {
	// 		name: this.state.inputName,
	// 		date: this.state.inputDate,
	// 		time: this.state.inputTime,
	// 		comments: this.state.comments
	// 	}
	// 	changeArr.push(inputObj);
	// 	console.log(changeArr);
	// 	this.setState({array: changeArr, inputName: "", inputDate: "", inputTime: "", comments: ""});
	// }

	// delNote = (index) => {
	// 	let changeArr = this.state.array;
	// 	changeArr.splice(index, 1);
	// 	console.log(changeArr);
	// 	this.setState({array: changeArr});
 	// }

 		render() {
		const {array, inputValue} = this.props;
		console.log(array);
		let note = array? array.map( (item, index) => {
			return <div className="item form" key={index}>{item.text}
						<button className="btn del" onClick={() => this.onDeleteTaskClick(item)}>Delete Task</button>
					</div>
		}):null;

		return (<div>
					<input className="input" type="text" onChange={this.onChangeInputValueType} value={inputValue} />
					<button className="btn submit" onClick={this.onAddTaskClick}>Add Task</button>
					<div>{note}</div>
				</div>);

		// return (
		// 	<div className="parent">
		// 		<div className="head">
		// 			<h1 className="h1">TO-DO</h1>
		// 		</div>
		// 		<div className = "form">
		// 			<div className = "borderForm"></div>
		// 			<form action="#" className = "fields">
		// 				<label htmlFor="name">Task's Name</label>
		// 				<input className="input" type="text" id="name" name="name" placeholder="Name" onChange={this.onInputName} value={this.state.inputName} />
		// 				<label htmlFor="date">Date</label>
		// 				<input type="date" id="date" name="date" placeholder="mm/dd/yyyy" onChange={this.onInputDate} value={this.state.inputDate} />
		// 				<label htmlFor="time">Time</label>
		// 				<input type="time" id="time" name="time" onChange={this.onInputTime} value={this.state.inputTime} />
		// 				<label htmlFor="notes">Notes</label>
		// 				<textarea id="notes" placeholder="Appointment Notes" name="comments" onChange={this.onInputComments} value={this.state.comments}></textarea>
		// 				<button className="submit" onClick={this.addNote}>Add Task</button>
		// 			</form>
		// 		</div>
		// 		<ul>
		// 			{note}
		// 		</ul>
		// 	</div>
		// )
	}
}

const withReducer = injectReducer({ key: 'todo', reducer });


export function mapDispatchToProps(dispatch) {
    return {
		onAddTask: () => dispatch(addTask()),
		onDeleteTask: (task) => dispatch(deleteTask(task)),
		onChangeInputValue: (value) => dispatch(changeInput(value)),
    };
}

const mapStateToProps = createStructuredSelector({
	array: makeSelectArray(),
	inputValue: makeSelectInputValue(),
});

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default compose(
    withReducer,
    withConnect
)(TodoList);
