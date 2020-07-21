export default{
  isLocalRun: false,
  serverUrl: "https://item-reseller-alpha.herokuapp.com",
  localUrl: "http://localHost",
  localPort: 8801,

  //ENDPOINTS
  heartbeatEndpoint: "heartbeat",
  basicSearchEndpoint: "listOfItems",
  submitSubscriptionEndpoint: "submitSubscription",
  userExistsEndpoint: "userExists",
  createUserEndpoint: "addUser",
  loginUserEndpoint: "loginUser"
}
