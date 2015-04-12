import mockData from './graphdb';
import canvasView from './canvasView';
import defaultLayout from './layouts';

var options = {
    nodeColours:{
        "1":"blue"
    }
};
let transforms = {scale:48,padding:48};

function drawNode(ctx,node,options){
    ctx.save();
    ctx.fillStyle = options.nodeColours[node.type] || "black";
    ctx.beginPath();
    ctx.arc(node.position.x,node.position.y,20,0,2*Math.PI);
    ctx.fill();
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

    for(let link of data.links) {
        drawLink(ctx,link,nodes,options);
    }

    for(let node of nodes) {
        drawNode(ctx,node,transforms,options);
    }
}


/**
 * run app and draw graph
 */
let ctx = canvasView.render();
defaultLayout.setNodePositions(mockData.nodes,transforms,canvasView);
drawGraphToCanvas(ctx,mockData,options);

export default {options:options};

export var chart = {refresh:function(){ drawGraphToCanvas(ctx,mockData,options);}};