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
	if ( NH> 12){
		alert( "the value must be lower then 12 as the voltage drop will be too great");
	}
	var Cost= 0;
	var TS = 0;
	var cf= [0,1,0.85,0.74,0.66,0.61,0.57,0.54,0.52,0.5,0.49,0.47,0.46,0.45,0.43,0.42,0.41,0.39,0.38,0.38,0.37,0.37];
	const Kwhs = document.querySelectorAll('.KWs');
	const count1 = Kwhs.length;
	var total1=0;
	for (let i = 0; i < count1; i++) {
		total1=total1+parseFloat(Kwhs[i].value);
	}
	console.log(total1/count1);
	if(count1 > 0){
	var sum1= total1/count1;
	}
	else{
		var sum1= 0;
	}

	const Kwhw = document.querySelectorAll('.KWw');
	const count2 = Kwhw.length;
	var total2=0;
	for (let i = 0; i < count2; i++) {
		total1=total2+parseFloat(Kwhw[i].value);
	}
	console.log(total2/count2);
	if(count2 > 0){
	var sum2= total2/count2;
	}
	else{
		var sum2= 0;
	}
	
	const evs = document.querySelectorAll('.EVs');
	const count = evs.length;
	var total=0;
	for (let i = 0; i < count; i++) {
		total=total+parseFloat(evs[i].value);
	}
	console.log(total/count);
	if(count > 0){
	var sum= total/count;
	}
	else{
		var sum= 0;
	}

	
	
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
		
		var ES= (Esummer*NHE)+(sum*count);
		var EW= (Ewinter*NHE)+(sum*count);
		var GS= (Gsummer*NHG)+(sum*count);
		var GW= (Gwinter*NHG)+(sum*count);
		
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
		var ES= (Esummer*NHE)+(sum*count);
		var EW= (Ewinter*NHE)+(sum*count);
		var GS= (Gsummer*NHG)+(sum*count);
		var GW= (Gwinter*NHG)+(sum*count);
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
		var ES= (Esummer*NHE)+(sum*count);
		var EW= (Ewinter*NHE)+(sum*count);
		var GS= (Gsummer*NHG)+(sum*count);
		var GW= (Gwinter*NHG)+(sum*count);
		
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
	   	var ES= (Esummer*NHE)+(sum*count);
		var EW= (Ewinter*NHE)+(sum*count);
		var GS= (Gsummer*NHG)+(sum*count);
		var GW= (Gwinter*NHG)+(sum*count);
		
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
	    
		var ES= (Esummer*NHE)+(sum*count);
		var EW= (Ewinter*NHE)+(sum*count);
		var GS= (Gsummer*NHG)+(sum*count);
		var GW= (Gwinter*NHG)+(sum*count);
		
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

}
	
if(Met=="Coincidence Factor"){
	 
		
	
		var CFA= cf[NH];
		
		var ES= (Esummer*NHE)+(sum*count);
		var EW= (Ewinter*NHE)+(sum*count);
		var GS= (Gsummer*NHG)+(sum*count);
		var GW= (Gwinter*NHG)+(sum*count);
		
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
	   
		



	if(Met=="SquareFootage Table"){
		console.log(NHE);
		console.log(NHG);
		console.log(Trans[NHE][NHG]);
		document.getElementById("TS").innerHTML="Transformer Size:" +Trans[NHE][NHG]+"KVA";	
		
	  if (Trans[NHE][NHG]== 5){
		  Cost="$"+7475.11+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (Trans[NHE][NHG]== 10){
		  Cost="$"+7921.34+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (Trans[NHE][NHG]== 15){
		  Cost="$"+8850.54+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (Trans[NHE][NHG]== 25){
		  Cost="$"+10226.66+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (Trans[NHE][NHG]== 37.5){
		  Cost="$"+13641.59+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (Trans[NHE][NHG]== 50){
		  Cost="$"+14171.88+"USD";
		   document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (Trans[NHE][NHG]== 75){
		  Cost="$"+15308.08+"USD";
		  document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (Trans[NHE][NHG]== 100){
		  Cost="$"+18556.83+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  }else if (Trans[NHE][NHG]== 167){
		  Cost="$"+21021.43+"USD";
		 document.getElementById("COST").innerHTML="The Transformer will Cost:"+Cost;	
	  
     
	}
	}
	
	

	return false;
}  