import Phaser from "phaser";
import { Boton } from "./boton.js";

export class Game extends Phaser.Scene {
  
  constructor() {
    super({ key: 'test'});
  }

  preload(){
    const imagesRoute = "assets/images/";
    const audioRoute = "assets/audio/"

    this.load.image("fondo", `${imagesRoute}fondo-test.jpg`);
    this.load.image("btnArriba", `${imagesRoute}btn-arriba.png`);
    this.load.image("btnAbajo", "assets/images/btn-abajo.png");
    this.load.image("btnIzquierda", "assets/images/btn-izquierda.png");
    this.load.image("btnDerecha", "assets/images/btn-derecha.png");
    this.load.image("btnAccion", "assets/images/btn-accion.png");
    this.load.image("jugador", `${imagesRoute}cuadrado-rojo.png`);
    this.load.image("objeto", `${imagesRoute}cuadrado-azul.png`);

    this.load.audio("musicaFondo", `${audioRoute}xDeviruchi/Title-Theme.wav`);
  }

  create(){
    this.jugador = this.physics.add.image(300, 100, "jugador");
    this.add.image(0, 0, "fondo");
    this.objeto = this.physics.add.image(400, 250, "objeto").setScale(0.5);
    this.btnArriba = new Boton(this, 400, 360, "btnArriba");
    this.btnAbajo = new Boton(this, 400, 424, "btnAbajo");
    this.btnizquierda = new Boton(this, 336, 424, "btnIzquierda");
    this.btnDerecha = new Boton(this, 464, 424, "btnDerecha");
    
    this.add.existing(this.btnArriba);
    this.add.existing(this.btnAbajo);
    this.add.existing(this.btnizquierda);
    this.add.existing(this.btnDerecha);

    this.musicaFondo = this.sound.add("musicaFondo");
    this.musicaFondo.setVolume(0.5);
    this.musicaFondo.play();
  }

  update(time, delta){
    if (this.btnArriba.isActive){
      this.objeto.setVelocityY(-10 * delta);

    }else if (this.btnAbajo.isActive){
      this.objeto.setVelocityY(10 * delta);

    }else if (this.btnizquierda.isActive){
      this.objeto.setVelocityX(-10 * delta);

    }else if (this.btnDerecha.isActive){
      this.objeto.setVelocityX(10 * delta);

    }else{
      this.objeto.setVelocity(0);
    }
  }
}
