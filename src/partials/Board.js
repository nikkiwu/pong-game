import {SVG_NS} from '../settings';


export default class Board {

    constructor(width, height){
        this.width = width;
        this.height = height;
        this.music = new Audio('public/sounds/pong-01.wav');



    }


    render(svg) {
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'fill', 'grey');
        rect.setAttributeNS(null, 'stroke', 'black');
        rect.setAttributeNS(null, 'stroke-width', '5');
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);

        let line = document.createElementNS(SVG_NS, 'line');
        line.setAttributeNS(null, 'x1', (this.width / 2));
        line.setAttributeNS(null, 'y2', 0);
        line.setAttributeNS(null, 'x2', (this.width /2));
        line.setAttributeNS(null, 'y2', (this.height));
        line.setAttributeNS(null, 'stroke', 'black');
        line.setAttributeNS(null, 'stroke-width', '5');

        svg.appendChild(rect);
        svg.appendChild(line);
    }
}