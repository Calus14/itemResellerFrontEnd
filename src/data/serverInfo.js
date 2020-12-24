export default{
  isLocalRun: true,
  serverUrl: "https://item-reseller-alpha.herokuapp.com",
  localUrl: "http://localHost",
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
