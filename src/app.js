import mockData from './graphdb';
import canvasView from './canvasView';
import defaultLayout from './layouts';

var options = {
    nodeColours:{
        "1":"blue",
        "2":"green"
    },
    nodeSize:{
        "1":40
    }
};
let transforms = {scale:48,padding:48};



function drawNode(ctx,node,options){
    ctx.save();
    ctx.fillStyle = node.colour || options.nodeColours[node.type] || "black";
    node.position.radius = options.nodeSize[node.type] || 30;
    ctx.beginPath();
    ctx.arc(node.position.x,node.position.y,node.position.radius,0,2*Math.PI);
    ctx.fill();
    ctx.fillStyle="white";
    ctx.textAlign="center";
    ctx.font = "18px Georgia";
    ctx.fillText(node.name,node.position.x,node.position.y+4);
    ctx.restore();
}

function drawLink(ctx,link,nodes,options){
    var from = nodes.filter((node)=>{return node.id===link.from;})[0];
    var to = nodes.filter((node)=>{return node.id===link.to;})[0];
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(from.position.x,from.position.y);
    ctx.lineTo(to.position.x,to.position.y);
    ctx.stroke();
    ctx.restore();
}

function drawGraphToCanvas(ctx,data,transforms,options){
    var nodes = data.nodes;
    console.log("draw");
    for(let link of data.links) {
        drawLink(ctx,link,nodes,options);
    }

    for(let node of nodes) {
        drawNode(ctx,node,transforms,options);
    }
}

function hitTest(node,mx,my) {

    let dx = mx - node.position.x;
    let dy = my - node.position.y;

    //a "hit" will be registered if the distance away from the center is less than the radius of the circular object
    return (dx*dx + dy*dy < node.position.radius*node.position.radius);
}


/**
 * run app and draw graph
 */
let ctx = canvasView.render();
defaultLayout.setNodePositions(mockData.nodes,transforms,canvasView);
drawGraphToCanvas(ctx,mockData,options);

canvasView.mousemove= function(evt){
    var mouse = canvasView.getPointerLocation();
    for(let node of mockData.nodes) {
        let previousNodeStyle = node.colour;
        if(hitTest(node,mouse.x,mouse.y)){
            console.log(`in node ${node.name}}`);
            node.colour="red";
        } else {
            node.colour=null;
        }
        if(previousNodeStyle!==node.colour) {
            drawGraphToCanvas(ctx,mockData,options);
        }
    }
}

export default {options:options};

export var chart = {refresh:function(){ drawGraphToCanvas(ctx,mockData,options);}};