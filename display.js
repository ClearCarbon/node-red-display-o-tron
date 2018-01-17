"use strict"

var JVSDisplayOTron = require("jvsdisplayotron");

class Display {

  constructor(display_o_tron) {
    this.display = display_o_tron;
  }

  writeContent(content) {
    this.display.lcd.clear();

    if(content !== undefined) {
      for (var i = 0, len = content.length; i < len; i++) {
        var line = content[i];
        this.display.lcd.setCursorPosition(0, i);
        this.display.lcd.write(line);
      }
    }
  }

  setContrast(contrast) {
    this.display.lcd.setContrast(contrast)
  }

  setBacklight(color) {
    this.display.backlight.setToRGB(color[0], color[1], color[2]);
  }
}

exports.Display = Display
