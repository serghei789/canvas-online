const { makeAutoObservable } = require("mobx");

class CanvasState {
  canvas = null
  constructor() {
    makeAutoObservable(this)
  }

  setCanvas (canvas) {
    this.canvas = canvas
  }
}

export default new CanvasState()
