<?php

function showRegional() {
?>

<div class="w3-row">
				<div class="w3-col l3 w3-padding">
					<h2 class="w3-xlarge">Regional KPI Trends</h2>
          <br>
          <div class = "customer-nav w3-bar-block">
          <p>Select KPI:</p>
					<select class="w3-select w3-border" id="kpis">
          <option selected hidden>KPI</option>

          
          <option value ="ave_eqpt_acq_rate_region">Average Equipment Budget  Acquisition Rate</option>
          <option value ="total_eqpt_approved_budget">Total Equipment Approved Budget</option>
          <option value ="ave_eqpt_approved_budget">Average Equipment Cost</option>
          <option value ="ave_fund_util_rate">Average Fund Utilization Rate of Projects</option>
          <option value ="total_project_cost">Total Project Cost</option>
          <option value ="ave_project_cost">Average Project Cost</option>
          <option value ="setup_refund">Percentage of Graduated SETUP-funded projects</option>
          <!-- <option value ="setup_refund_granular">Percentage of Graduated SETUP-funded projects (Granular)</option> -->

				</select><br/><br/><br/>
         
          <p>Select Year:</p>
					<select class="w3-select w3-border" id="year">
						<option value="">Year</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
         
            
					</select><br/><br/><br/>
			

          <button class="w3-button w3-blue" onclick="
          getKpiData();">Retrieve</button>
</div>
</div>

<div class="w3-col l9">
  <div class="w3-row">
    <br>
    <div class="w3-col l12">&nbsp;</div>
    
</div>

<div class ="w3-row">
<div class="w3-col l6 w3-padding">
<div id="chartContainer" class="w3-padding chart-container" style="width: 100%; height:550px"></div></div>
<div class="w3-col l6 w3-padding">
<div id="tableContainer" class="w3-padding" style="height: 500px; overflow: auto;">
</div>			
					</div>
</div>
</div>
</div>
<script src="chart/chart.bundle.js"></script>

<!-- <script src="regional-charts.js"></script> -->
<script src="regional-test.js"></script>

<?php
}