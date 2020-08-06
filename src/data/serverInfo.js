export default{
  isLocalRun: true,
  serverUrl: "https://item-reseller-alpha.herokuapp.com",
  localUrl: "http://localHost",

  serverSocketAddress: "wss://item-reseller-alpha.herokuapp.com",
  localSocketAddress: "ws://localHost",

  localPort: 8801,

  //ENDPOINTS
  heartbeatEndpoint: "heartbeat",
  basicSearchEndpoint: "listOfItems",
  submitSubscriptionEndpoint: "submitSubscription",
  userSubscriptionsEndpoint: "userSubscriptions",
  subscriptionFoundItemsEndpoint: "subscriptionItems",
  userExistsEndpoint: "userExists",
  createUserEndpoint: "addUser",
  loginUserEndpoint: "loginUser"
}
