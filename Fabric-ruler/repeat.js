
var canvas = this.__canvas = new fabric.Canvas('c');
 fabric.Object.prototype.transparentCorners = false;
 var padding = 0;
 fabric.Image.fromURL('data:image/webp;base64', function(img) {
                   
                       img.scaleToWidth(100);
                       var patternSourceCanvas = new fabric.StaticCanvas();
                       patternSourceCanvas.add(img);
                       patternSourceCanvas.renderAll();
                       var pattern = new fabric.Pattern({
                         source: function() {
                           patternSourceCanvas.setDimensions({
                             width: img.getScaledWidth() + padding,
                             height: img.getScaledHeight() + padding
                           });
                           patternSourceCanvas.renderAll();
                           return patternSourceCanvas.getElement();
                         },
                         repeat: 'repeat'
                       });
                   
                       canvas.add(new fabric.Rect( {
                           height:450,
                           width:450,
                           fill: pattern,
                           stroke: 'rgba(34,177,76,1)',
                           objectCaching: false,
                           strokeWidth: 3
                           
                         }));
                   
                       document.getElementById('img-width').oninput = function() {
                         img.scaleToWidth(parseInt(this.value, 10));
                         canvas.requestRenderAll();
                       };
                       document.getElementById('img-angle').oninput = function() {
                         img.set('angle', this.value);
                         canvas.requestRenderAll();
                       };
                       document.getElementById('img-padding').oninput = function() {
                         padding = parseInt(this.value, 10);
                         canvas.requestRenderAll();
                       };
                       document.getElementById('img-offset-x').oninput = function() {
                         pattern.offsetX = parseInt(this.value, 10);
                         canvas.requestRenderAll();
                       };
                       document.getElementById('img-offset-y').oninput = function() {
                         pattern.offsetY = parseInt(this.value, 10);
                         canvas.requestRenderAll();
                       };
                       document.getElementById('img-repeat').onclick = function() {
                         pattern.repeat = this.checked ? 'repeat' : 'no-repeat';
                         canvas.requestRenderAll();
                       };
                     });
              
