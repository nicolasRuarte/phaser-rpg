export class Boton extends Phaser.GameObjects.Container{

  textura;
  isActive = false;

  //Pasamos al objeto del jugador para que sepa qué es lo que tienen que mover
  constructor(scene, x, y, textura){
    super(scene, x, y);

    this.textura = scene.add.image(0, 0, textura);

    this.add(this.textura);
    this.setSize(this.textura.width, this.textura.height);

    this.setInteractive()
      .on(Phaser.Input.Events.POINTER_DOWN, () => {
        this.setAlpha(1);
        this.isActive = true;
        console.log("Click)");
      })
      .on(Phaser.Input.Events.POINTER_UP, () => {
        this.setAlpha(0.5);
        this.isActive = false;
      })
  }

  preload(){

  }

  create(){

  }

  update(){

  }
}
