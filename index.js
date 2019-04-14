
for(i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function (){
makeSound(this.innerHTML);
});
}
var audio,key;
document.addEventListener("keypress",function(event){
  makeSound(event.key);
});

function makeSound(key){
  switch(key)
  {
    case 'a': audio=new Audio('sounds/tom-1.mp3');
              audio.play();
              break;
    case 'w': audio=new Audio('sounds/tom-2.mp3');
              audio.play();
              break;
    case 's':  audio=new Audio('sounds/tom-3.mp3');
               audio.play();
               break;
    case 'd': audio=new Audio('sounds/crash.mp3');
              audio.play();
              break;
    case 'j': audio=new Audio('sounds/tom-4.mp3');
              audio.play();
              break;
    case 'k': audio=new Audio('sounds/snare.mp3');
              audio.play();
              break;
    case 'l':audio=new Audio('sounds/kick-bass.mp3');
              audio.play();
              break;
   default:alert("Click the button !");

  }
}
/*  audio=new Audio('sounds/tom-1.mp3');
               audio.play();*/
