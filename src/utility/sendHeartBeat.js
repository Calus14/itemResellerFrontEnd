import fetchWithTimeout from "./fetchWithTimeout";

function sendHeartBeat(){
  var heartbeatUrl = new URL( "http://localhost:8801/heartbeat")

  fetchWithTimeout(heartbeatUrl,{method:'GET'}, 1000 ).then( (response) => {
    if( response.status !== 200) {
      console.log("Heartbeat Message Failed, Web-Server Is Down:")
      return;
    }

    console.log("Recieved the heartbeat!")
  })
}

var shouldSend = true;
console.log("Test")
while(shouldSend){
  console.log("Sending A Pump");
  sendHeartBeat();
  setTimeout(() => 5000);
}
