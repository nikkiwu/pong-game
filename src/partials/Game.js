import {SVG_NS, KEYS} from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;

		//Ball
        this.radius = 8;
        this.boardHeight = 256;
        this.boardWidth = 128;



		//Paddle
		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.boardGap = 10;


        // Player 1
		this.player1 = new Paddle(
		    this.height,
            this.paddleWidth,
            this.paddleHeight,
            this.boardGap,
            ((this.height - this.paddleHeight) / 2),
            KEYS.a,
            KEYS.z
            );

        // Player 2
        this.player2 = new  Paddle(
            this.height,
            this.paddleWidth,
            this.paddleHeight,
            (this.width - this.boardGap - this.paddleWidth),
            ((this.height - this.paddleHeight) / 2),
            KEYS.up,
            KEYS.down



        );
	
		this.gameElement = document.getElementById(this.element);
        this.board = new Board(this.width, this.height);
        this.ball = new Ball(this.radius, this.boardHeight, this.boardWidth);

    } // End of Constructor

	render() {
        this.gameElement.innerHTML = '';
        let svg = document.createElementNS(SVG_NS, 'svg');
        svg.setAttributeNS(null, 'width', this.width);
        svg.setAttributeNS(null, 'height', this.height);
        svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);

        //Render SVG
        this.gameElement.appendChild(svg);
        this.board.render(svg);
        this.player1.render(svg);
        this.player2.render(svg);
        this.ball.render(svg);
	}

}