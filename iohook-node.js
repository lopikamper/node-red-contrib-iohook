module.exports = function(RED) {
    function iohookNode(config) {
        RED.nodes.createNode(this,config);
	var node = this;
	var context = node.context();
        var state = context.get('state');
        var outMsg1;
        
if(typeof state === 'undefined'){
    state = true;
}

node.on('input', function(msg){
    if(msg.topic === 'state' && typeof msg.payload === 'boolean'){
        context.set('state', msg.payload);
       state = context.get('state');
        var text = `changed state to ${state}`;
        var topic = "info";
        outMsg = {topic: topic, payload: text};
        node.send(outMsg);
    }else{
        node.error('Invalid command');
    }
});

	var klavesnice = require('iohook');
        klavesnice.on('keydown', event => {
            if(state === true){
		outMsg1 = { payload: event.keycode, topic: 'keyboard', state: state };
                node.send(outMsg1);
            }else{
                node.send(null);
            }
        });
	
	var mouse = require('iohook');
	mouse.on('mouseclick', event => {
            if(state === true){
		outMsg1 = { payload: event.button, topic: 'mouse', state: state };
                node.send(outMsg1);
            }else{
                node.send(null);
            }
	});
       
       mouse.start();
       klavesnice.start();
    }
    RED.nodes.registerType("Capture keys",iohookNode);
}