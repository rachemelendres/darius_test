<?php

function showMarket() {
?>

<div class="w3-row">
				<div class="w3-col l3 w3-padding">
					<h2 class="w3-xlarge">Market - GIA Projects</h2>
          <br>
          <div class = "market-nav w3-bar-block">
          
          <p>Select Region:</p>
					<select class="w3-select w3-border" id="region">
						<option value="">Region</option>
            <option value="Region III">Region III</option>
            <option value="Region IV-A">Region IV-A</option>
            <option value="Region VI">Region VI</option>
            <option value="Region VIII">Region VIII</option>
            <option value="Region X">Region X</option>
            <option value="CAR">CAR</option>       
            
					</select><br/><br/><br/>
			
          <p>Select Sector:</p>
					<select class="w3-select w3-border" id="sector">
						<option value ="">Sector</option>
						<option value ="Agriculture / Marine / Aquaculture / Forestry / Livestock">Agriculture / Marine / Aquaculture / Forestry / Livestock</option>
            <option value ="Food Processing">Food Processing</option>
            <option value ="Furniture">Furniture</option>
            <option value ="Gifts / Decors / Handicrafts">Gifts / Decors / Handicrafts</option>
            <option value ="Health & Wellness Products">Health & Wellness Products</option>
            <option value ="ICT">ICT</option>
            <option value ="Metals & Engineering">Metals & Engineering</option>
            <option value ="Other Regional Industry Priorities">Other Regional Industry Priorities</option>
            <option value ="">Blanks</option>
                               
					</select><br/><br/><br/>

					<!-- <p>Chart Time Period</p>
					<input type="range" min="1" max="360" value="30" id="slider" style="width: 100%;"/> -->
          <!-- <div class = "w3-bar-block"> -->
          <button class="w3-button w3-blue" onclick="runChart(); showTables();">Retrieve</button>				
<!-- </div> -->
				</div>
</div>

<div class="w3-col l9">
  <div class="w3-row">
    <br>
    <div class="w3-col l2">&nbsp;</div>
   
    <!-- <div class="w3-col l3 w3-bar-block w3-padding w3-center">    
    Group by: </div>
    <div class="w3-col l3">
    
    				 <select class="w3-select w3-border" id ="group">
						<option value ="">Period</option>
						<option value ="yearly">Year</option>
						<option value ="qtr">Quarter</option>
						<option value ="month">Month</option>
					</select><br/><br/> 

					
</div> -->


<div class ="w3-row">
<div id="chartContainer" class="w3-padding chart-container" style="width: 100%; height:300px"></div>
<div id="tableContainer" class="w3-padding" style="height: 500px; overflow: auto;">
						
					</div>
</div>
</div>
</div>
<script src="chart/chart.bundle.js"></script>
<script src="market-charts.js"></script>
<?php
}