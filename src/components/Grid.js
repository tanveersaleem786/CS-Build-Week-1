import React from 'react';
import Box from './Box';
class Grid extends React.Component {
  render() {
    const width = this.props.cols * 14;
    var boxes = [];
    var boxClass = "";
    for (var i = 0; i < this.props.rows; i++) {
      for (var j = 0; j < this.props.cols; j++) {
        let boxId = i + "_" + j;
        boxClass = this.props.grid[i][j] ? "box on" : "box off";
        boxes.push(
          <Box 
            boxClass = {boxClass}
            key = {boxId}
            boxId = {boxId}
            row = {i}
            col = {j}
            selectBox = {this.props.selectBox}
          />
        );
      }
    }
    return (
      <div className="grid" style={{width: width}}>
        {boxes}
      </div>
    );
  }
}
export default Grid;