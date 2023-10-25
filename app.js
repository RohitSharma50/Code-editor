function initialize(){
    var html=document.getElementById("html");
    var css=document.getElementById("css");

    var JavaScript=document.getElementById("JavaScript"); 
    var code=document.getElementById("code").contentWindow.document; 

    document.body.onkeyup= function(){
       code.open();

 code.writeln(
                 html.value +
    "<style>" + css.value + "</style>" +
    "<script>" + JavaScript.value + "</script>"
 );
       code.close();
      
   
   
    }

}
initialize();









/*

<h2>rohit i love u</h2>
<h2 onclick="test()"> ClickMe </h2>


body{background-color:red;}

function test(){
alert("hi... love you");
}

*/
