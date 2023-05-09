import Phaser from "phaser";
class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  preload() {
    this.load.image("background", "src/assets/images/background.png");
    this.load.spritesheet("ship", "src/assets/spritesheets/ship.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("ship2", "src/assets/spritesheets/ship2.png", {
      frameWidth: 32,
      frameHeight: 16,
    });
    this.load.spritesheet("ship3", "src/assets/spritesheets/ship3.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet(
      "explosion",
      "src/assets/spritesheets/explosion.png",
      {
        frameWidth: 16,
        frameHeight: 16,
      }
    );
    this.load.spritesheet("power-up", "src/assets/spritesheets/power-up.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
  }
  create() {
    this.add.text(20, 20, "Loading game...");
    setTimeout(() => {
      this.scene.start("playGame");
    }, 1000);
  }
}
export default Scene1;
