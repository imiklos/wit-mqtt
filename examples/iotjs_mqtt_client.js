var mqtt = require('mqtt');

//connecting options
var opts = {
  port: 4444,
  keepalive: 1000,
  clientId: 'mqtt_client',
  host: '127.0.0.1'
}

//subscribe_options
var subscribe_opts = {
  retain: false,
  qos: 2
}

var client = mqtt.connect( opts, function () {
  console.log("client connected");
  client.subscribe('hello/iotjs', subscribe_opts, function(error) {
    if (error) {
      console.log('Subscribe is failed');
    } else {
      console.log('Message has been published');
    }
  });
});

client.on('message', function(data) {
  var orders = []
  console.log('I received something: ' + data.message.toString());
  data = JSON.parse(data.message)
  Object.keys(data.entities).forEach( function each(element) {
    //console.log(data.entities[element]);
    Object.keys(data.entities[element]).forEach( function each(property) {
      console.log(data.entities[element][property].value)
      orders.push(data.entities[element][property].value)
    });
  });
  console.log(orders);
});

client.on('error', function(data){
  console.log(data);
})


