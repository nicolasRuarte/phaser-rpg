export class Game extends Phaser.Scene {

  constructor() {
    super({ key: 'test'});
  }

  preload(){
    this.load.image("fondo", "assets/images/fondo-test.jpg");
    this.load.image("btnArriba", "assets/images/btn_arriba.png");
    this.load.image("btnAbajo", "assets/images/btn_abajo.png");
    this.load.image("btnIzquierda", "assets/images/btn_izquierda.png");
    this.load.image("btnDerecha", "assets/images/btn_derecha.png");
    this.load.image("btnAccion", "assets/images/btn_accion.png");
    this.load.image("jugador", "assets/images/cuadrado-rojo.png");
  }

  create(){
    const jugador = this.physics.add.image(200, 100, "jugador");
    this.add.image(0, 0, "fondo").setAlpha(0.5);
    const btnArriba = this.add.image(400, 394, "btnArriba").setAlpha(0.5);
    const btnAbajo = this.add.image(400, 460, "btnAbajo").setAlpha(0.5);
    const btnIzquierda = this.add.image(336, 460, "btnIzquierda").setAlpha(0.5);
    const btnDerecha = this.add.image(464, 460, "btnDerecha").setAlpha(0.5);
    this.add.image(64, 460, "btnAccion").setAlpha(0.5);
  
    btnDerecha.on("pointerdown", () => {
      btnDerecha.setAlpha(1);
      jugador.setVelocityX(20);
    })

    btnDerecha.on("pointerup", () => {
      btnDerecha.setAlpha(0.5);
      jugador.setVelocityX(0);
    })
  
    btnIzquierda.on("pointerdown", () => {
      btnIzquierda.setAlpha(1);
      jugador.setVelocityX(-20);
    })

    btnIzquierda.on("pointerup", () => {
      btnIzquierda.setAlpha(0.5);
      jugador.setVelocityX(0);
    })
  
    btnArriba.on("pointerdown", () => {
      btnArriba.setAlpha(1);
      jugador.setVelocityY(-20);
    })

    btnArriba.on("pointerup", () => {
      btnArriba.setAlpha(0.5);
      jugador.setVelocityY(0);
    })
  
    btnAbajo.on("pointerdown", () => {
      btnAbajo.setAlpha(1);
      jugador.setVelocityY(20);
    })

    btnAbajo.on("pointerup", () => {
      btnAbajo.setAlpha(0.5);
      jugador.setVelocityY(0);
    })

    btnDerecha.setInteractive()
    btnIzquierda.setInteractive()
    btnArriba.setInteractive()
    btnAbajo.setInteractive()
  }

  update(){

  }
}
