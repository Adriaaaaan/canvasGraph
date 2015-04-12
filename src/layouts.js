let nodeX=16;
let nodeY=16;


class DefaultLayout {
    setNodePositions(nodes,transforms,canvasView){
        let masterNode = nodes.filter((node) => {return node.type==="1";})[0];
        let childNodes = nodes.filter((node) => {return node.type==="2";});
        let canvasWidth = canvasView.getDimensions().width;
        let canvasHeight= canvasView.getDimensions().height;
        let centrePosition = {
            x:(canvasWidth/2)-(transforms.scale/2),
            y:(canvasHeight/2)-(transforms.scale/2)
        };
        masterNode.position={
            x:centrePosition.x,
            y:centrePosition.y,
            width:transforms.scale,
            height:transforms.scale
        };
        let diameter=256+(childNodes.length*(transforms.scale/2));
        let radius=diameter/2;
        let nodeAngleGap = 2*Math.PI / childNodes.length;
        let i=0;
        for(let node of childNodes) {

            let angle = i * nodeAngleGap;
            node.position = {
                x:centrePosition.x+(radius * Math.cos(angle)),
                y:centrePosition.y+(radius * Math.sin(angle)),
                width:transforms.scale,
                height:transforms.scale
            };
            i+=1;
        }
    }
}

export default new DefaultLayout();
