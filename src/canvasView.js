class CanvasView {
    render(width,height) {
        width = width || 800;
        height = height || 600;
        var canvas = document.createElement("canvas");
        document.querySelector("body").appendChild(canvas);
        canvas.setAttribute('class',"mainCanvas");
        canvas.setAttribute('width',width);
        canvas.setAttribute('height',height);
        canvas.addEventListener("mouseup",(evt) => {this.mouseup(evt)});
        canvas.addEventListener("mousedown",(evt) => {this.mousedown(evt)});
        canvas.addEventListener("mousemove",(evt) => {this.updateMouseCoords(evt)});
        canvas.addEventListener("mousemove",(evt) => {this.mousemove(evt)});
        this.canvas=canvas;
        this.ctx=canvas.getContext('2d');
        this.height=height;
        this.width=width;
        return this.ctx;
    }
    mousedown(evt) {
        console.log("mousedown");
        this.dragging=true;
    }
    mouseup(evt) {
        console.log("mouseup");
        this.dragging=false;
    }
    mousemove(evt) {
    }
    updateMouseCoords(evt) {
        var bRect = this.canvas.getBoundingClientRect();
        this.pointer={
            x : (evt.clientX - bRect.left)*(this.canvas.width/bRect.width),
            y : (evt.clientY - bRect.top)*(this.canvas.height/bRect.height)
        };
        console.log(`mousemove x:${this.pointer.x} y:${this.pointer.y}`);
    }
    getPointerLocation() {
        return this.pointer;
    }
    getCtx() {
        return this.ctx || this.render();
    }
    getDimensions() {
        return {
            width:this.width,
            height:this.height
        };
    }
}

export default new CanvasView();