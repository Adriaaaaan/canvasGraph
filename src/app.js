
class CanvasView {
    render(){
        var canvas = document.createElement("canvas");
        document.querySelector("body").appendChild(canvas);
        canvas.setAttribute('class',"mainCanvas");
        this.canvas=canvas;
        this.ctx=canvas.getContext('2d');
        return this.ctx;
    }
    getCtx(){
        return this.ctx || this.render();
    }
}

var canvasView = new CanvasView();
var ctx = canvasView.render();













export default {}