
function roll(){
   var randomnumber = Math.random()*6;
   randomnumber = (Math.floor(randomnumber)+1);


   var randomimgsrc = "images/"+"dice"+randomnumber +".png" ;

   var randomimage = document.querySelectorAll("img")[0];

   randomimage.setAttribute("src",randomimgsrc);



   var randomnumber2 = Math.random()*6;
   randomnumber2 = (Math.floor(randomnumber2)+1);

   var randomimgsrc = "images/"+"dice"+randomnumber2 +".png" ;

   var randomimage2 = document.querySelectorAll("img")[1];

   randomimage2.setAttribute("src",randomimgsrc);


if( randomnumber > randomnumber2 ){

     document.querySelector("h1").innerHTML ="Player1 Won ";
   
} else if(randomnumber < randomnumber2){
  
   document.querySelector("h1").innerHTML ="Player2 Won ";

} else{

   document.querySelector("h1").innerHTML ="Draw";

}
}
function audio(){
   var x = document.getElementById("audio");
   x.play();
   x.playBackrate = 0.5;
}
