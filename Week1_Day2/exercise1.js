Array.prototype.isEven = function(){
	arrOut = [];
	for(let i=0; i<this.length;i++){ 
		if(this[i] % 2 == 0)
			arrOut.push(this[i]);
	}
	return arrOut;
}
Array.prototype.isOdd = function(){
	arrOut = [];
	for(let i=0; i<this.length;i++){ 
		if(this[i] % 2 == 1)
			arrOut.push(this[i]);
	}
	return arrOut;
}
console.log([1,2,3,4,5,6,7,8].isEven());
console.log([1,2,3,4,5,6,7,8].isOdd());