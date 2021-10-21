export default function({ $http }) {
  $http.onRequest(config => {
    console.log("Making request to " + JSON.stringify(config.url));
  });

  $http.onError(error => {
    if (error.statusCode === 500) {
      alert("Request Error!");
    }
  });
}
