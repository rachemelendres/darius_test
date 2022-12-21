// Extract data

function getMarketKpiData() {
	var kpi = document.getElementById("kpis").value;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			dataMarketArray = JSON.parse(this.responseText);
			var headersMarket = dataMarketArray[0];
			console.log(dataMarketArray);
			console.log(headersMarket);
			
			showTable(dataMarketArray,headersMarket);
		}
	};
	xhttp.open("GET", `read-market-kpi-csvs.php?kpi=${kpi}`, true);
	xhttp.send();	
}



function showTable(data, headers) {

	var table_kpis = document.getElementById("kpis").value;
	var table_region = document.getElementById("region").value;
	var table_group = document.getElementById("group").value;

	var showArray = [];

	for (i = 1; i < data.length; i++) {
			// console.log(i)

			if (data[i][0]==table_group && data[i][3] == table_region) {
	
		switch (table_kpis) {
			case 'jobs_created_rev':
					showArray.push([data[i][1], data[i][2], data[i][3], data[i][4], data[i][5],
					data[i][6]]);
					break;
			case 'ave_prod_change':
			showArray.push([data[i][1], data[i][2], data[i][3], data[i][4], data[i][5],data[i][6],data[i][7]]);
			break;
			case 'gross_sales':
			showArray.push([data[i][1], data[i][2], data[i][3], data[i][4], data[i][5],data[i][6],data[i][7],data[i][8],data[i][9]]);
			break;
			case 'refund_rate':
			showArray.push([data[i][1], data[i][2], data[i][3], data[i][4], data[i][5],data[i][6],data[i][7],data[i][8],data[i][9]]);
			break;
			case 'prj_total_exporters':
			showArray.push([data[i][1], data[i][2], data[i][3], data[i][4], data[i][5],data[i][6],data[i][7],data[i][8],data[i][9],data[i][10],data[i][11],data[i][12],data[i][13],data[i][14]]);
			break;
			default:
				break;
	}}
	else {	
		continue;

	}
	
}
console.log(showArray)

	var tableContent = '<table class="w3-small w3-table w3-striped w3-hoverable">';
	switch (table_kpis) {
		case 'jobs_created_rev':
			tableContent += '<caption><h3 class="w3-large w3-center">No. of jobs created under a project </h3></caption><tr><th>'+headers[1]+'</th><th>'+
			headers[2]+'</th><th>'+
			headers[3]+'</th><th>'+
			headers[4]+'</th><th>'+
			headers[5]+'</th><th>'+
			headers[6]+'</th></tr>';
			break;
		case 'ave_prod_change':
			tableContent += '<caption><h3 class="w3-large w3-center">Average productivity improvement of MSMEs (%)</h3></caption><tr><th>'+headers[1]+'</th><th>'+
			headers[2]+'</th><th>'+
			headers[3]+'</th><th>'+
			headers[4]+'</th><th>'+
			headers[5]+'</th><th>'+
			headers[6]+'</th><th>'+
			headers[7]+'</th></tr>';
			break;
	
		case 'gross_sales':
			tableContent += '<caption><h3 class="w3-large w3-center">Gross sales</h3></caption><tr><th>'+headers[1]+'</th><th>'+
			headers[2]+'</th><th>'+
			headers[3]+'</th><th>'+
			headers[4]+'</th><th>'+
			headers[5]+'</th><th>'+
			headers[6]+'</th><th>'+
			headers[7]+'</th><th>'+
			headers[8]+'</th><th>'+
			headers[9]+'</th></tr>';
			break;
		case 'refund_rate':
			tableContent += '<caption><h3 class="w3-large w3-center">Refund Rate (%)</h3></caption><tr><th>'+headers[1]+'</th><th>'+
			headers[2]+'</th><th>'+
			headers[3]+'</th><th>'+
			headers[4]+'</th><th>'+
			headers[5]+'</th><th>'+
			headers[6]+'</th><th>'+
			headers[7]+'</th><th>'+
			headers[8]+'</th><th>'+
			headers[9]+'</th></tr>';
			break;
		case 'prj_total_exporters':
			tableContent += '<caption><h3 class="w3-large w3-center">No. of exporters</h3></caption><tr><th>'+headers[1]+'</th><th>'+
			headers[2]+'</th><th>'+
			headers[3]+'</th><th>'+
			headers[4]+'</th><th>'+
			headers[5]+'</th><th>'+
			headers[6]+'</th><th>'+
			headers[7]+'</th><th>'+
			headers[8]+'</th><th>'+
			headers[9]+'</th><th>'+
			headers[10]+'</th><th>'+
			headers[11]+'</th><th>'+
			headers[12]+'</th><th>'+
			headers[13]+'</th><th>'+
			headers[14]+'</th></tr>';
			break;
	
		default:
			break;
	}

	for (i = 0; i < showArray.length; i++) {	
		switch (table_kpis) {
			case 'jobs_created_rev':
				tableContent += '<tr><td>'+showArray[i][0]+'</td><td>'+showArray[i][1]+'</td><td>'+showArray[i][2]+'</td><td>'+showArray[i][3]+'</td><td>'+showArray[i][4]+
				'</td><td>'+showArray[i][5]+
				
				'</td></tr>';
				break;
			case 'ave_prod_change':
				tableContent += '<tr><td>'+showArray[i][0]+'</td><td>'+showArray[i][1]+'</td><td>'+showArray[i][2]+'</td><td>'+showArray[i][3]+'</td><td>'+showArray[i][4]+
				'</td><td>'+showArray[i][5]+
				'</td><td>'+showArray[i][6]+
				'</td></tr>';
				break;
			case 'gross_sales':
				tableContent += '<tr><td>'+showArray[i][0]+'</td><td>'+showArray[i][1]+'</td><td>'+showArray[i][2]+'</td><td>'+showArray[i][3]+'</td><td>'+showArray[i][4]+
				'</td><td>'+showArray[i][5]+
				'</td><td>'+showArray[i][6]+
				'</td><td>'+showArray[i][7]+
				'</td><td>'+showArray[i][8]+
				'</td></tr>';
				break;
			case 'refund_rate':
				tableContent += '<tr><td>'+showArray[i][0]+'</td><td>'+showArray[i][1]+'</td><td>'+showArray[i][2]+'</td><td>'+showArray[i][3]+'</td><td>'+showArray[i][4]+
				'</td><td>'+showArray[i][5]+
				'</td><td>'+showArray[i][6]+
				'</td><td>'+showArray[i][7]+
				'</td><td>'+showArray[i][8]+
				'</td></tr>';
				break;
			case 'prj_total_exporters':
				tableContent += '<tr><td>'+showArray[i][0]+'</td><td>'+showArray[i][1]+'</td><td>'+showArray[i][2]+'</td><td>'+showArray[i][3]+'</td><td>'+showArray[i][4]+
				'</td><td>'+showArray[i][5]+
				'</td><td>'+showArray[i][6]+
				'</td><td>'+showArray[i][7]+
				'</td><td>'+showArray[i][8]+
				'</td><td>'+showArray[i][9]+
				'</td><td>'+showArray[i][10]+
				'</td><td>'+showArray[i][11]+
				'</td><td>'+showArray[i][12]+
				'</td><td>'+showArray[i][13]+
				'</td></tr>';
				break;
				default:
				break;


		}}

	tableContent += '</table>'
	
	document.getElementById('tableContainer').innerHTML = tableContent;

	}



