/*Redeveloped
Lab: Software Engineering
Exp: Statechart and Activity Modeling
File Name: simulation.js
Author: Prakriti Dhang*/

function playsimulation(){
    document.getElementById("playbtn").disabled=true;
    document.getElementById("p1").style.display="block";

    setTimeout(list1, 1500);
    function list1(){
        document.getElementById("l1").style.display="block";
        setTimeout(list2, 1500);
       
    }
    
    function list2(){
        document.getElementById("l2").style.display="block";
        setTimeout(list3, 1500);
       
    }
    
    function list3(){
        document.getElementById("l3").style.display="block";
        document.getElementById("nextbtn1").disabled=false;
       
    }
    
    
    
}

function gonextp2(){
    document.getElementById("step1").style.display="block";
    document.getElementById("head1").innerHTML="1. Identify the different state of the software project";
    document.getElementById("p2").style.display="block";
    document.getElementById("p1").style.display="none";
   // document.getElementById("backbtn2").disabled=true;
    document.getElementById("nextbtn2").disabled=true;
   
    setTimeout(list21, 1500);
    function list21(){
        document.getElementById("l21").style.display="block";
        setTimeout(list22, 1500);
       
    }
    
    function list22(){
        document.getElementById("l22").style.display="block";
        setTimeout(list23, 1500);
       
    }
    
    function list23(){
        document.getElementById("l23").style.display="block";
       
        setTimeout(list24, 1500);
    }
    function list24(){
        document.getElementById("l24").style.display="block";
        document.getElementById("nextbtn2").disabled=false;
       
    }
    
}



function gonextp3(){
    document.getElementById("p2").style.display="none";
    document.getElementById("step2").style.display="block";
    document.getElementById("p3").style.display="block";
    document.getElementById("para3").style.display="block";
    document.getElementById("nextbtn3").style.display="none";
    document.getElementById("head1").innerHTML="2. Represent activities that are performed in each state";

}
  
    //document.getElementById("backbtn3").disabled=true;
   
   
  

    function gonextp31(){
        document.getElementById("nextbtn3").style.display="none";
        document.getElementById("para3").style.display="none";
        document.getElementById("p31").style.display="block";
        document.getElementById("d1").style.display="block";
        document.getElementById("nextbtn31").disabled=false;
        document.getElementById("nextbtnp31").style.display="none";
        
    }


    function gonextp32(){
        document.getElementById("nextbtn3").style.display="block";
        document.getElementById("nextbtn31").style.display="none";
        document.getElementById("p31").style.display="none";
        document.getElementById("p32").style.display="block";
        document.getElementById("d11").style.display="block";
        document.getElementById("nextbtn3").disabled=true;
       
        setTimeout(shwd11, 1000);
    }
    function shwd11(){
        document.getElementById("p32").style.display="block";
        document.getElementById("d12").style.display="block";
       
        setTimeout(shwd12, 1000);
    }

    function shwd12(){
        document.getElementById("p32").style.display="block";
        document.getElementById("d13").style.display="block";
       
        setTimeout(shwd14, 1000);
    }

    function shwd14(){
        document.getElementById("p32").style.display="block";
        document.getElementById("d14").style.display="block";
        document.getElementById("nextbtn3").disabled=false;
        
    }

    

function gonextp4(){
    document.getElementById("step3").style.display="block";
    document.getElementById("head1").innerHTML="3. Represents transition among the states";
    document.getElementById("p3").style.display="none";
    document.getElementById("p31").style.display="none";
    document.getElementById("p32").style.display="none";
    document.getElementById("p4").style.display="block";
    document.getElementById("statechart1").style.display="block";
    document.getElementById("replaybtn").style.display="block";
    document.getElementById("replaybtn").disabled=false;
}
    
   







 

  function replaybtn(){
    document.getElementById("head1").innerHTML="Statechart Diagram";
    document.getElementById("playbtn").disabled=false;
    document.getElementById("replaybtn").disabled=true;
    location.reload();
   /* document.getElementById("p1").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p31").style.display="none";
    document.getElementById("li1").style.display="none";
    document.getElementById("li2").style.display="none";
    document.getElementById("li3").style.display="none";
    document.getElementById("li4").style.display="none";
    document.getElementById("li5").style.display="none";
    document.getElementById("li6").style.display="none";
    document.getElementById("li7").style.display="none";
    document.getElementById("li8").style.display="none";
    document.getElementById("li9").style.display="none";
    document.getElementById("li10").style.display="none";
    document.getElementById("li11").style.display="none";
    document.getElementById("li12").style.display="none";
    document.getElementById("li13").style.display="none";
    document.getElementById("p32").style.display="none";
    document.getElementById("people").style.display="none";
    document.getElementById("things").style.display="none";
    document.getElementById("org").style.display="none";
    document.getElementById("evnt").style.display="none";
    document.getElementById("concpt").style.display="none";
    document.getElementById("identdobj").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p41").style.display="none";
    document.getElementById("p42").style.display="none";
    document.getElementById("p43").style.display="none";
    document.getElementById("p44").style.display="none";
    document.getElementById("p45").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("step0").style.display="block";
    document.getElementById("step1").style.display="none";
    document.getElementById("step2").style.display="none";
    document.getElementById("step3").style.display="none";
    document.getElementById("step4").style.display="none";
   
 */
  }