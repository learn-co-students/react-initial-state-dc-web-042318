import React from "react";

class ToggleButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEnabled: false
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({ isEnabled: !this.state.isEnabled });
	}

	render() {
		return (
			<button className="toggle-button" onClick={this.toggle}>
				I am toggled {this.state.isEnabled ? "on" : "off"}
			</button>
		);
	}
}

export default ToggleButton;
