class CanvasView {
    render(width,height){
        width = width || 800;
        height = height || 600;
        var canvas = document.createElement("canvas");
        document.querySelector("body").appendChild(canvas);
        canvas.setAttribute('class',"mainCanvas");
        canvas.setAttribute('width',width);
        canvas.setAttribute('height',height);
        this.canvas=canvas;
        this.ctx=canvas.getContext('2d');
        this.height=height;
        this.width=width;
        return this.ctx;
    }
    getCtx(){
        return this.ctx || this.render();
    }
    getDimensions(){
        return {
            width:this.width,
            height:this.height
        };
    }
}

export default new CanvasView();