var events=require('events');
var emiter_zdarzen=new events.EventEmitter();
emiter_zdarzen.on('userRegister',powitanie_uzytkownia());
function powitanie_uzytkownia(){
    console.log('witaj')
}
emiter_zdarzen.exit('cos')