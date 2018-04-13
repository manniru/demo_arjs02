!function(){var e=function(){ARController.getUserMediaThreeScene=function(e){var r={};for(var t in e)r[t]=e[t];var a=e.onSuccess;return r.onSuccess=function(e,r){var t=e.createThreeScene();a(t,e,r)},this.getUserMediaARController(r)},ARController.prototype.createThreeScene=function(e){e=e||this.image,this.setupThree();var r=new THREE.Texture(e);r.minFilter=THREE.LinearFilter,r.flipY=!1;var t=new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2),new THREE.MeshBasicMaterial({map:r,side:THREE.DoubleSide}));t.material.depthTest=!1,t.material.depthWrite=!1;var a=new THREE.OrthographicCamera(-1,1,-1,1,-1,1),i=new THREE.Scene;i.add(t),i.add(a),"portrait"===this.orientation&&(t.rotation.z=Math.PI/2);var n=new THREE.Scene,o=new THREE.Camera;o.matrixAutoUpdate=!1,o.projectionMatrix.fromArray(this.getCameraMatrix()),n.add(o);var s=this;return{scene:n,videoScene:i,camera:o,videoCamera:a,arController:this,video:e,process:function(){for(var r in s.threePatternMarkers)s.threePatternMarkers[r].visible=!1;for(var r in s.threeBarcodeMarkers)s.threeBarcodeMarkers[r].visible=!1;for(var r in s.threeMultiMarkers){s.threeMultiMarkers[r].visible=!1;for(var t=0;t<s.threeMultiMarkers[r].markers.length;t++)s.threeMultiMarkers[r].markers[t]&&(s.threeMultiMarkers[r].markers[t].visible=!1)}s.process(e)},renderOn:function(e){r.needsUpdate=!0;var t=e.autoClear;e.autoClear=!1,e.clear(),e.render(this.videoScene,this.videoCamera),e.render(this.scene,this.camera),e.autoClear=t}}},ARController.prototype.createThreeMarker=function(e,r){this.setupThree();var t=new THREE.Object3D;return t.markerTracker=this.trackPatternMarkerId(e,r),t.matrixAutoUpdate=!1,this.threePatternMarkers[e]=t,t},ARController.prototype.createThreeMultiMarker=function(e){this.setupThree();var r=new THREE.Object3D;return r.matrixAutoUpdate=!1,r.markers=[],this.threeMultiMarkers[e]=r,r},ARController.prototype.createThreeBarcodeMarker=function(e,r){this.setupThree();var t=new THREE.Object3D;return t.markerTracker=this.trackBarcodeMarkerId(e,r),t.matrixAutoUpdate=!1,this.threeBarcodeMarkers[e]=t,t},ARController.prototype.setupThree=function(){this.THREE_JS_ENABLED||(this.THREE_JS_ENABLED=!0,this.addEventListener("getMarker",function(e){var r;e.data.marker;e.data.type===artoolkit.PATTERN_MARKER?r=this.threePatternMarkers[e.data.marker.idPatt]:e.data.type===artoolkit.BARCODE_MARKER&&(r=this.threeBarcodeMarkers[e.data.marker.idMatrix]),r&&(r.matrix.fromArray(e.data.matrix),r.visible=!0)}),this.addEventListener("getMultiMarker",function(e){var r=this.threeMultiMarkers[e.data.multiMarkerId];r&&(r.matrix.fromArray(e.data.matrix),r.visible=!0)}),this.addEventListener("getMultiMarkerSub",function(e){var r=e.data.multiMarkerId,t=e.data.markerIndex,a=e.data.marker,i=this.threeMultiMarkers[r];if(i&&i.markers&&i.markers[t]){var n=i.markers[t];n.matrix.fromArray(e.data.matrix),n.visible=a.visible>=0}}),this.threePatternMarkers={},this.threeBarcodeMarkers={},this.threeMultiMarkers={})}},r=function(){window.ARController&&window.THREE?(e(),window.ARThreeOnLoad&&window.ARThreeOnLoad()):setTimeout(r,50)};r()}();