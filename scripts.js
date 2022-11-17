/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/

// Constant Variables 




function fn1()
{
	var Met = document.getElementById("Methodchoice").value;
	var SF = document.getElementById("SquareFootSize").value;
	var NHG = document.getElementById("InputnumberofhousesGas").valueAsNumber;
	var NHE = document.getElementById("InputnumberofhousesElectric").valueAsNumber;
	var NH = document.getElementById("NH").valueAsNumber; 
	var LSF= document.getElementById("SquareFootSize1").value;
	var Cost= 0;
	var TS = 0;
    var Trans=[
		[0,25,25,25,25,25,50,50,50,50,50,100,100,100,100],
		[25,25,25,25,50,50,50,50,50,100,100,100,100,100,100],
		[25,25,50,50,50,50,50,50,100,100,100,100,100,100,100],
		[50,50,50,50,50,50,50,100,100,100,100,100,100,100,100],
		[50,50,50,50,50,100,100,100,100,100,100,100,100,100,100],
		[50,50,50,100,100,100,100,100,100,100,100,100,100,100,100],
		];
	var DF =[0,1,0.9,0.75,0.65,0.63,0.62,0.61,0.61,0.61,0.61,0.60,0.59,0.58,0.58,0.57,0.57,0.56,0.54,0.54,0.54];
	
if(Met=="Diversity"){
	 
	 if(SF=="1200"){
		
		var Esummer = 13;
	    var Ewinter = 15;
		var Gsummer= 8;
		var Gwinter= 8;
		var DFA= DF[NH];
		
		var ES= Esummer*NHE;
		var EW= Ewinter*NHE;
		var GS= Gsummer*NHG;
		var GW= Gwinter*NHG;
		
		var ESDF = ES*DFA;
		var EWDF = EW*DFA;
		var GSDF = GS*DFA;
		var GWDF = GW*DFA;
			
			
     if((ESDF < 14 || ESDF == 14 && ESDF > 0 ) && (EWDF < 16 || EWDF == 16 && EWDF > 0)){
			TS = 10;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 21 || ESDF == 21 && ESDF > 14) && (EWDF < 24 || EWDF == 24 && EWDF > 16)){
			TS = 15;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 35 || ESDF == 35 && ESDF > 21) && (EWDF < 40 || EWDF == 40 && EWDF > 24)){
			TS = 25;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 53 || ESDF == 53 && ESDF > 35) && (EWDF < 60 || EWDF == 60 && EWDF > 40)){
			TS = 37.5;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 70 || ESDF == 70 && ESDF > 53) && (EWDF < 80 || EWDF == 80 && EWDF > 60)){
			TS = 50;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 105 || ESDF == 105 && ESDF > 70) && (EWDF < 120 || EWDF == 120 && EWDF > 80)){
			TS = 75;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 140 || ESDF == 140 && ESDF > 105) && (EWDF < 160 || EWDF == 160 && EWDF > 120)){
			TS = 100;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 234 || ESDF == 234 && ESDF > 140) && (EWDF < 267 || EWDF == 267 && EWDF > 160)){
			TS = 167;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			console.log(ESDF);
			console.log(EWDF);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}
		
		
		
		
	} 
	   if(SF=="1500"){
		
		var Esummer = 15;
		var Ewinter = 18;
		var Gsummer= 10;
		var Gwinter= 10;
		var ES= Esummer*NHE;
		var EW= Ewinter*NHE;
		var GS= Gsummer*NHG;
		var GW= Gwinter*NHG;
		var DFA= DF[NH];
		
		var ESDF = ES*DFA;
		var EWDF = EW*DFA;
		var GSDF = GS*DFA;
		var GWDF = GW*DFA;
			
			
     if((ESDF < 14 || ESDF == 14 && ESDF > 0 ) && (EWDF < 16 || EWDF == 16 && EWDF > 0)){
			TS = 10;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 21 || ESDF == 21 && ESDF > 14) && (EWDF < 24 || EWDF == 24 && EWDF > 16)){
			TS = 15;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 35 || ESDF == 35 && ESDF > 21) && (EWDF < 40 || EWDF == 40 && EWDF > 24)){
			TS = 25;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 53 || ESDF == 53 && ESDF > 35) && (EWDF < 60 || EWDF == 60 && EWDF > 40)){
			TS = 37.5;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 70 || ESDF == 70 && ESDF > 53) && (EWDF < 80 || EWDF == 80 && EWDF > 60)){
			TS = 50;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 105 || ESDF == 105 && ESDF > 70) && (EWDF < 120 || EWDF == 120 && EWDF > 80)){
			TS = 75;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 140 || ESDF == 140 && ESDF > 105) && (EWDF < 160 || EWDF == 160 && EWDF > 120)){
			TS = 100;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 234 || ESDF == 234 && ESDF > 140) && (EWDF < 267 || EWDF == 267 && EWDF > 160)){
			TS = 167;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			console.log(ESDF);
			console.log(EWDF);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}
		
	}
		
	if(SF=="1800"){
		
		var Esummer = 16;
		var Ewinter = 20;
		var Gsummer= 11;
		var Gwinter= 11;
		var ES= Esummer*NHE;
		var EW= Ewinter*NHE;
		var GS= Gsummer*NHG;
		var GW= Gwinter*NHG;
		var DFA= DF[NH];
		
		var ESDF = ES*DFA;
		var EWDF = EW*DFA;
		var GSDF = GS*DFA;
		var GWDF = GW*DFA;
			
     if((ESDF < 14 || ESDF == 14 && ESDF > 0 ) && (EWDF < 16 || EWDF == 16 && EWDF > 0)){
			TS = 10;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 21 || ESDF == 21 && ESDF > 14) && (EWDF < 24 || EWDF == 24 && EWDF > 16)){
			TS = 15;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 35 || ESDF == 35 && ESDF > 21) && (EWDF < 40 || EWDF == 40 && EWDF > 24)){
			TS = 25;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 53 || ESDF == 53 && ESDF > 35) && (EWDF < 60 || EWDF == 60 && EWDF > 40)){
			TS = 37.5;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 70 || ESDF == 70 && ESDF > 53) && (EWDF < 80 || EWDF == 80 && EWDF > 60)){
			TS = 50;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 105 || ESDF == 105 && ESDF > 70) && (EWDF < 120 || EWDF == 120 && EWDF > 80)){
			TS = 75;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 140 || ESDF == 140 && ESDF > 105) && (EWDF < 160 || EWDF == 160 && EWDF > 120)){
			TS = 100;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 234 || ESDF == 234 && ESDF > 140) && (EWDF < 267 || EWDF == 267 && EWDF > 160)){
			TS = 167;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			console.log(ESDF);
			console.log(EWDF);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}
		
	}
	if(SF=="2400"){
		
		var Esummer = 18;
		var Ewinter = 21;
		var Gsummer= 12;
		var Gwinter= 11;
	    var ES= Esummer*NHE;
		var EW= Ewinter*NHE;
		var GS= Gsummer*NHG;
		var GW= Gwinter*NHG;
		var DFA= DF[NH];
		
		var ESDF = ES*DFA;
		var EWDF = EW*DFA;
		var GSDF = GS*DFA;
		var GWDF = GW*DFA;
			
			
     if((ESDF < 14 || ESDF == 14 && ESDF > 0 ) && (EWDF < 16 || EWDF == 16 && EWDF > 0)){
			TS = 10;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 21 || ESDF == 21 && ESDF > 14) && (EWDF < 24 || EWDF == 24 && EWDF > 16)){
			TS = 15;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 35 || ESDF == 35 && ESDF > 21) && (EWDF < 40 || EWDF == 40 && EWDF > 24)){
			TS = 25;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 53 || ESDF == 53 && ESDF > 35) && (EWDF < 60 || EWDF == 60 && EWDF > 40)){
			TS = 37.5;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 70 || ESDF == 70 && ESDF > 53) && (EWDF < 80 || EWDF == 80 && EWDF > 60)){
			TS = 50;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 105 || ESDF == 105 && ESDF > 70) && (EWDF < 120 || EWDF == 120 && EWDF > 80)){
			TS = 75;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 140 || ESDF == 140 && ESDF > 105) && (EWDF < 160 || EWDF == 160 && EWDF > 120)){
			TS = 100;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 234 || ESDF == 234 && ESDF > 140) && (EWDF < 267 || EWDF == 267 && EWDF > 160)){
			TS = 167;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			console.log(ESDF);
			console.log(EWDF);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}
		
	}
	if(SF=="3000"){
		
		var Esummer = 21;
	    var Ewinter = 26;
	    var Gsummer= 14;
		var Gwinter= 11;
	    
		var ES= Esummer*NHE;
		var EW= Ewinter*NHE;
		var GS= Gsummer*NHG;
		var GW= Gwinter*NHG;
		var DFA= DF[NH];
		
		var ESDF = ES*DFA;
		var EWDF = EW*DFA;
		var GSDF = GS*DFA;
		var GWDF = GW*DFA;
			
			
         if((ESDF < 14 || ESDF == 14 && ESDF > 0 ) && (EWDF < 16 || EWDF == 16 && EWDF > 0)){
			TS = 10;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 21 || ESDF == 21 && ESDF > 14) && (EWDF < 24 || EWDF == 24 && EWDF > 16)){
			TS = 15;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 35 || ESDF == 35 && ESDF > 21) && (EWDF < 40 || EWDF == 40 && EWDF > 24)){
			TS = 25;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 53 || ESDF == 53 && ESDF > 35) && (EWDF < 60 || EWDF == 60 && EWDF > 40)){
			TS = 37.5;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 70 || ESDF == 70 && ESDF > 53) && (EWDF < 80 || EWDF == 80 && EWDF > 60)){
			TS = 50;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 105 || ESDF == 105 && ESDF > 70) && (EWDF < 120 || EWDF == 120 && EWDF > 80)){
			TS = 75;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 140 || ESDF == 140 && ESDF > 105) && (EWDF < 160 || EWDF == 160 && EWDF > 120)){
			TS = 100;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}else if((ESDF < 234 || ESDF == 234 && ESDF > 140) && (EWDF < 267 || EWDF == 267 && EWDF > 160)){
			TS = 167;
			document.getElementById("TS").innerHTML= "Transformer Size:"+TS+"KVA";
			console.log(TS);
			console.log(ESDF);
			console.log(EWDF);
			
	  if (TS== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (TS== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
		}
		
		

}


	
if(Met=="Coincidence Factor"){
}


	if(Met=="SquareFootage Table"){
		console.log(NHE);
		console.log(NHG);
		console.log(Trans[NHE][NHG]);
		document.getElementById("TS").innerHTML="Transformer Size:" Trans[NHE][NHG]+"KVA";	
		
	  if (Trans[NHE][NH]== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (Trans[NHE][NH]== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (Trans[NHE][NH]== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (Trans[NHE][NH]== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (Trans[NHE][NH]== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (Trans[NHE][NH]== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (Trans[NHE][NH]== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (Trans[NHE][NH]== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (Trans[NHE][NH]== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
	}
	
	return false;

}


//function updateItems(_this) {
 // var ItemCount = + _this.value //get the value
 // var results = document.querySelector('#results') //append results
 // results.innerHTML = '' //clear the results on each update
 // for (var i = 1; i <= ItemCount; i++) {
 //  var select = document.createElement('select') //create input
  //  var label = document.createElement("label"); //create label
   // label.innerText = 'House ' + i
  // select.type = "text";
   // input.placeholder = "House SqaureFoot"; //add a placeholder
	//input.id ="House"+i;
    //input.className = "my-inputs"; // set the CSS class
   // results.appendChild(label); //append label
    //results.appendChild(document.createElement("br"));
  //  results.appendChild(input); //append input
    //results.appendChild(document.createElement("br"));
	
	
 // }
