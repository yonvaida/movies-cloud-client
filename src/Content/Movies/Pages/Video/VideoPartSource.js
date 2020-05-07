const { https } = require('follow-redirects');

class VideoPartSource {

  getFirstPart() {
    /*
    const options = {
      method: 'GET',
      'hostname': 'blakemrzw-my.sharepoint.com',
      'path': '/personal/m3612_vip365fun_com/_layouts/15/download.aspx?UniqueId=273c5f83-fc93-4689-9bef-852cf60691be&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYmxha2Vtcnp3LW15LnNoYXJlcG9pbnQuY29tQGY1YWZlMzJhLTY4ODMtNDQ5OS05ZWIwLWM1NTdjNTdjZjMxNiIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE1ODcyOTE0NDgiLCJleHAiOiIxNTg3Mjk1MDQ4IiwiZW5kcG9pbnR1cmwiOiJmczFjZUlPNncyLzdONDhuWk1uS3BlaE5sKzhIY3phbUUrOXpFWENRS1pFPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTUyIiwiaXNsb29wYmFjayI6IlRydWUiLCJjaWQiOiJPV0ZqTnpFellqY3ROek0zWWkwMFpEUTVMV0pqWTJJdE1USmtZV00yWkdSaFltSTUiLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIiwic2l0ZWlkIjoiT0RVMU5UUTVNVFF0WmpnM1lpMDBZakEyTFRsaVkyRXRNemN6TXpjeFpUVTNNemhpIiwiYXBwX2Rpc3BsYXluYW1lIjoiSW9udXRPbmVEcml2ZSIsImFwcGlkIjoiNTczZjE2ZGYtNjVhZi00M2RjLWFlODAtOTA4N2E0NDlkZTAyIiwidGlkIjoiZjVhZmUzMmEtNjg4My00NDk5LTllYjAtYzU1N2M1N2NmMzE2IiwidXBuIjoibTM2MTJAdmlwMzY1ZnVuLmNvbSIsInB1aWQiOiIxMDAzMjAwMDNGRTM5OUFFIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDAzZmUzOTlhZUBsaXZlLmNvbSIsInNjcCI6Im15ZmlsZXMucmVhZCBhbGxmaWxlcy5yZWFkIG15ZmlsZXMud3JpdGUgYWxsZmlsZXMud3JpdGUgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.SUVSTGxOeThlcjBFT0o5Vmgzdk91Z2hrUUk1Y0JHck1CbnVsNXhmdUxWMD0&ApiVersion=2.0',
      'headers': {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000,
        'Range': 'bytes=0-10000000'
      },
      'maxRedirects': 20
    };

    var req = https.request(options, function (res) {
      var chunks = [];
    
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
    
      res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
      //fs.writeFile("D:\\ionut.mp4", body);
        console.log(body.toString());
      });
    
      res.on("error", function (error) {
        console.error(error);
      });
    });
    
    req.end();
  }*/


  fetch("https://blakemrzw-my.sharepoint.com/personal/m3612_vip365fun_com/_layouts/15/download.aspx?UniqueId=273c5f83-fc93-4689-9bef-852cf60691be&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYmxha2Vtcnp3LW15LnNoYXJlcG9pbnQuY29tQGY1YWZlMzJhLTY4ODMtNDQ5OS05ZWIwLWM1NTdjNTdjZjMxNiIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE1ODcyOTE0NDgiLCJleHAiOiIxNTg3Mjk1MDQ4IiwiZW5kcG9pbnR1cmwiOiJmczFjZUlPNncyLzdONDhuWk1uS3BlaE5sKzhIY3phbUUrOXpFWENRS1pFPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTUyIiwiaXNsb29wYmFjayI6IlRydWUiLCJjaWQiOiJPV0ZqTnpFellqY3ROek0zWWkwMFpEUTVMV0pqWTJJdE1USmtZV00yWkdSaFltSTUiLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIiwic2l0ZWlkIjoiT0RVMU5UUTVNVFF0WmpnM1lpMDBZakEyTFRsaVkyRXRNemN6TXpjeFpUVTNNemhpIiwiYXBwX2Rpc3BsYXluYW1lIjoiSW9udXRPbmVEcml2ZSIsImFwcGlkIjoiNTczZjE2ZGYtNjVhZi00M2RjLWFlODAtOTA4N2E0NDlkZTAyIiwidGlkIjoiZjVhZmUzMmEtNjg4My00NDk5LTllYjAtYzU1N2M1N2NmMzE2IiwidXBuIjoibTM2MTJAdmlwMzY1ZnVuLmNvbSIsInB1aWQiOiIxMDAzMjAwMDNGRTM5OUFFIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDAzZmUzOTlhZUBsaXZlLmNvbSIsInNjcCI6Im15ZmlsZXMucmVhZCBhbGxmaWxlcy5yZWFkIG15ZmlsZXMud3JpdGUgYWxsZmlsZXMud3JpdGUgYWxsc2l0ZXMucmVhZCBhbGxwcm9maWxlcy5yZWFkIiwidHQiOiIyIiwidXNlUGVyc2lzdGVudENvb2tpZSI6bnVsbH0.SUVSTGxOeThlcjBFT0o5Vmgzdk91Z2hrUUk1Y0JHck1CbnVsNXhmdUxWMD0&ApiVersion=2.0",
  {"credentials":"omit",
  "headers":{
    "accept":"*/*",
    "accept-language":"en-US,en;q=0.9,de;q=0.8,it;q=0.7,ro;q=0.6",
    "if-range":"\"{273C5F83-FC93-4689-9BEF-852CF60691BE},5\"",
    "origin":"http://localhost:3000/",
    "range":"bytes=0-20000",
    "sec-fetch-dest":"video",
    "sec-fetch-mode":"cors",
    "sec-fetch-site":"cross-site" },
  "referrer":"http://localhost:3000/",
  "referrerPolicy":"no-referrer-when-downgrade",
  "body":null,
  "method":"GET",
  "mode":"no-cors"});

  }
}
export default VideoPartSource;