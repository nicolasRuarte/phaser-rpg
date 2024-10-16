import './style.css';
import Phaser from 'phaser';
import { Game } from "./game.js";

const sizes = {
  width: 500,
  height: 500
}

const config = {
  type: Phaser.WEBGL,
  width: sizes.width,
  height: sizes.height,
  canvas: gameCanvas,
  scene: [Game],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0},
      debug: false
    }
  }
}

const juego = new Phaser.Game(config);

const gameState = {
  preload: function() {
    juego.load.spritesheet("buttons", "public/assets/images/direction-buttons.png");
  },

  create: function() {
    console.log("Hola");
  },

  update: function() {

  }
}
