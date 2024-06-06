import P5 from 'p5'

const main = document.getElementById('main');
let grid: number[][] = [];
const RESOLUTION = 0.1//0.1;


const sketch = (p5: P5) => {
    p5.setup = function() {
        let width = document.documentElement.scrollWidth;
        let height = document.documentElement.clientHeight;
        let numCols: number = width * RESOLUTION;
        let numRows: number = height * RESOLUTION;
        p5.createCanvas(width, height);
        for (let i = 0; i < numRows; i++) {
            grid[i] = [];
            for (let j = 0; j < numCols; j++) {
                grid[i][j] = Math.random();
            }
        }
        console.log(grid);
    }

    p5.draw = function() {
        p5.background(220);
        let r = 0;
        let c = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                p5.push()
                p5.translate(j / RESOLUTION, i / RESOLUTION);
                p5.rotate(grid[i][j]);
                p5.line(0, -2, 0, 2);
                p5.pop();
                //ellipse.translate(j/RESOLUTION,i/RESOLUTION)
            }
        }
    }
}

function findClosestpoint(grid: number[][]) {

}

if (main !== null) {
    new P5(sketch, main);
}
