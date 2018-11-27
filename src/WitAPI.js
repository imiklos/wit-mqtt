import $ from 'jquery';
import MQTTclient from './MQTTclient'
const Auth = 'VZE6UQD4FZJQZZ65CJCSNMC23EGEJ7N7'

export default function (blob) {
  $.ajax({
        type: 'POST',
        url: 'https://api.wit.ai/speech?',
        headers: {
          'Authorization': 'Bearer ' + Auth,
          'Content-Type': 'audio/mpeg3'
        },
        data: blob,
        processData: false,
        success: function(json) {
          console.log(json);
          MQTTclient.publish('hello/iotjs', JSON.stringify(json))
        },
        error: function(error) {
          console.log('ERR: ');
          console.log(error);
        }
      });
}
