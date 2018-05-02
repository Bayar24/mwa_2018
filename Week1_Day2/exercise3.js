function slow(callback){
	setTimeout(()=>{
        for(let i=0; i<= 5e8; i++){}
    }, 0);
	if(Math.random()>0.5){
		return callback("Error", null);
	}
	return callback(null, {id:12345});
}
function exec(fn){
	const callback = function(err, data){
		return err === null ? data : err;
	}
	const res = fn(callback);
	return {
        done: function(cb){
            if(res !== "Error"){
                cb(res);
            }
            return this;
        },
        fail: function(cb){
            if(res === "Error"){
                cb(res);
            }
            return this;
        }
    }
	let obj = {};
	fn(function(err, data){
		obj.done = function(cb){
			if(err ===null)
				cb(data);
			return this;
		}
		obj.fail = function(cb){
			if(err !==null)
				cb(err);
			return this;
		}
	});
}
exec.slow().done(function(data){console.log(data);}).fail(function(err){console.log("Error: "+err);});