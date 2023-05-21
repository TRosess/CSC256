//set up an event hadnler for the onload event
//when the page loads, call the initLinks function
window.onload = initLinks;

//track the current image shown in the slideshow
var imgNum = 0;
//array to hold the image names
//can have any number of images
//put image names in "" and use a , between image names
var arrPictures = new Array("sakura.jpg", "fugi.jpg", "building.jpg", "city.jpg");

//this fires when the page loads
//adds event handlers for when the links are clicked
function initLinks (){
    //previous link
    document.getElementById("linkPrevious").onclick = processPrevious;
    //next link
    document.getElementById("linkNext").onclick = processNext;
}

//this function is called when the previous link is clicked
function processPrevious(){
    //if the img number is 0, go to the end of the image list
    if (imgNum == 0){
        imgNum = arrPictures.length;
    }

    //subtract 1 from the current image number
    //this will cause us to go back to the previous image
    imgNum--;
    //this code changes the image displayed in the img on the html page
    document.getElementById("imgSlideshow").src = arrPictures[imgNum];
    //for good mesaure add this code so the page stops executing
    return false;
}

//this function is called when the previous link is clicked
function processNext(){
    //add 1 to the current image number
    imgNum++;

    //if we are the end of the slideshow, reset the image number
    //so we start at the beginning
    if (imgNum == arrPictures.length){
        imgNum = 0;
    }
    //this code changes the image displayed in the img on the html page
    document.getElementById("imgSlideshow").src = arrPictures[imgNum];
    //for good mesaure add this code so the page stops executing
    return false;
}