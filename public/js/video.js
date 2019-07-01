var isTargetFound = false;

AFRAME.registerComponent("markerhandler",{
    init:function() {
      console.log('markerhandler-init');
      markerObj = document.querySelector('a-marker');

      videoObj = document.querySelector('video');
      videoObj.hidden = true;
      videoObj.pause();

    },

    tick:function() {
        if (markerObj != null)
            {
                if (markerObj.object3D.visible == true) {
                  if (isTargetFound)
                    return;
                  isTargetFound = true;
                  console.log ("marker visible");
                  videoObj.play();
                }
                else {
                  if(isTargetFound)
                  {
                    markerObj.object3D.visible = true;
                  }
                }
              }
      },
      remove:function(){
        isTargetFound=false;
      }
    });