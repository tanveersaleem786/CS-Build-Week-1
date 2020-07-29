import React from 'react';
import { ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap';
class Buttons extends React.Component {
	handleSelect = (evt) => {
		this.props.gridSize(evt);
	}
	render() {
		return (
			<div className="center">
				<ButtonToolbar>
					<button className="btn btn-default" onClick={this.props.startButton}>
					  Start
					</button>
					<button className="btn btn-default" onClick={this.props.stopButton}>
					  Stop
					</button>
					<button className="btn btn-default" onClick={this.props.clear}>
					  Clear
					</button>
					<button className="btn btn-default" onClick={this.props.slow}>
					  Slow
					</button>
					<button className="btn btn-default" onClick={this.props.fast}>
					  Fast
					</button>
					<DropdownButton className="btn btn-default"
						title="Grid Size"
						id="size-menu"
						onSelect={this.handleSelect}
					>
						<Dropdown.Item eventKey="1">30x50</Dropdown.Item>
						<Dropdown.Item eventKey="2">30x60</Dropdown.Item>
						<Dropdown.Item eventKey="3">30x70</Dropdown.Item>
					</DropdownButton>
				</ButtonToolbar>
			</div>
		)
	}
}
export default Buttons;