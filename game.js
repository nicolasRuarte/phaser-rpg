import Phaser from "phaser";
import { Boton } from "./boton.js";

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
    this.jugador = this.physics.add.image(50, 50, "jugador").setScale(0.5);

    const map = this.make.tilemap({ key: "tilemap" });
    const tileset = map.addTilesetImage("Piso", "pisos");

    this.fondo = map.createLayer("capa-piso", tileset);

    this.fondo.setCollisionByProperty({colision: true})

    this.btnArriba = new Boton(this, 400, 360, "btnArriba");
    this.btnAbajo = new Boton(this, 400, 424, "btnAbajo");
    this.btnIzquierda = new Boton(this, 336, 424, "btnIzquierda");
    this.btnDerecha = new Boton(this, 464, 424, "btnDerecha");
    this.btnAccion = new Boton(this, 64, 424, "btnAccion");
    
    this.add.existing(this.btnArriba).setScrollFactor(0, 0);
    this.add.existing(this.btnAbajo).setScrollFactor(0, 0);
    this.add.existing(this.btnIzquierda).setScrollFactor(0, 0);
    this.add.existing(this.btnDerecha).setScrollFactor(0, 0);
    this.add.existing(this.btnAccion).setScrollFactor(0, 0);

    this.musicaFondo = this.sound.add("musicaFondo");
    this.musicaFondo.setVolume(0.5);
    this.musicaFondo.play();

    this.physics.add.collider(this.jugador, this.fondo);

    this.cameras.main.setBounds(0, 0, 800, 800);
    this.physics.world.setBounds(0, 0, 800, 800);
    this.cameras.main.startFollow(this.jugador);
  }

  update(time, delta){
    if (this.btnArriba.isActive){
      this.jugador.setVelocityY(-10 * delta);

    }else if (this.btnAbajo.isActive){
      this.jugador.setVelocityY(10 * delta);

    }else if (this.btnIzquierda.isActive){
      this.jugador.setVelocityX(-10 * delta);

    }else if (this.btnDerecha.isActive){
      this.jugador.setVelocityX(10 * delta);

    }else{
      this.jugador.setVelocity(0);
    }

    //Fija la posición de los botones
    //this.btnArriba.setPosition(this.cameras.main.worldView.x + 400, this.cameras.main.worldView.y + 360);
    //this.btnAbajo.setPosition(this.cameras.main.worldView.x + 400, this.cameras.main.worldView.y + 424);
    //this.btnIzquierda.setPosition(this.cameras.main.worldView.x + 336, this.cameras.main.worldView.y + 424);
    //this.btnDerecha.setPosition(this.cameras.main.worldView.x + 464, this.cameras.main.worldView.y + 424);
    //this.btnAccion.setPosition(this.cameras.main.worldView.x + 64, this.cameras.main.worldView.y + 424);
  }
}
