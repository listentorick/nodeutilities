/**
* Copies everything from b to a
*/
var merge = function merge (a, b){
    if (a && b) {
        var keys = Object.keys(b);
        for (var i = 0, len = keys.length; i < len; ++i) {
            a[keys[i]] = b[keys[i]];
        }
    }
    return a;
};

exports.merge = merge;

exports.inherits = function(ctor, superCtor) { 

	//copy the supers prototype
	ctor.prototype = merge(ctor.prototype, superCtor.prototype);
	//add a reference to the super 
   // ctor.prototype.super = superCtor;   
} 

exports.extractProperties = function(obj, properties) {
	if(!obj) return {};
	var extractedProperties = {};
	var numProperties = properties.length;
	var prop;
	for(var i=0; i< numProperties;i++) {
		prop = properties[i];
		if(obj[prop]) {
			extractedProperties[prop] = obj[prop];
		}
	}
	return extractedProperties;
};