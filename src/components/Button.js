import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { DropdownButton, Dropdown, Button, ButtonGroup } from 'react-bootstrap';
class Buttons extends React.Component {
	handleSelect = (evt) => {
		this.props.gridSize(evt);
	}
	render() {
		return (
			<div className="center">
				<ButtonGroup aria-label="Basic example">
					
					<Button variant="secondary" onClick={this.props.startButton}>Start</Button>					
					<Button className="btn btn-default" onClick={this.props.clear}>Clear</Button>
					<Button className="btn btn-default" onClick={this.props.slow}>Slow</Button>
					<Button className="btn btn-default" onClick={this.props.fast}>Fast</Button>
					<Button variant="secondary" onClick={this.props.stopButton}>Stop</Button>
					
					<DropdownButton as={ButtonGroup} title="Grid Size" id="bg-nested-dropdown" onSelect={this.handleSelect}>
					    <Dropdown.Item eventKey="1">30x50</Dropdown.Item>
						<Dropdown.Item eventKey="2">30x60</Dropdown.Item>
						<Dropdown.Item eventKey="3">30x70</Dropdown.Item>
                    </DropdownButton>
					
                </ButtonGroup>				
			</div>
		)
	}
}
export default Buttons;