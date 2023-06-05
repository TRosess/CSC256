function imageEvent(){
    //alert("hi");

}

function changeCursor(){
    var theImage = document.getElementById("imgSakura");
    theImage.style.cursor = 'crosshair';
}

function validateInput(){
    if (document.formTest.textName.value == ""){
    document.formTest.textName.style.backgroundColor ="red";
    document.formTest.textName.style.color ="white";
   }

   return false;
}

function showName(){
    var theName = document.getElementById("textName");
    //alert("The name you entered: " + theName.value);
    theName.style.backgroundColor = "purple";
    theName.style.color = "white";
}