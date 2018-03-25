function generateList() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var rawList = JSON.parse(this.responseText);
			for (i=0;i<562;i++) {
				console.log(rawList['feed']['entry'][i]['content']['$t']);
				var title=document.createTextNode(rawList['feed']['entry'][i]['content']['$t']);
				var node=document.createElement("LI");
				node.appendChild(title);
				document.getElementById("bigList").appendChild(node);
				}
		}
	};
	xmlhttp.open("GET", 'https://spreadsheets.google.com/feeds/cells/1ettowHimvIrLHkSRYs5VNQJQVPBv6qHai_PIBIKpjbA/1/public/values?alt=json', true);
	xmlhttp.send();
}
generateList();
