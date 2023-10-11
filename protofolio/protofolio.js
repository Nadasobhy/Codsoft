let text ="this is my second task this is my protofolio this is my second task";
let index=1;
function writetext(){
    document.querySelector("h4").textContent=text.slice(0,index);
    index++
    if(index > text.length){
        index=1;
    }
}
setInterval(function(){
    writetext();
},50)