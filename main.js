var engine = require('php-parser');


var parser = new engine({
    // some options :
    parser: {
      extractDoc: true,
      php7: true
    },
    ast: {
      withPositions: true
    }
  });

  //console.log(engine.prototype.parseEval.prototype);

module.exports = parser;
