import * as BABYLON from 'babylonjs';

export class Game {
  constructor() {
    this.canvas = document.getElementById('mainCanvas');
    this.engine = new BABYLON.Engine(this.canvas, true);
    this.scene = this.createScene();

    this.engine.runRenderLoop(() => {
      this.scene.render();
      this.engine.resize();
    });

    window.addEventListener('resize', () => {
      this.engine.resize();
    });
  }

  createScene() {
    const scene = new BABYLON.Scene(this.engine);

    const camera = new BABYLON.ArcRotateCamera(
      'camera',
      -Math.PI / 2,
      Math.PI / 2.5,
      3,
      new BABYLON.Vector3(0, 0, 0)
    );
    camera.attachControl(this.canvas, true);

    const light = new BABYLON.HemisphericLight(
      'light',
      new BABYLON.Vector3(0, 1, 0)
    );

    const box = BABYLON.MeshBuilder.CreateBox('box', {});

    return scene;
  }
}

new Game();
