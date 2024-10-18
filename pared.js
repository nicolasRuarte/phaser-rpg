export class Pared extends Phaser.GameObjects{

  constructor(scene, x, y, textura, sizes){
    super(scene, x, y);

    this.textura = scene.add.image(0, 0, textura);
    this.textura.displayWidth = sizes.width;
    this.textura.displayHeight = sizes.height;
  }
}
