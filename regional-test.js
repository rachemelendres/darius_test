function getKpiData() {

	var kpi = document.getElementById("kpis").value;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
      // alert(this.responseText);
			var dataArray= JSON.parse(this.responseText);
			// var headers = Object.keys(dataArray[0])
			var headers = dataArray[0];
			// var dataParsed= JSON.parse(dataString);
			//  dataArray= dataExtract.map(Object.values);
			// console.warn(xhr.responseText)
	
			showTable(dataArray,headers);
			runChart(dataArray,headers);
			console.log(dataArray);
			console.log(dataArray[0]);
	
		
		}
	};
	// xhttp.open("GET", "regional_data.php?kpi="+kpi+"&year="+year, true);
	xhttp.open("GET", `read-regional-csvs.php?kpi=${kpi}`, true);
	xhttp.send();	

}



function runChart(dataArray,headers) {
	var select_kpi = document.getElementById("kpis").value;
	var select_year = document.getElementById("year").value;
	var regionLabels = [];
	var dataChart =[];
	var kpiLabels =[];
	for (i=0; i< dataArray.length; i++) {
	
		if (dataArray[i][0]=='ByYear' && select_year == dataArray[i][1]) {

	switch (select_kpi) {
		case 'ave_eqpt_acq_rate_region':
		
		kpiLabels.push(headers[9]);
		dataChart.push(dataArray[i][9]);
		regionLabels.push(dataArray[i][4]);
		break;
		case 'total_eqpt_approved_budget':
		
		kpiLabels.push(headers[6]);
		dataChart.push(dataArray[i][6]);
		regionLabels.push(dataArray[i][4]);
		break;
		case 'ave_eqpt_approved_budget':
		
		kpiLabels.push(headers[6]);
		dataChart.push(dataArray[i][6]);
		regionLabels.push(dataArray[i][4]);
		break;
		case 'ave_fund_util_rate':
		
		kpiLabels.push(headers[8]);
		dataChart.push(dataArray[i][8]);
		regionLabels.push(dataArray[i][3]);
		break;
		case 'total_project_cost':
		
		kpiLabels.push(headers[5]);
		dataChart.push(dataArray[i][5]);
		regionLabels.push(dataArray[i][4]);
		break;
		case 'ave_project_cost':
		
		kpiLabels.push(headers[5]);
		dataChart.push(dataArray[i][5]);
		regionLabels.push(dataArray[i][4]);
		break;
		case 'setup_refund':
		
			kpiLabels.push(headers[7]);
			dataChart.push(dataArray[i][7]);
			regionLabels.push(dataArray[i][4]);
			break;
		default:
		break;
	}

}

	else {

		continue;

	}

	};


		console.log(regionLabels);
		console.log(dataChart);
		drawChart(regionLabels,dataChart,kpiLabels);
	}




// draw the chart

function drawChart(labels, data, kpi) {
	document.getElementById("chartContainer").innerHTML = '<canvas id="myChart" style="height: 400px; width: 100%;"></canvas>';
	
	var ctx = document.getElementById('myChart').getContext('2d');
	
	var chart = new Chart (ctx, {
		// Type of chart
		
		// Data for the chart
		data: {
			labels: labels, 
			datasets: [
				{
					label: kpi, 
					fill: false, 
					backgroundColor: 'rgb(0,0,100)',
					borderColor: 'rgb(100,0,0)', 
					borderWidth: 2, 
					data: data
				}, 
			]
			
		}, 
		// Configuration options
		type: 'horizontalBar', 
		options: {
			indexAxis: "y",
			responsive: true, 
			maintainAspectRatio: false, 
			legend: {
				display: true, 
				position: 'top',
				labels: {fontFamily: 'Roboto Condensed'}
			} ,
			title: {
        display: true,
				fontFamily: 'Roboto Condensed',
        text: 'Regional Annual KPI Values',
				fontSize: 14
      },			
		}
		



	}
	);
}


function showTable(dataArray,headers) {
	// var myTableDiv = document.getElementById("tableContainer");
	var table_kpis = document.getElementById("kpis").value;
	var year = document.getElementById("year").value;

	var showArray = [];

		for (i=1; i < dataArray.length; i++){	
	

		if (dataArray[i][0]=='ByYear' && year == dataArray[i][1]) {
		switch (table_kpis) {
				case 'ave_eqpt_acq_rate_region':

				showArray.push([dataArray[i][1],
												dataArray[i][4],
												dataArray[i][5],
												dataArray[i][6],
												dataArray[i][7],
												dataArray[i][8],
												dataArray[i][9]
												]);
				break;
				case 'total_eqpt_approved_budget':

					showArray.push([dataArray[i][1],
													dataArray[i][4],
													dataArray[i][5],
													dataArray[i][6]
													]);
					break;
				case 'ave_eqpt_approved_budget':

				showArray.push([dataArray[i][1],
												dataArray[i][4],
												dataArray[i][5],
												dataArray[i][6]
												]);
				break;
			case 'ave_fund_util_rate':

				showArray.push([dataArray[i][1],
												dataArray[i][3],
												dataArray[i][4],
												dataArray[i][5],
												dataArray[i][6],
												dataArray[i][7],
												dataArray[i][8]
												]);
				break;
			case 'ave_project_cost':

				showArray.push([dataArray[i][1],
												dataArray[i][4],
												dataArray[i][5]
												]);
				break;
			case 'total_project_cost':

				showArray.push([dataArray[i][1],
												dataArray[i][4],
												dataArray[i][5]
												]);
				break;
			case 'setup_refund':

				showArray.push([dataArray[i][1],
												dataArray[i][4],
												dataArray[i][5],
												dataArray[i][6],
												dataArray[i][7]
												]);
				break;
				default:
			break;
					}
				}

		else {	
			continue;

		}
	}
	console.log(showArray);

	var tableContent = '<table class="w3-small w3-table w3-striped w3-hoverable">';
	switch (table_kpis) {
		case 'ave_eqpt_acq_rate_region':
			tableContent += '<tr><th>'+
			headers[1]+'</th><th>'+
			headers[4]+'</th><th>'+
			headers[5]+'</th><th>'+
			headers[6]+'</th><th>'+
			headers[7]+'</th><th>'+
			headers[8]+'</th><th>'+
			headers[9]+'</th></tr>';

			break;
		case 'total_eqpt_approved_budget':
		tableContent += '<tr><th>'+
		headers[1]+'</th><th>'+
		headers[4]+'</th><th>'+
		headers[5]+'</th><th>'+
		headers[6]+'</th></tr>';

		break;
		case 'ave_eqpt_approved_budget':
		tableContent += '<tr><th>'+
		headers[1]+'</th><th>'+
		headers[4]+'</th><th>'+
		headers[5]+'</th><th>'+
		headers[6]+'</th></tr>';

		break;
		case 'ave_fund_util_rate':
			tableContent += '<tr><th>'+
			headers[1]+'</th><th>'+
			headers[3]+'</th><th>'+
			headers[4]+'</th><th>'+
			headers[5]+'</th><th>'+
			headers[6]+'</th><th>'+
			headers[7]+'</th><th>'+
			headers[8]+'</th></tr>';
	
			break;
		case 'total_project_cost':
			tableContent += '<tr><th>'+
			headers[1]+'</th><th>'+
			headers[4]+'</th><th>'+
			headers[5]+'</th></tr>';
	
			break;
		case 'ave_project_cost':
			tableContent += '<tr><th>'+
			headers[1]+'</th><th>'+
			headers[4]+'</th><th>'+
			headers[5]+'</th></tr>';
	
			break;
		case 'setup_refund':
			tableContent += '<tr><th>'+
			headers[1]+'</th><th>'+
			headers[4]+'</th><th>'+
			headers[5]+'</th><th>'+
			headers[6]+'</th><th>'+
			headers[7]+'</th></tr>';
	
		break;
	
		default:
			break;
	}

	for (i = 0; i < showArray.length; i++) {	


		switch (table_kpis) {
			case 'ave_eqpt_acq_rate_region':
				tableContent += '<tr><td>'+showArray[i][0]+'</td><td>'
				+showArray[i][1]+'</td><td>'
				+showArray[i][2]+'</td><td>'
				+showArray[i][3]+'</td><td>'
				+showArray[i][4]+'</td><td>'
				+showArray[i][5]+'</td><td>'
				+showArray[i][6]+'</td></tr>';
				break;
			case 'total_eqpt_approved_budget':
			tableContent += '<tr><td>'+showArray[i][0]+'</td><td>'+showArray[i][1]+'</td><td>'+showArray[i][2]+'</td><td>'
			+showArray[i][3]+'</td></tr>';
			break;
			case 'ave_eqpt_approved_budget':
			tableContent += '<tr><td>'+showArray[i][0]+'</td><td>'+showArray[i][1]+'</td><td>'+showArray[i][2]+'</td><td>'
			+showArray[i][3]+'</td></tr>';
			break;
			case 'ave_fund_util_rate':
			tableContent += '<tr><td>'+showArray[i][0]+'</td><td>'+showArray[i][1]+'</td><td>'+showArray[i][2]+'</td><td>'
			+showArray[i][3]+'</td><td>'
			+showArray[i][4]+'</td><td>'
			+showArray[i][5]+'</td><td>'
			+showArray[i][6]+'</td></tr>';
			break;
			case 'ave_project_cost':
			tableContent += '<tr><td>'+showArray[i][0]+'</td><td>'+showArray[i][1]+'</td><td>'
			+showArray[i][2]+'</td></tr>';
			break;
		case 'total_project_cost':
			tableContent += '<tr><td>'+showArray[i][0]+'</td><td>'+showArray[i][1]+'</td><td>'
			+showArray[i][2]+'</td></tr>';
			break;
		case 'setup_refund':
			tableContent += '<tr><td>'+showArray[i][0]+'</td><td>'+showArray[i][1]+'</td><td>'
			+showArray[i][2]+'</td><td>'
			+showArray[i][3]+'</td><td>'
			+showArray[i][4]+'</td></tr>';
			break;
			default:
			break;

		}
	};

	tableContent += '</table>'
	document.getElementById('tableContainer').innerHTML = tableContent;


	}



