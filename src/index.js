import Phaser from "phaser";
import InitLoad from "./js/InitLoad.js";
import Scene2 from "./js/Scene2.js";
// import logoImg from './assets/logo.png';

let config = {
  width: 256,
  height: 272,
  backgroundColor: 0x000000,
  scene: [InitLoad, Scene2],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};
let game = new Phaser.Game(config);
