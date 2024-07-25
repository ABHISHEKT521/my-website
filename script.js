const checkbox=document.getElementById("slider")
checkbox.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
});

var datedis=document.getElementById("time")

setInterval(getresult,1000)
function getresult(){
    var currentdatetime= new Date();


var chour = appendZero(currentdatetime.getHours());
var cmin = appendZero(currentdatetime.getMinutes());
var csec = appendZero(currentdatetime.getSeconds());

var result =chour + ":" + cmin + ":" + csec ;
datedis.innerText =result;

}

function appendZero(value){
    return(value<10) ? '0'+ value:value;
      
}
