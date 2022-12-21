// get data
function extractData() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			dataArray= JSON.parse(this.responseText);
			headers = dataArray[0];
			// console.warn(xhr.responseText)

			console.log(dataArray);
			console.log(headers);
			arrayLength = dataArray.length;
		}
	};
	xhttp.open("GET", "read-home-csv.php", true);
	xhttp.send();	
}
extractData(); 

function setMetrics() {
	var region = document.getElementById("region").value;
	var year = document.getElementById("year").value;
	
	var metric_ids = ["tech_prom", "tech_adopt", "fora", "proj_cost", "prjgrad", "setup", "util", "prjmon", "cal", "consult"];
	// var metric_ids = headers;				
	if (region && year){
		// var test = [];
		var tp = [];
		var ta = [];
		var fora = [];
		var proj_cost =[]; 
		var prjgrad = [];
		var setup =[];
		var util =[];
		var prjmon =[]; 
		var cal = [];
		var consult =[];


		for (x=0; x <metric_ids.length; x++) {

						
			document.getElementById(metric_ids[x]).innerHTML = "<div id ='" + metric_ids[x] + "' class='w3-container w3-display-container w3-display-topmiddle w3-xxlarge' style = 'height:20px'><span class = 'nowrap'></span></div><br><br>;";

			// console.log(metric_ids[x])

		}     
		for (i=1; i < dataArray.length; i++) {
				
				if (dataArray[i][0] == year && dataArray[i][1] == region) {
					
					

					// Technologies Promoted
					if (dataArray[i][3] != "" ){

					tp.push(dataArray[i][3]);
					document.getElementById(metric_ids[0]).innerHTML = "<div id ='tech_prom' class='w3-container w3-display-container w3-display-topmiddle w3-xxlarge' style = 'height:20px'><span class = 'nowrap'>"+tp+"</span></div><br><br>;";
							
				}
												

				// Technologies Adopted
				if (dataArray[i][2] != "") {
					ta.push(dataArray[i][2]);
					document.getElementById(metric_ids[1]).innerHTML = "<div id ='tech_adopt' class='w3-container w3-display-container w3-display-topmiddle w3-xxlarge' style = 'height:20px'><span class = 'nowrap'>"+ta+"</span></div><br><br>;"
				}
				
				// Fora
				if (dataArray[i][4] != "" ) {
					fora.push(dataArray[i][4]);
					document.getElementById(metric_ids[2]).innerHTML = "<div id ='fora' class='w3-container w3-display-container w3-display-topmiddle w3-xxlarge' style = 'height:20px'><span class = 'nowrap'>"+fora+"</span></div><br><br>;"
				}

				// Project Costs
			if (dataArray[i][5] != "" ) {
					proj_cost.push(dataArray[i][5]);
					proj_cost2 = parseInt(proj_cost, 10).toLocaleString();
					document.getElementById(metric_ids[3]).innerHTML = "<div id ='proj_cost' class='w3-container w3-display-container w3-display-topmiddle w3-xxlarge' style = 'height:20px'><span class = 'nowrap'>"+proj_cost2+"</span></div><br><br>;"
				}
				// Graduated Projects
				if (dataArray[i][6] != "" ) {
					prjgrad.push(dataArray[i][6]);
					document.getElementById(metric_ids[4]).innerHTML = "<div id ='prjgrad' class='w3-container w3-display-container w3-display-topmiddlew3-xxlarge' style = 'height:20px'><span class = 'nowrap'>"+prjgrad+"</span></div><br><br>;"
				}

				// SETUP funded projects
				
			if (dataArray[i][7] != "" ) {
					setup.push(dataArray[i][7]);
					document.getElementById(metric_ids[5]).innerHTML = "<div id ='setup' class='w3-container w3-display-container w3-display-topmiddle w3-xxlarge' style = 'height:20px'><span class = 'nowrap'>"+setup+"</span></div><br><br>;"
				}
				
				// Fund Utilized
				if (dataArray[i][8] != "" ) {
					util.push(dataArray[i][8])
					util2 = parseInt(util, 10).toLocaleString();
					document.getElementById(metric_ids[6]).innerHTML = "<div id ='util' class='w3-container w3-display-container w3-display-topmiddle w3-xxlarge' style = 'height:20px'><span class = 'nowrap'>"+util2+"</span></div><br><br>;"
					console.log(parseInt(util, 10).toLocaleString());
				}
				// Projects Monitored
				 if (dataArray[i][9] != "" ) {
					prjmon.push(dataArray[i][9]);
					prjmon2 = parseInt(prjmon, 10).toLocaleString();
					document.getElementById(metric_ids[7]).innerHTML = "<div id ='prjmon' class='w3-container w3-display-container w3-display-topmiddle w3-xxlarge' style = 'height:20px'><span class = 'nowrap'>"+prjmon2+"</span></div><br><br>;"
				}

				// Calibrations 
			 if (dataArray[i][10] != "") {
					cal.push(dataArray[i][10]);
					document.getElementById(metric_ids[8]).innerHTML = "<div id ='cal' class='w3-container w3-display-container w3-display-topmiddle w3-xxlarge' style = 'height:20px'><span class = 'nowrap'>"+cal+"</span></div><br><br>;"
				}

				// Consultancies
				 if (dataArray[i][11] != "") {
					consult.push(dataArray[i][11]);
					document.getElementById(metric_ids[9]).innerHTML = "<div id ='consult' class='w3-container w3-display-container w3-display-topmiddle w3-xxlarge' style = 'height:20px'><span class = 'nowrap'>"+consult+"</span></div><br><br>;"
				}

				}
	}		
			}
			
	else if (region == 0 || year == 0) {
				for (i=0; i < metric_ids.length; i++) {
						
						document.getElementById(metric_ids[i]).innerHTML = "";
						
					}	
		

		
		console.log(test)
		



	}



}