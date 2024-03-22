import P5 from 'p5'

const main = document.getElementById('main');

const sketch = (p5: P5) => {
    p5.setup = function() {
        p5.createCanvas(document.documentElement.scrollWidth, document.documentElement.clientHeight);
    }

    p5.draw = function () {
        p5.background(220);
        p5.ellipse(50,50,80,80);
    }
}

if (main !== null) {
 new P5(sketch, main)   
}
