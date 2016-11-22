/* globals ASHOOTER */
var randomPointInSphere = require('../utils.js').randomPointInSphere;

ASHOOTER.registerEnemy(
  // name
  'enemy3',
  // data
  {
    components: {
      enemy: {
        name: 'enemy3',
        bulletName: 'enemy-fast'
      },
      'collision-helper': {
        debug: false,
        radius: 0.65
      },
      'json-model': {
        src: 'url(https://feiss.github.io/a-shooter-assets/models/enemy3.json)',
        texturePath: 'url(https://feiss.github.io/a-shooter-assets/images/)',
        singleModel: true
      }
    },
    poolSize: 10
  },
  // implementation
  {
    init: function () { this.reset(); },
    reset: function () {
      this.el.setAttribute('scale', {x: 0.8, y: 0.8, z: 0.8});
    },
    tick: function (time, delta) {},
    onHit: function (type) {}
  }
);
