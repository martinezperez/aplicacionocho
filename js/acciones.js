// JavaScript Document

$(document).ready(function(e){
document.addEvenListener("deviceready",function(){

$('#beep').tap(function(){
navigator .notification.beep (1);
});//tap beep

$('#vibrar').tap(function(){
navigator.notification.vibrate(1000);
});//tap vibrar

},false);//deviceready
});//ready

	
	