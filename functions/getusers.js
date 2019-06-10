const axios = require("axios");
const OAuth = require("oauth");

exports.handler = function(event, context, callback) {
  /*
  const YAHOO_API_URL = process.env.REACT_APP_YAHOO_API_URL;
  const YAHOO_API_CLIENT_ID = process.env.REACT_APP_YAHOO_API_CLIENT_ID;
  const YAHOO_API_CLIENT_SECRET = process.env.REACT_APP_YAHOO_API_CLIENT_SECRET;
  const YAHOO_API_ID = process.env.REACT_APP_YAHOO_API_ID;
*/
  const {
    YAHOO_API_CLIENT_ID,
    YAHOO_API_CLIENT_SECRET,
    YAHOO_APP_ID
  } = process.env;
  console.log(YAHOO_APP_ID);
  //send user response
  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    });
  };

  // perform api call
  const getUsers = () => {
    console.log("---===>>>");
    //console.log(YAHOO_API_KEY);
    console.log(YAHOO_APP_ID);
    console.log(YAHOO_API_CLIENT_ID);
    console.log(YAHOO_API_CLIENT_SECRET);

    var header = {
      "X-Yahoo-App-Id": YAHOO_APP_ID
    };
    var request = new OAuth.OAuth(
      null,
      null,
      YAHOO_API_CLIENT_ID,
      YAHOO_API_CLIENT_SECRET,
      "1.0",
      null,
      "HMAC-SHA1",
      null,
      header
    );
    request.get(
      "https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json",
      null,
      null,
      function(err, data, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
          send(data);
        }
      }
    );
  };
  // make sure method is GET
  if (event.httpMethod == "GET") {
    getUsers();
  }
};
