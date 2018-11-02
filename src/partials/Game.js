import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball'
import { SVG_NS, KEYS } from '../settings';
import Score from './Score';

export default class Game {

    constructor(element, width, height) {
        this.element = element;
        this.width = width;
        this.height = height;

        this.gameElement = document.getElementById(this.element);

        this.board = new Board(this.width, this.height);
        this.ball = new Ball(8, this.width, this.height);

        // this.ball2 = new Ball(12, this.width, this.height);
        // console.log(this.ball);

        this.paddleWidth = 8;
        this.paddleHeight = 56;
        this.boardGap = 10;

        this.player1 = new Paddle(
            this.height,
            this.paddleWidth,
            this.paddleHeight,
            this.boardGap,
            ((this.height - this.paddleHeight) / 2),
            KEYS.a,
            KEYS.z,
            'player1'
        );

        this.player2 = new Paddle(
            this.height,
            this.paddleWidth,
            this.paddleHeight,
            (this.width - this.boardGap - this.paddleWidth),
            ((this.height - this.paddleHeight) / 2),
            KEYS.up,
            KEYS.down,
            'player2'
        );


        this.score1 = new Score(this.width  / 2- 50, 30, 30);
        this.score2 = new Score(this.width / 2 +  25, 30, 30);

        document.addEventListener('keydown', event => {
            switch(event.key){
                case KEYS.spaceBar:
                    this.pause = !this.pause;
                    break;
            }
        });

    }// end of constructor

    render() {

        if(this.pause){
            return;
        }

        // be sure to empty out the last frame before re-rendering
        this.gameElement.innerHTML = '';

        let svg = document.createElementNS(SVG_NS, 'svg');
        svg.setAttributeNS(null, 'width', this.width);
        svg.setAttributeNS(null, 'height', this.height);
        svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
        this.gameElement.appendChild(svg);

        this.board.render(svg);
        this.player1.render(svg);
        this.player2.render(svg);


        this.ball.render(svg, this.player1, this.player2);
        // this.ball2.render(svg);



        this.score1.render(svg, this.player1.score);
        this.score2.render(svg, this.player2.score);
    }

}