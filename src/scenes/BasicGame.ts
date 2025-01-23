// src/scenes/BasicGame.ts
import { Scene } from "phaser";

export class BasicGame extends Scene {
  constructor() {
    super("BasicGame");
  }

  create() {
    // Create a background color
    this.cameras.main.setBackgroundColor(0x00ff00);

    // Create a text object
    this.add.text(100, 100, "Hello, World!", {
      fontFamily: "Arial Black",
      fontSize: 38,
      color: "#ffffff",
    });
  }
}
