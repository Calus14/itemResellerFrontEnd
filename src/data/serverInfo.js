export default{
  serverUrl: process.env.SERVER_URL ||  "http://localHost",
  serverPort: process.env.SERVER_PORT || 8801,

  //ENDPOINTS
  basicSearchEndpoint: "listOfItems",
  submitSubscriptionEndpoint: "submitSubscription"
}
