<?php

function showMarketKPI() {
?>

<div class="w3-row">
				<div class="w3-col l3 w3-padding">
					<h2 class="w3-xlarge">Market - Project KPIs</h2>
          <br>
          <div class = "customer-nav w3-bar-block">
          <p>Select KPI:</p>
					<select class="w3-select w3-border" id="kpis">
						<option value ="">KPI</option>
						<option value ="jobs_created_rev">No. of jobs created under a project </option>
						<option value ="ave_prod_change"> Average productivity improvement of MSMEs (%) </option>
						<option value ="gross_sales"> Gross Sales (%) </option>
						<option value ="refund_rate"> Refund rate (%) </option>
						<option value ="prj_total_exporters"> No. of exporters </option>
          
          
					</select><br/><br/>
          <hr/>
          <p>Select Region:</p>
					<select class="w3-select w3-border" id="region">
						<option value="">Region</option>
            <option value="CALABARZON">Region 4A</option>
					</select><br/><br/>
					<hr/>
				
				</div>
</div>

<div class="w3-col l9">
  <div class="w3-row">
    <br>
    <div class="w3-col l2">&nbsp;</div>
    <div class = "w3-bar-block w3-padding">
    <div class="w3-col l3 w3-bar-block w3-padding w3-center">    
    Group by: </div>
    <div class="w3-col l3">
    
    				<select class="w3-select w3-border" id ="group">
						<option value ="">Period</option>
						<option value ="ByYear">Year</option>
						<option value ="ByQtr">Quarter</option>
						</select><br/><br/>

					
</div>
<button class="w3-button w3-blue w3-margin-left" onclick="getMarketKpiData();">Retrieve</button>				
</div>

<div class ="w3-row">
<!-- <div id="chartContainer" class="w3-padding chart-container" style="width: 100%; height:300px"></div> -->
<div id="tableContainer" class="w3-padding" style="height: 500px; overflow: auto;">
						
					</div>
</div>
</div>
</div>
<script src="chart/chart.bundle.js"></script>
<script src="marketKPI-charts.js"></script>
<?php
}