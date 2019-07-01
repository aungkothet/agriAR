AFRAME.registerComponent('modify-materials', {
    init: function () {
      this.model = null;
      this.mixer = null;
  
      var model = this.el.getObject3D('scene');
      if (model) {
        this.load(model);
      } else {
        this.el.addEventListener('model-loaded', function (e) {
          this.load(e.detail.model);
        }.bind(this));
      }
    },
  
    load: function (model) {
      this.model = model;
      this.mixer = new THREE.AnimationMixer(model);
      this.model.animations.forEach(animation => {
        this.mixer.clipAction(animation, model).play();
      });
    },
  
    tick: function (t, dt) {
      if (this.mixer && !isNaN(dt)) {
        this.mixer.update(dt / 1000);
      }
    }
  });