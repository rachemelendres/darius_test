<?php

function showHome() {
?>
<div class>
<div class="w3-row">
<div class="w3-col l2 w3-padding">
  <h1> Home </h1>

  
</div>
<!-- Top Dropdown options -->
  <div class="w3-col l5">&nbsp;</div>
  <div class="w3-col l2 w3-bar-block w3-margin-top w3-padding">    
        <select class="w3-select w3-border" id = "region">
						<option value ="">Select Region</option>
						<option value ="CALABARZON">CALABARZON</option>
					</select><br/> </div>
          <!-- <div class="w3-col l1">&nbsp;</div> -->
    <div class="w3-col l2 w3-bar-block  w3-margin-top w3-padding">
    
    				<select class="w3-select w3-border" id ="year">
						<option value ="">Select Year</option>
						<option value ="2021" selected>2021</option>
						<option value ="2020" >2020</option>
						<option value ="2019">2019</option>
						<option value ="2018">2018</option>
						<option value ="2017">2017</option>
						<option value ="2016">2016</option>
						<option value ="2015">2015</option>
						<option value ="2014">2014</option>
						<option value ="2013">2013</option>
						<option value ="2012">2012</option>
						<option value ="2011">2011</option>
						<option value ="2010">2010</option>
						<option value ="2009">2009</option>
						<option value ="2008">2008</option>
						<option value ="2007">2007</option>
						<option value ="2006">2006</option>
						<option value ="2005">2005</option>
						<option value ="2002">2002</option>
					</select><br/><br/>  </div>
          <!-- <div class="w3-col l1">&nbsp;</div> -->
          <div class="w3-bar-block  w3-margin-top w3-padding">
          <button class="w3-button w3-blue" onclick="setMetrics()">Retrieve</button></div>
        </div>
</div>


<div class="w3-row"><div class="w3-col 12">&nbsp;</div></div>
<div class="w3-row"><div class="w3-col 12">&nbsp;</div></div>


<!-- Metrics -->
        <div class="w3-row">
				<div class="w3-col l6 w3-padding">
          <div class ="w3-container w3-border w3-border-blue w3-round-xlarge" id ="customer-cont" style = "width:100%; height:400px">
          <h2> Customer </h2><br>
          <div class="w3-row" id ="customer-kpis">
          <div class="w3-row" id ="customer-kpis-1" class = "nowrap">
          <div class="w3-col l4 w3-margin-left w3-container w3-display-container w3-border w3-round-large w3-border-blue w3-blue w3-padding" style = "width:40%; height:100px">
          <div id ="tech_prom" class="w3-container w3-display-container w3-display-topmiddle w3-xxlarge" style = "height:20px"><span class = "nowrap"></span></div><br><br>
        <div class = "w3-display-bottommiddle w3-padding w3-hide-tiny"><span class = "nowrap">Technologies Promoted</span></div>
        
        
        </div>
          <div class="w3-col l2"> &nbsp; </div>
          <div class="w3-col l4 w3-container w3-display-container w3-border w3-round-large w3-border-blue w3-blue w3-padding" style = "width:40%; height:100px">
          <div id ="tech_adopt" class="w3-container w3-display-container w3-display-topmiddle w3-xxlarge" style = "height:20px"><span class = "nowrap"></span></div><br><br>
          <div class = "w3-padding w3-display-bottommiddle w3-hide-tiny"> <span class = "nowrap">Technologies Adopted</span></div>
        
        </div>

          <div class="w3-row" id ="customer-kpis-2"><br><br><br>

          <div class="w3-col l2 w3-margin-left w3-container w3-display-container w3-border w3-round-large w3-border-blue w3-blue w3-padding" style = "width:25%; height:100px">
          <div id ="fora" class="w3-container w3-display-container w3-display-topmiddle w3-xxlarge" style = "height:20px"><span class = "nowrap"></span></div><br><br>
          <div class = "w3-padding w3-display-bottommiddle w3-hide-tiny"> <span class = "nowrap">Fora Conducted</span></div>
        </div>
          <div class="w3-col l1"> &nbsp; </div>
          <div class="w3-col l3 w3-container w3-display-container w3-border w3-round-large w3-border-blue w3-blue w3-padding" style = "width:25%; height:100px">
          <div id ="cal" class="w3-container w3-display-container w3-display-topmiddle w3-xxlarge" style = "height:20px"><span class = "nowrap"></span></div><br><br>
          <div class = "w3-padding w3-display-bottommiddle w3-hide-tiny"> <span class = "nowrap">Calibrations</span></div>
        </div>
          <div class="w3-col l1"> &nbsp; </div>
          <div class="w3-col l2 w3-container w3-display-container w3-border w3-round-large w3-border-blue w3-blue w3-padding" style = "width:25%; height:100px">
          <div id ="consult" class="w3-container w3-display-container w3-display-topmiddle w3-xxlarge" style = "height:20px"><span class = "nowrap"></span></div><br><br>
          <div class = "w3-padding w3-display-bottommiddle w3-hide-tiny"> <span class = "nowrap">Consultancies</span></div>
        </div>


          </div></div></div>


        </div></div>
        
          <div class="w3-col l6 w3-padding">
          <div class ="w3-container w3-border w3-border-blue w3-round-xlarge" id ="financial-cont" style = "width:100%; height:400px">
          <h2>  Financial </h2><br>
          <div class = "w3-row" id = "financial-kpis">
          <div class="w3-row" id ="financial-kpis-1">
          
          <div class="w3-col l4 w3-container w3-margin-left w3-display-container w3-border w3-round-large w3-border-blue w3-blue w3-padding" style = "width:40%; height:100px">
          <div id ="proj_cost" class="w3-container w3-display-container w3-display-topmiddle w3-xxlarge" style = "height:20px"><span class = "nowrap"></span></div><br><br>
          <div class = "w3-padding w3-display-bottommiddle w3-hide-tiny"> <span class = "nowrap">Project Costs</span></div>
        </div>
          <div class="w3-col l2"> &nbsp; </div>
          <div class="w3-col l w3-container w3-display-container w3-display-container w3-border w3-round-large w3-border-blue w3-blue w3-padding" style = "width:40%; height:100px">
          <div id ="util" class="w3-container w3-display-container w3-display-topmiddle w3-xxlarge" style = "height:20px"><span class = "nowrap"></span></div><br><br>
          <div class = "w3-padding w3-display-bottommiddle w3-hide-tiny"> <span class = "nowrap">Project Fund Utilized</span></div>
        </div>
          <div class="w3-row" id ="financial-kpis-2"><br><br><br>

          <div class="w3-col l2 w3-container w3-display-container w3-border w3-round-large w3-border-blue w3-blue w3-padding" style = "width:28%; height:100px">
          <div id ="prjmon" class="w3-container w3-display-container w3-display-topmiddle w3-xxlarge" style = "height:20px"><span class = "nowrap"></span></div><br><br>
          <div class = "w3-padding w3-display-bottommiddle w3-hide-tiny"> <span class = "nowrap">Total Projects Monitored</span></div>
        </div>
          <div class="w3-col l1"> &nbsp; </div>
          <div class="w3-col l3 w3-container w3-display-container w3-border w3-round-large w3-border-blue w3-blue w3-padding" style = "width:28%; height:100px">
          <div id ="setup" class="w3-container w3-display-container w3-display-topmiddle w3-xxlarge" style = "height:20px"><span class = "nowrap"></span></div><br><br>
          <div class = "w3-padding w3-display-bottommiddle w3-hide-tiny"> <span class = "nowrap">SETUP-funded Projects</span></div>
        </div>
          <div class="w3-col l1"> &nbsp; </div>
          
          <div class="w3-col l2 w3-container w3-display-container w3-border w3-round-large w3-border-blue w3-blue w3-padding" style = "width:27%; height:100px">
          <div id ="prjgrad" class="w3-container w3-display-container w3-display-topmiddle w3-xxlarge" style = "height:20px"><span class = "nowrap"></span></div><br><br>
          <div class = "w3-padding w3-display-bottommiddle w3-hide-tiny"> <span class = "nowrap">Graduated Projects</span></div>
        </div>
               
        
        </div></div>
        
        
        
        
        </div>  </div>    
        </div>
      </div>
				
  </div>
</div>

</div>


<script src="home.js"></script>    
<?php
}