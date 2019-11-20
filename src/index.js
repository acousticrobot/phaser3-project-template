import Phaser from "phaser";
import logoImg from "./assets/logo.png";

const docElement = document.documentElement
const width = docElement.clientWidth > 800 ?
  docElement.clientWidth : 800
const height = docElement.clientHeight > 600 ?
  docElement.clientHeight : 600

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: width,
  height: height,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("logo", logoImg);
}

function create() {
  const logo = this.add.image(400, 150, "logo");

  this.tweens.add({
    targets: logo,
    y: height - 150,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}
