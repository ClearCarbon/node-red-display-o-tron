var JVSDisplayOTron = require('jvsdisplayotron');

module.exports = function(RED) {

  function DisplayOTron(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    var display = new JVSDisplayOTron.DOT3k();
    var backlight = new Backlight(displayOTron);

    node.on('input', function(msg) {
      var payload = msg.payload;

      backlight.setToRGB(255, 255, 255);

      var contrast = 50;
      if (payload.contrast !== undefined) {
        contrast = payload.contrast;
      }

      display.setContrast(contrast);

      if(content !== undefined) {
        content = payload.content;
        for (var i = 0, len = content.length; i < len; i++) {
          var line = content[i];
          display.setCursorPosition(0, i);
          display.write(line);
          this.debug("Wrote line " + line);
        }
      }

    });

  }

  RED.nodes.registerType("display-o-tron", DisplayOTron);

}
