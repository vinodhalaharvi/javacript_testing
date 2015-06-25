var showleft = function (data) {
	var string = '{"result":true, "count":1}';
	obj = JSON.parse(string);
	console.log(obj);
	var left = document.getElementById("left"); 
}

document.getElementById("Search").onkeyup = function (e) {
	var data = [
		"something thats good", 
		"something thats bad", 
		"something thats good", 
		"something thats bad", 
		"sometimes nothing else"
		];
	var re = new RegExp(document.getElementById("Search").value);
	var entries = filter(data, re);
	console.log(entries);
	for (var i = 0; i < entries.length; i++) {
		console.log(entries[i] + " ");
	};
};

var list = function(node, items) {
    for (var i = 0; i < items.length; i++) {
	node.append("<br>" + items[i]);
    };
}

var add = function (node, item) {
    node.append("<br>", item);
}

function filter_using_dict(data, key) {
	var result = [];
	for(key in data) {
		result.push(key);
	}
	return result;
}

function filter(data, re) {
	var result = [];
	for (var i = 0; i < data.length; i++) {
		var a = data[i].match(re); 
		if (a && a.length > 0)
			result.push(data[i]);
	};
	return result;
}
