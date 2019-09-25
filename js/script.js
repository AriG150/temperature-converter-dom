import { format } from "url";

console.log('Hello, front end');

//user writes temperature
//press submit
    //when submit is pressed, stop clear page, read inserted temperature, 
    //run through inserted temperature, place in bottom <p> value 
//calculates temperature conversion
//write temperature conversion in separate area 

//to make submit button not clear page need to use the event handler (e) 
// function(e){e.preventDefault(); }
//jQuery for.submit(fun(e))...

//jQuery DOM references
var $form = $('#tempForm');
var $result = $('#result');
var $clear = $('#clear');

//jQuery Event Listener


//temperature converter
function fToC(){
    var $fahrenheight=$("temptToConvert");
    var celcius;
    if($fahrenheight !== " "){
        celsius = ($fahrenheight - 32) * 5/9;
        celsius = 
    }
}


clear.addEventListener('click', function(e){
    e.preventDefault();
    format.temp.value='';
    result.textContent = '';
})