export default class Exchange {
  static getUSD(exgRate) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/f4978ce0a1b4c7d071e860b3/latest/USD?q=${exgRate}&api_key=${process.env.API_KEY}&feedtype=json&ver=1.0`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}