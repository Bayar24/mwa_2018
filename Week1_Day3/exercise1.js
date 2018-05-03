var dns = require('dns');
dns.resolve4('www.mum.edu', function (err, addresses) {
	if(err===null)
		console.log(addresses);
	else
		console.log("Error:"+err);
});
