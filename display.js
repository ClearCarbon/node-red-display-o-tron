"use strict"

var JVSDisplayOTron = require("jvsdisplayotron");

class Display {

  constructor(display_o_tron, node) {
    this.display = display_o_tron;
    this.node = node
  }

  writeContent(content) {
    this.display.lcd.clear();

    this.node.log("content: " + content);
    if(content !== undefined) {
      this.node.log("Content length: " + content.length);
      for (var i = 0, len = content.length; i < len; i++) {
        var line = content[i];
        this.node.log("Write line: " + line);
        this.display.lcd.setCursorPosition(0, i);
        this.display.lcd.write(line);
      }
    }
  }

  setContrast(contrast) {
    this.node.log("contrast: " + contrast);
    this.display.lcd.setContrast(contrast)
  }

  setBacklight(color) {
    this.display.backlight.setToRGB(color[0], color[1], color[2]);
  }
}

exports.Display = Display
