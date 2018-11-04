import {SVG_NS} from '../settings';

export default class Winner {

    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }


    render (svg, winner) {

        let text = document.createElementNS(SVG_NS, 'text');
        text.setAttributeNS(null, 'font-size', this.size);
        text.setAttributeNS(null, 'font-family', 'Silkscreen Web');
        text.setAttributeNS(null, 'fill', 'gold');
        text.setAttributeNS(null, 'x', this.x);
        text.setAttributeNS(null, 'y', this.y);
        text.textContent = winner;
        svg.appendChild(text);
    }
}