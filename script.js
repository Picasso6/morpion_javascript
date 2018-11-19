var tab = [ 
			["","",""]       // 0
          , ["","",""]       // 1
          , ["","",""]       // 2
          					];
var fulltab = Object.values(tab) ;
var fully = 0;
var permit = true; 
function videcase() {location.reload()} ;
console.log(fulltab.length) 

function iswon () { 

				if  (
							(tab[0][0]===tab[0][1] && tab[0][1]===tab[0][2]&& tab[0][0]=== 1)
							|| 
							(tab[1][0]===tab[1][1] && tab[1][1]===tab[1][2]&& tab[1][0]=== 1)
							|| 
							(tab[2][0]===tab[2][1] && tab[2][1]===tab[2][2]&& tab[2][0]=== 1)
							|| 
							(tab[0][0]===tab[1][0] && tab[1][0]===tab[2][0]&& tab[0][0]=== 1)
							|| 
							(tab[0][1]===tab[1][1] && tab[1][1]===tab[2][1]&& tab[0][1]=== 1)
							|| 
							(tab[0][2]===tab[1][2] && tab[1][2]===tab[2][2]&& tab[0][2]=== 1)
							|| 
							(tab[0][0]===tab[1][1] && tab[1][1]===tab[2][2]&& tab[0][0]=== 1)
							||
							(tab[0][2]===tab[1][1] && tab[1][1]===tab[2][0]&& tab[0][2]=== 1)
							
							)  
						{	

							window.alert("vous avez gagné");
							videcase()
							  	
						}
				else if (   (tab[0][0]===tab[0][1] && tab[0][1]===tab[0][2]&& tab[0][0]=== 0)
							|| 
							(tab[1][0]===tab[1][1] && tab[1][1]===tab[1][2]&& tab[1][0]=== 0)
							|| 
							(tab[2][0]===tab[2][1] && tab[2][1]===tab[2][2]&& tab[2][0]=== 0)
							|| 
							(tab[0][0]===tab[1][0] && tab[1][0]===tab[2][0]&& tab[0][0]=== 0)
							|| 
							(tab[0][1]===tab[1][1] && tab[1][1]===tab[2][1]&& tab[0][1]=== 0)
							|| 
							(tab[0][2]===tab[1][2] && tab[1][2]===tab[2][2]&& tab[0][2]=== 0)
							|| 
							(tab[0][0]===tab[1][1] && tab[1][1]===tab[2][2]&& tab[0][0]=== 0)
							||
							(tab[0][2]===tab[1][1] && tab[1][1]===tab[2][0]&& tab[0][2]=== 0))
						{	

							window.alert("vous avez perdu");
							videcase()
							  	
						}

					else if (fully==9)	{window.alert("MATCH NUL!!");videcase() }

						 
				} 


function push (caseID , a, b) {  if (tab[a][b] === "" && permit == true)
										{
											document.getElementById(caseID).innerHTML="X";
	                                    	tab[a][b] = 1 ;
	                                    	//Object.freeze(tab); 

	                                    	fully++;
	                                    	console.log(tab); 
	                                    	console.log("fulltab = "+fulltab);
	                                    	console.log("tour :" + fully);
	                                    	permit = false ;
	                                    	iswon(); 
	                                    	bot()  ;

                                     	}
                                    	 

								}
var min = 0;
var max =2; 


function bot(){ 
	 
					var x = Math.floor(Math.random() * (max - min+1)) + min;
				    var y = Math.floor(Math.random() * (max - min+1)) + min;
					
				   if (tab[x][y]==="")
				  	{ tab[x][y]=0;
				  		fully++;

				    x = x.toString();
				    y = y.toString();
				    //
				    setTimeout(function() {document.getElementById(x+y).innerHTML="O"; permit = true;iswon() }, 700);

					}

				    else if (tab[x][y]!==""){bot()}

				}



/*var k =0;
	 
	while (k<fulltab.lenght-1)
	{
		if (empty(fulltab[k])==true ) 
		{ fully=false ; k++}
		else {fully==true; k++}

	}

	return fully;*/


// 


//tab = [ ["","",""]       , ["","",""]        , ["","",""]       ];
						  //for (int i=0 ,j=0 ; i<3 , j <3 ; i++ ,j++ ){tab [i][j]="";}



                 
/*function bot() {       if      (tab[0][0]=="")		    {tab[0][0]= 0 ;   document.getElementById("A1").innerHTML="O" ; onoff() }
                      else if  (tab[0][1]=="")          {tab[0][1]= 0 ;   document.getElementById("A2").innerHTML="O" ; onoff() }
                      else if  (tab[0][2]=="")          {tab[0][2]= 0 ;   document.getElementById("A3").innerHTML="O" ; onoff() }
                      else if  (tab[1][0]=="")          {tab[1][0]= 0 ;   document.getElementById("B1").innerHTML="O" ; onoff() }
                      else if  (tab[1][1]=="")          {tab[1][1]= 0 ;   document.getElementById("B2").innerHTML="O" ; onoff() }
                      else if  (tab[1][2]=="")          {tab[1][2]= 0 ;   document.getElementById("B3").innerHTML="O" ; onoff() }
                      else if  (tab[2][0]=="")          {tab[2][0]= 0 ;   document.getElementById("C1").innerHTML="O" ; onoff() }
                      else if  (tab[2][1]=="")          {tab[2][1]= 0 ;   document.getElementById("C2").innerHTML="O" ; onoff() }
                      else if  (tab[2][2]=="")          {tab[2][2]= 0 ;   document.getElementById("C3").innerHTML="O" ; onoff() } 

          } */





//$(document).ready(function() { }

/* function player(){   					$("#A1").click (function() {tab[0][0]= 1 ;   $("#A1").html("X"); bot()  }) 
		                                $("#A2").click (function() {tab[0][1]= 1 ;   $("#A2").html("X"); bot()  })
		                                $("#A3").click (function() {tab[0][2]= 1 ;   $("#A3").html("X"); bot()  })
		                                $("#B1").click (function() {tab[1][0]= 1 ;   $("#B1").html("X"); bot()  })
		                                $("#B2").click (function() {tab[1][1]= 1 ;   $("#B2").html("X"); bot()  })
		                                $("#B3").click (function() {tab[1][2]= 1 ;   $("#B3").html("X"); bot()  })
		                                $("#C1").click (function() {tab[2][0]= 1 ;   $("#C1").html("X"); bot()  })
		                                $("#C2").click (function() {tab[2][1]= 1 ;   $("#C2").html("X"); bot()  })
		                                $("#C3").click (function() {tab[2][2]= 1 ;   $("#C3").html("X"); bot()  }) 
		                            }  


function bot() { 		if     (tab[0][0]=="")		    {tab[0][0]= 0 ;   document.getElementById("A1").innerHTML="O"  ; player();}
                      else if  (tab[0][1]=="")          {tab[0][1]= 0 ;   document.getElementById("A2").innerHTML="O"  ; player();}
                      else if  (tab[0][2]=="")          {tab[0][2]= 0 ;   document.getElementById("A3").innerHTML="O"  ; player();}
                      else if  (tab[1][0]=="")          {tab[1][0]= 0 ;   document.getElementById("B1").innerHTML="O"  ; player();}
                      else if  (tab[1][1]=="")          {tab[1][1]= 0 ;   document.getElementById("B2").innerHTML="O"  ; player();}
                      else if  (tab[1][2]=="")          {tab[1][2]= 0 ;   document.getElementById("B3").innerHTML="O"  ; player();}
                      else if  (tab[2][0]=="")          {tab[2][0]= 0 ;   document.getElementById("C1").innerHTML="O"  ; player();}
                      else if  (tab[2][1]=="")          {tab[2][1]= 0 ;   document.getElementById("C2").innerHTML="O"  ; player();}
                      else if  (tab[2][2]=="")          {tab[2][2]= 0 ;   document.getElementById("C3").innerHTML="O"  ; player();} */