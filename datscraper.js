//inputValue is the shit we want baby
//url: 'https://spreadsheets.google.com/feeds/cells/1ettowHimvIrLHkSRYs5VNQJQVPBv6qHai_PIBIKpjbA/default/public/full/R' + i + 'C1?alt=json'
//csv: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS1RfrWSUM5uQh4LSFrEyG9L6ue755KPCqXlISQqROG2h66BHyELsprSJigthSWP_fcUtXcjw81R_a4/pub?output=csv'
//jQuery.getJSON( url [, data ] [, success ] )
var ListArr = [];
for (i=1;i<562;i++){

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myObj = JSON.parse(this.responseText);
			var node=document.createElement("LI");
			var textnode=document.createTextNode(myObj.entry.gs$cell.inputValue);
			node.appendChild(textnode);
			document.getElementById("bigList").appendChild(node);
		}
	};
	xmlhttp.open("GET", 'https://spreadsheets.google.com/feeds/cells/1ettowHimvIrLHkSRYs5VNQJQVPBv6qHai_PIBIKpjbA/default/public/full/R'+ i +'C1?alt=json', true);
	xmlhttp.send();
}
//document.getElementById("bigList").appendChild(document.createElement("LI").appendChild(document.createTextNode(myObj.entry.content.$t)));
