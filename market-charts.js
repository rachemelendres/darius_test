
// Extract data

function extractData() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			dataArray = JSON.parse(this.responseText);
      headers = dataArray[0];
			// dataArray = dataExtract.map(Object.values);
			console.log(dataArray);
			console.log(dataArray[0]);

		}
	};
	xhttp.open("GET", "read-market-gia.php", true);
	xhttp.send();	
}

function extractDataChart() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			dataChartArray = JSON.parse(this.responseText);
      headersChart = dataChartArray[0];
			// dataArray = dataExtract.map(Object.values);
			console.log(dataChartArray);
			console.log(headersChart);

		}
	};
	xhttp.open("GET", "read-market-gia-chart.php", true);
	xhttp.send();	
}

extractData();
extractDataChart();

// Create Chart
function runChart() {

  var chart_sector = document.getElementById("sector").value;
	var chart_region = document.getElementById("region").value;

	// if (group && kpis && region) {

	var dataCompleted = [];
	var dataNew = [];
	var dataOnGoing = [];
	var dataTerminated = [];
	var dataWithdrawn = [];
	// var labels;
	var labels_period = [];

	for (i = 1; i < dataChartArray.length; i++) {
			
			if (dataChartArray[i][1] == chart_region && dataChartArray[i][2]== chart_sector)
			
				{

				dataCompleted.push(dataChartArray[i][3]);
				dataNew.push(dataChartArray[i][4]);
				dataOnGoing.push(dataChartArray[i][5]);
				dataTerminated.push(dataChartArray[i][6]);
				dataWithdrawn.push(dataChartArray[i][7]);
				labels_period.push(dataChartArray[i][0]);				
					
			}
			else {

				continue;
			}
	};
		// console.log(dataCompleted);
		console.log(dataNew);
		console.log(labels_period);
		drawChart(labels_period, dataCompleted, dataNew, dataOnGoing, dataTerminated, dataWithdrawn, headersChart);
	};




// draw the chart

function drawChart(labels_period, dataCompleted, dataNew, dataOnGoing, dataTerminated, dataWithdrawn, headersChart) {
		var labelsCompleted = headersChart[3];
		var labelsNew = headersChart[4];
		var labelsOnGoing = headersChart[5];
		var labelsTerminated = headersChart[6];
		var labelsWithdrawn = headersChart[7];




	document.getElementById("chartContainer").innerHTML = '<canvas id="myChart" style="height: 400px; width: 100%;"></canvas>';
	
	var ctx = document.getElementById('myChart').getContext('2d');
	var chart = new Chart (ctx, {
		// Type of chart
		type: 'line', 
		// Data for the chart
		data: {
			labels: labels_period, 
			datasets: [
				{
					label: labelsCompleted, 
					fill: false, 
					backgroundColor: 'rgb(60, 179, 113)',
					borderColor: 'rgb(60, 179, 113)', 
					borderWidth: 2, 
					data: dataCompleted
				},
				{
					label: labelsNew, 
					fill: false, 
					backgroundColor: 'rgb(106, 90, 205)',
					borderColor: 'rgb(106, 90, 205)', 
					borderWidth: 2, 
					data: dataNew
				},
				{
					label: labelsOnGoing, 
					fill: false, 
					backgroundColor: 'rgb(255, 165, 0)',
					borderColor: 'rgb(255, 165, 0)', 
					borderWidth: 2, 
					data: dataOnGoing
				},
				{
					label: labelsTerminated, 
					fill: false, 
					backgroundColor: 'rgb(255, 0, 0)',
					borderColor: 'rgb(255, 0, 0)', 
					borderWidth: 2, 
					data: dataTerminated
				},
				{
					label: labelsWithdrawn, 
					fill: false, 
					backgroundColor: 'rgb(60, 60, 60)',
					borderColor: 'rgb(60, 60, 60)', 
					borderWidth: 2, 
					data: dataWithdrawn
				}
			]
			
		}, 
		// Configuration options
		options: {
			responsive: true, 
			maintainAspectRatio: false, 
			legend: {
				display: true, 
				position: 'top'
			}, 
			scales: {
				yAxes: [{
					ticks: {
						min: 0, max:40,
						stepSize: 5
					}
				,
				}],

				xAxes: [{
					display: true, 
					ticks: {
						autoSkip: false,
						maxRotation: 45,
						minRotation: 45
				}
									}]

			},
			legend: {
				position: 'top',
				labels: {fontFamily: 'Roboto Condensed'}
		},
		title: {
			display: true,
			fontFamily: 'Roboto Condensed',
			text: 'Annual Trend of Total Projects by Status',
			fontSize: 14
		},
		}
	}
	);
}


 function showTables() {

	var table_sector = document.getElementById("sector").value;
	var table_region = document.getElementById("region").value;

  var showArray = [];

  for (i=1; i < dataArray.length; i++){
		
		if (dataArray[i][3]==table_sector && dataArray[i][5] == table_region) {
       
        showArray.push([dataArray[i][0],
                        dataArray[i][1],
                        dataArray[i][2],
                        dataArray[i][3],
                        dataArray[i][4],
                        dataArray[i][5],
                        dataArray[i][6]
                        ]);
   
                    }
      else {

        continue;
      }
    };

console.log(showArray)

	var tableContent = '<table class="w3-small w3-table w3-striped w3-hoverable"><caption><h3 class="w3-large w3-center">GIA Externally-Funded Projects</h3></caption>';

  tableContent += '<tr><th>'+headers[0]+'</th><th>'+
  headers[1]+'</th><th>'+
  headers[2]+'</th><th>'+
  headers[3]+'</th><th>'+
  headers[4]+'</th><th>'+
  headers[5]+'</th><th>'+
  headers[6]+'</th></tr>';
		
	
for (i = 0; i < showArray.length; i++) {	
		
				tableContent += '<tr><td>'+showArray[i][0]+'</td><td>'+showArray[i][1]+'</td><td>'+showArray[i][2]+'</td><td>'+showArray[i][3]+'</td><td>'+showArray[i][4]+
				'</td><td>'+showArray[i][5]+'</td><td>'+showArray[i][6]+'</td></tr>';
			
		};

	tableContent += '</table>'
	
	document.getElementById('tableContainer').innerHTML = tableContent;

	}

