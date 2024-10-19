import Phaser from "phaser";
import { Boton } from "./boton.js";
import { Pared } from "./pared.js";

export class Game extends Phaser.Scene {
  
  constructor() {
    super({ key: 'test'});
  }

  preload(){
    const imagesRoute = "assets/images/";
    const audioRoute = "assets/audio/";
    const tilemapRoute = "assets/tiled/";

   
    this.load.image("fondo", `${imagesRoute}fondo-test.jpg`);
    this.load.image("pisos", `${imagesRoute}axulart/beach/crushed.png`);
    this.load.tilemapTiledJSON("tilemap", `${tilemapRoute}piso.json`);
    this.load.image("btnArriba", `${imagesRoute}btn-arriba.png`);
    this.load.image("btnAbajo", "assets/images/btn-abajo.png");
    this.load.image("btnIzquierda", "assets/images/btn-izquierda.png");
    this.load.image("btnDerecha", "assets/images/btn-derecha.png");
    this.load.image("btnAccion", "assets/images/btn-accion.png");

    this.load.image("jugador", `${imagesRoute}cuadrado-azul.png`);

    this.load.audio("musicaFondo", `${audioRoute}xDeviruchi/Title-Theme.wav`);
  }

  create(){
    //this.add.image(0, 0, "fondo");
    this.jugador = this.physics.add.image(50, 0, "jugador").setScale(0.5);

    const map = this.make.tilemap({ key: "tilemap" });
    const tileset = map.addTilesetImage("Piso", "pisos");

    this.fondo = map.createLayer("capa-piso", tileset);

    this.fondo.setCollisionByProperty({colision: true})

    this.btnArriba = new Boton(this, 400, 360, "btnArriba");
    this.btnAbajo = new Boton(this, 400, 424, "btnAbajo");
    this.btnizquierda = new Boton(this, 336, 424, "btnIzquierda");
    this.btnDerecha = new Boton(this, 464, 424, "btnDerecha");
    this.btnAccion = new Boton(this, 64, 424, "btnAccion");
    
    this.add.existing(this.btnArriba);
    this.add.existing(this.btnAbajo);
    this.add.existing(this.btnizquierda);
    this.add.existing(this.btnDerecha);
    this.add.existing(this.btnAccion);

    this.musicaFondo = this.sound.add("musicaFondo");
    this.musicaFondo.setVolume(0.5);
    this.musicaFondo.play();

    this.physics.add.collider(this.jugador, this.fondo);
  }

  update(time, delta){
    if (this.btnArriba.isActive){
      this.jugador.setVelocityY(-10 * delta);

    }else if (this.btnAbajo.isActive){
      this.jugador.setVelocityY(10 * delta);

    }else if (this.btnizquierda.isActive){
      this.jugador.setVelocityX(-10 * delta);

    }else if (this.btnDerecha.isActive){
      this.jugador.setVelocityX(10 * delta);

    }else{
      this.jugador.setVelocity(0);
    }
  }
}
