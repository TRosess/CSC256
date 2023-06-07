//this funtion would allow you to clik or go over the image and the page would say hi to you 
//i commented it out because it was getting a bit annoying
function imageEvent(){
    //alert("hi");

}
//once you go over the image your mouse cursor will change to a crosshair which is
//basically a plus sign (+)
function changeCursor(){
    var theImage = document.getElementById("imgSakura");
    theImage.style.cursor = 'crosshair';
}
//o
function validateInput(){
    if (document.formTest.textName.value == ""){
      //if you click the sumbit buttone it will turn the color labled below
    document.formTest.textName.style.backgroundColor ="purple";
    //once the name is typed in the color will turn white so it will be able 
    //to be seen on top of the color above
    document.formTest.textName.style.color ="white";
   }
//this will allow you to not procces the page once you click the sumbit button
   return false;
}
//once you type in your name the text box will change color 
function showName(){
    var theName = document.getElementById("textName");
    //alert("The name you entered: " + theName.value);
    //text box will change to red once you click off of the text box
    theName.style.backgroundColor = "purple";
    //your name will turn white so it is seen on top of the color purple
    theName.style.color = "white";
}