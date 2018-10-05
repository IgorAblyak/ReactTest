import React from "react";

class ListItem extends React.Component {
	constructor(props) {
		super(props);
	}



	deleteItem = () => {
		this.props.deleteLi(this.props.index);
	}



	render() {
		return (
			<li className="item">
			<div className="name">{this.props.name}</div>
			<div className="date">{this.props.date}
			<span>{this.props.time}</span>
			</div>
			<p className="comments">{this.props.comments}</p>
			<span className="close" onClick={this.deleteItem}></span>
			</li>
		)
	}
}


export default ListItem;