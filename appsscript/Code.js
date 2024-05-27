function doGet(request) {
  // Add your code here
  // This function is called when a GET request is made to your web app
  // You can access the request parameters using the 'request' object
  // and return a response to the client

  return HtmlService.createHtmlOutputFromFile("index")
    .addMetaTag(
      "viewport",
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    )
    .setTitle("A sample title")
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}
