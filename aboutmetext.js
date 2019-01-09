function myFunction() {
    var x = document.getElementById("description");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showPicture() {
    var sourceOfPicture = "http://2pix.org/photo/2014/07/Ford-Focus-Tuning.jpg";
    var img = document.getElementById('fordfocus')
    img.src = sourceOfPicture.replace('90x90', '225x225');
    img.style.display = "block";
}
function hidePicture() {
    var sourceOfPicture = "";
    var img = document.getElementById('fordfocus')
    img.src = sourceOfPicture.replace('90x90', '225x225');
    img.style.display = "block";
} 