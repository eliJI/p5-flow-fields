import P5 from 'p5'

const main = document.getElementById('main');
let grid: number[][] = [];
const RESOLUTION = 0.1//0.1;

const sketch = (p5: P5) => {
    p5.setup = function() {
    

        let width = document.documentElement.scrollWidth;
        let height = document.documentElement.clientHeight;

        let numCols:number = width/2 * RESOLUTION;
        let numRows:number = height/2 * RESOLUTION;
        p5.createCanvas(width, height);

        for (let i = 0; i < numRows; i++) {
            grid[i] = [];
            for (let j = 0; j < numCols; j++) {
              grid[i][j] = Math.random();
            }
        }
        console.log(grid);
    }

    p5.draw = function () {
        p5.background(220);
    
        let r = 0
        let c = 0
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                p5.translate(j/RESOLUTION,i/RESOLUTION)
                let ellipse = p5.ellipse(5, 5,5,5);
                p5.translate(-(j/RESOLUTION),-(i/RESOLUTION))
              //ellipse.translate(j/RESOLUTION,i/RESOLUTION)
            

            }
        }
       
    
    }
}

if (main !== null) {
 new P5(sketch, main)   
}
