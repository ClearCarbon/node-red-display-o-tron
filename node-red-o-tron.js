"use strict"

// var JVSDisplayOTron = require("jvsdisplayotron");
// var {Display} = require("./display");

module.exports = function(RED) {

  function DisplayOTron(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    // var display = new Display({});

    node.on('input', function(msg) {
      // var defaults = {"contrast": 50, "backlight": [255, 255, 255]};
      // let config = {...defaults, ...msg.config};
      //
      // display.setBacklight(config.backlight);
      // display.setContrast(config.contrast);
      // display.writeContent(msg.payload);
    });

  }

  RED.nodes.registerType("display-o-tron", DisplayOTron);

}
