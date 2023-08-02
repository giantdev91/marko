const fetch = require('node-fetch');

const baseTwitterSearchUrl = 'https://api.twitter.com/1.1/search/tweets.json';

const defaultFetchOptions = {
  method: 'GET',
  headers: {
    Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAABHQogEAAAAA35fIcguIzKxyDgay%2FhrM486KRQ0%3DGYx04CThSDNWwuUHpXILbq9vh9e3WY8ByVjNZ4xj6OzEzoItwH`,
  },
};

// API KEY
// gmeYLBXiSnYwNMKv2Bq7yg0DM
// 9gEs4D4RXCzkzkWslD4LNvQCd +

// API SECRET KEY
// IOuiTP13Z8yykG3B2zasiyhEJfItG61RxYahqOIdbHAdCAfxLO
// aOiC8H82ggEH8QPunUAbeGtK3W8ouVpm8YYYvwDuh34ZAgvu6u +

// BEARER TOKEN
// AAAAAAAAAAAAAAAAAAAAAN%2BuigEAAAAAkXRjycsbT87Q6QC7eB3EwagOoyg%3DPeXpr18XlrD7pxEo6eVjS5sZLJhtIAh6v99xmKWYootmU2VMss
// AAAAAAAAAAAAAAAAAAAAABHQogEAAAAA35fIcguIzKxyDgay%2FhrM486KRQ0%3DGYx04CThSDNWwuUHpXILbq9vh9e3WY8ByVjNZ4xj6OzEzoItwH +

const getNonRetweetedTweetsByKeywordsAndDate = async (keywords, dateSince = new Date()) => {
  const dateSinceFormatted = `${dateSince.getFullYear()}-${
    dateSince.getMonth() + 1
  }-${dateSince.getDate()}`;
  const queryParam = `${keywords} -filter:retweets since:${dateSinceFormatted}`;

  const response = await fetch(baseTwitterSearchUrl, defaultFetchOptions);
  const responseJson = await response.json();
  console.log('Response: ', responseJson);
  return responseJson.statuses;
};

getNonRetweetedTweetsByKeywordsAndDate('#allstate OR @allstate', new Date(2019, 6, 28));
