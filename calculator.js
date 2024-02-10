var buttons=document.getElementsByClassName("button");
console.log(typeof buttons);
var display=document.getElementById("display");
var operation=null;
var operand1=0;
var operand2=null;
var task='+';
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        var value=this.getAttribute("data-value");
        if(value=="+/-")
        {
            task='-';
            display.innerText=task;
        }
        if(value=='+' || value=='-' || value=='*' || value=='/' || value=='%'){
            operation=value;
            operand1=parseFloat(display.textContent);
            display.innerText="";
            task='+';
        }
        else if(value=='='){
            operand2=parseFloat(sign+display.textContent);
            var result=eval(operand1+""+operation+""+operand2);
            display.innerText=result;
        }
        else if(value=="ac"){
            display.innerText="";
        }
        else
        {
            if(value!="+/-")
            {
                display.innerText+=value;
            }
        }
    });
}
