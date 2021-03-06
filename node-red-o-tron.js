"use strict"

var JVSDisplayOTron = require("jvsdisplayotron");
var {Display} = require("./display");

module.exports = function(RED) {

  function DisplayOTron(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    var display = new Display(new JVSDisplayOTron.DOT3k(), this);

    node.on('input', function(msg) {
      var defaults = {"contrast": 50, "backlight": [255, 255, 255]};
      var config = Object.assign(defaults, msg.config);

      display.setBacklight(config.backlight);
      display.setContrast(config.contrast);
      display.writeContent(msg.payload);
    });

  }

  RED.nodes.registerType("display-o-tron", DisplayOTron);

}
