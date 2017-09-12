var kannel = require('kannel'),
app = new kannel.smsbox({
    host : '127.0.0.1', 
    port : 13001, //smsc connection port - default 13001 
    id   : "helloBox", // smsc id - defaut "" 
    frequence : 1 // hearbeat - default 5s 
});
app.on('connect',function(){
console.log("hello box is connected to "+app.conf["host"]+":"+app.conf['port']);
});
app.connect();