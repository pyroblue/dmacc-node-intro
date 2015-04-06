console.log('----Synchronous Example----');
console.log(1);
console.log(2);
console.log(3);


console.log('----Asynchronous Example----');
console.log(1);
setTimeout(function(){
	console.log(2);
}, 500);
console.log(3);