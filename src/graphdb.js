import idGenerator from './idGenerator';

function makeNode(name,type,id) {
    id = id || idGenerator.generateId();
    if(!name || !type) {
        throw new Error("required args missing");
    }
    return {
        id:id,
        name: name,
        type: type
    };
}

function makeLink(fromNode,toNode,type) {
    if(!fromNode || !toNode || !type) {
        throw new Error("required args missing");
    }
    return {
        from:fromNode,
        to:toNode,
        type:type
    };
}

let nodes = [
    makeNode("main node","1",1),
    makeNode("node2","2",2),
    makeNode("node3","2",3),
    makeNode("node4","2",4),
    makeNode("node5","2",5),
    makeNode("node6","2",6),
    makeNode("node7","2",7),
    makeNode("node8","2",8),
    makeNode("node9","2",9)
];

let links = [
    makeLink(2,1,"related"),
    makeLink(3,1,"related"),
    makeLink(4,1,"related"),
    makeLink(5,1,"related"),
    makeLink(6,1,"related"),
    makeLink(7,1,"related"),
    makeLink(8,1,"related"),
    //makeLink(6,2,"related"),
    //makeLink(7,2,"related"),
    //makeLink(8,3,"related"),
    makeLink(9,1,"related")
];

/**
 * Mock data with some nodes and links between them
 */
export default {
    nodes:nodes,
    links:links
}