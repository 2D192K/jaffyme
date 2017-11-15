	var userID1;		//First ID (Input)
	var userN1;			//First username (Output)
	var pp1;			//First pp (Output)
	var userID2;		//2nd "
	var userN2;			//2nd "
	var pp2;			//2nd "
	var amountConfirmed = 0;//Measures if both ID have been submitted
	var input1 = document.getElementById("i1");
	var input2 = document.getElementById("i2");
		
		
		/*
		$.ajax({
			dataType: "json",
			url: url,
			data: data,
			success: success
		});	*/
		

	/*------------------------------------------------------------*/
	function u1Confirm() {
		userID1 = input1.value;
		$.ajax({
			dataType: "json",
			url: 'https://osu.ppy.sh/api/get_user?k=' + 'd12ac76e143f73e7f7e88d96b349fa2d3bc722e0' + '&u=' + userID1,
			success: function(result1) {
			userN1 = result1[0]['username']
			pp1 = result1[0]['pp_raw']
			}
		});
		amountConfirmed++;
		checkButt();
	}
	
	function u2Confirm() {
		userID2 = input2.value;
		$.ajax({
			dataType: "json",
			url:'https://osu.ppy.sh/api/get_user?k=' + 'd12ac76e143f73e7f7e88d96b349fa2d3bc722e0' + '&u=' + userID2,
			success: function(result2) {
			userN2 = result2[0]['username']
			pp2 = result2[0]['pp_raw']
			}
		});
		amountConfirmed++;	
		checkButt();
	}
	/*------------------------------------------------------------*/
	
	checkButt();
	
	function disableButt() {
		amountConfirmed = 0;
		checkButt();
		console.log("button disabled");
		console.log(amountConfirmed);
	}
	
	function checkButt() {
		console.log("In checkButt", amountConfirmed);
		if (amountConfirmed >= 2) {
			enableButt();
		}
		else {
			document.getElementById("ppButt").disabled = true;
		}
	}
	function enableButt() {
		document.getElementById("ppButt").disabled = false;
		console.log("enableButt ",amountConfirmed);
	}

	/*------------------------------------------------------------*/
	function pp1Big() {
		document.getElementById("1stplace").innerHTML = "1st "+ userN1 + " | " + Math.floor(pp1) + " pp";
		
		console.log(pp1,">",pp2);
			
		document.getElementById("2ndplace").innerHTML = "2nd " + userN2 + " | " + Math.floor(pp2) + " pp";
	}
	
	function pp2Big() {
		document.getElementById("1stplace").innerHTML = "1st " + userN2 + " | " + Math.floor(pp2) + " pp";
				
		console.log(pp1,"<",pp2);
			
		document.getElementById("2ndplace").innerHTML = "2nd "+ userN1 + " | " + Math.floor(pp1) + " pp";
	}
	/*------------------------------------------------------------*/
	function printData() {

		$('#ppDif').text("PP Difference = "+Math.abs((Math.floor(pp1)-(Math.floor(pp2))))); //PARENTHESES
		if (pp1 > pp2) {
			pp1Big();
		}
		else if (pp1 < pp2) {
			pp2Big();
		}	
		disableButt();
		
		input1.value = "";
		input2.value = "";
		console.log(input1.value);

	}
