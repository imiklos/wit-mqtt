# IoT.js Example
A simple mqtt client, that will process the .json file, sent by wit.ai.

## Usage
* Run the application and the broker as seen in the main [README.md](https://github.com/imiklos/wit-mqtt/blob/master/README.md)
* Clone IoT.js from the official [repository](https://github.com/Samsung/iotjs)
* Build  `IoT.js` with MQTT enabled.
`tools/build.py --cmake-param=-DENABLE_MODULE_MQTT=1 --clean`
* Configure the connect options in `iotjs_mqtt_client.js`. Set the `port` and the `host` corresponding to your runnin mqtt broker.
* Run `iotjs_client_example.js` with IoT.js

If everything is set up correctly, the example will print the processed .json formatted input to your output.

## Example
Say `"Turn the light on"` on the application side. This client should output `[light,on]`.
