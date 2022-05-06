const { makeAutoObservable } = require("mobx");

class ToolState {
  tool = null
  constructor() {
    makeAutoObservable(this)
  }

  setTool(tool) {
    this.tool = tool
  }
}

export default new ToolState()
