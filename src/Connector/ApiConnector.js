
class ApiConnector{
    postData(url, data = {}) {
        // Default options are marked with *
        const response = fetch(url, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'no-cors', // no-cors, *cors, same-origin
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }
}

export default ApiConnector;