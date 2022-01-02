let studentnew =[]
let student ={}
var i;
function add() {
  if (in1.value == ""  || in2.value == "" || in3.value == "") {
    eorr.innerText = " input your informations";
  }else{
    res1.innerHTML = "";
    res2.innerHTML = "";
    res3.innerHTML = "";
    res4.innerHTML = "";
    res5.innerHTML = "";
    eorr.innerText = " Save Successfully";
    // alert("Save Successfully")
    let student = {name: in1.value,
                  dept: in2.value, 
                  school: in3.value,
                  imegs: in4.value
                }; 
     studentnew.push(student);  
     for (let i = 0; i < studentnew.length; i++) {
      res1.innerHTML+= "<b>" +eval(i+1)+". " + "</b>" + "<br>" ;  
    
    res2.innerHTML+=  studentnew[i].name + "<br>";  
    
    res3.innerHTML+=  studentnew[i].dept  +  "<br>";  
    
    res4.innerHTML+=  studentnew[i].school + "<br>"; 
    
    res5.innerHTML+=  studentnew[i].imegs + "<br>"; 
    in1.value ="";
    in2.value ="";
    in3.value ="";
    in4.value="";
    }     
  
}


// res4.innerHTML+= "<h1>Stundent " + eval(i+1) +"</h1>" + "<br>" + studentnew[i].name + studentnew[i].dept  + studentnew[i].school+ studentnew[i].imegs + "<br>";  
}
function back() {
  box2.style.display ="none";
  box1.style.display ="block";

}
function dis() {
  box1.style.display ="none";
  box2.style.display ="block"; 
} 
function cl() {
  eorr.innerText ="";
}