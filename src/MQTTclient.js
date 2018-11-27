import MQTT from 'mqtt'
const client = MQTT.connect('mqtt://10.109.177.1', {port: 9001,clientId:"mqttjs"})
    client.on('connect', function () {
      console.log("Connected");
      client.subscribe('hello/iotjs', function (err) {
        if (!err) {
          console.log('MQTT SUB ON hello/iotjs');
        } else {
          console.log('SIKERTELEN SUB MQTT SUB');
        }
      })
    })

    client.on('message', function (topic, message) {
      // message is Buffer
      console.log(message.toString())
    })
export default client;
