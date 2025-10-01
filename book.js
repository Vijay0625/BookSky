
// for popup display
var lay=document.querySelector(".layer1");
var up=document.querySelector(".layer2");
var plus=document.getElementById("addlayer");

plus.addEventListener("click",function(){
   lay.style.display="block";
   up.style.display="block";
});
// for prevent default setting in add cancel and make working of two buttons
var add=document.getElementById("add-book");
var can=document.getElementById("cancel-book");

can.addEventListener("click",function(Event){
   Event.preventDefault();
   lay.style.display="none";
   up.style.display="none";
});
// // create an div of given inputs
var title=document.getElementById("t");
var author=document.getElementById("a");
var dis=document.getElementById("disc");
var container=document.querySelector(".container");
add.addEventListener("click",function(Event){
   Event.preventDefault();
   var div=document.createElement("div");
   div.setAttribute("class","book-container");
   div.innerHTML=`<h2>${title.value}</h2>
        <h4>${author.value}</h4>
        <p>${dis.value}</p>   
        <button onclick="del(event)">Delete</button>`
      container.append(div);
      lay.style.display="none";
      up.style.display="none";  
});


// for deleting the book container
function del(Event){
   Event.target.parentElement.remove();
};