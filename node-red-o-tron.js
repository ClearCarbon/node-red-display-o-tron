var JVSDisplayOTron = require('jvsdisplayotron');

module.exports = function(RED) {

  function DisplayOTron(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    var display = new JVSDisplayOTron.DOT3k();

    node.on('input', function(msg) {
      var payload = msg.payload;

      // display.backlight.setToRGB(255, 255, 255);

      var contrast = 50;
      if (payload.contrast !== undefined) {
        contrast = payload.contrast;
      }

      display.lcd.setContrast(contrast);
      display.lcd.clear();

      if(content !== undefined) {
        content = payload.content;
        for (var i = 0, len = content.length; i < len; i++) {
          var line = content[i];
          display.lcd.setCursorPosition(0, i);
          display.lcd.write(line);
          this.debug("Wrote line " + line);
        }
      }

    });

  }

  RED.nodes.registerType("display-o-tron", DisplayOTron);

}
