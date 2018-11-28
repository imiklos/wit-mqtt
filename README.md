# wit-mqtt
  This repository contains a proof of concept for using [wit.ai](https://wit.ai/)'s HTTP API and [mqtt](https://github.com/mqttjs/MQTT.js)
.
## Features
Currently in the [`wit.ai`](https://wit.ai/) service we configured 2 entities, which the service can recognize in spoken sentences:

  * `light entity`: {Lookup strategy: `free-text & keywords`}
  * `wit$on_of`: {Built-in toggle}
### Samples
  ```
  Turn the Lights.
  Turn the lights off/on.
  Turn the light off/on.
  ```

## How to run the sample
Run mqtt broker for example: [mosquitto](https://mosquitto.org/)


```
git clone https://github.com/imiklos/wit-mqtt.git
cd wit-mqtt
yarn
```
Set desired IP/Port in the `src/MQTTclient.js`  
For example:
`MQTT.connect('mqtt://127.0.0.1', {port: 1883,clientId:"mqttjs"})`

```
yarn start
```
## Examples used
[wit.ai](https://wit.ai/)  
[react-mp3-recorder](https://github.com/transitive-bullshit/react-mp3-recorder)  
[MQTT.js](https://github.com/mqttjs/MQTT.js)
