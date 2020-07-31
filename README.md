# Project Name: Game Of life

# Link
https://admiring-noyce-b885f6.netlify.app/

# Language
Game of life is develop in React. In the Game of Life, these rules examine each cell of the grid. For each cell, it counts that cell's eight neighbors (up, down, left, right, and diagonals), and then act on that result. Here are following rules for this game 
 
 -If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies.
 -If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead.


# Button
- Start: use to start game
- Stop:  use to stop the game
- Slow/Fast: use to control the speed of the game
- Clear: use to clear the game
- Preset 1/2: Have some predefined patterns for game
- Ramdomize: use to set random pattern for the game
- Grid Size: Use to change the grid size

# Code
- GameOflife: is the main component for this game
- Box: compnent use to creat a cell
- Grid: use to create a grid
- Button: use to create add the buttons 

# Style
- react-bootstrap

# Installation
- npm install -g create-react-app
- npx create-react-react-app gameoflife
- npm install --save react-bootstrap bootstrap
 