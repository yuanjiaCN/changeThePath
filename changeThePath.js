function changeThePath() {
    var BigPicture = document.getElementById("bigPicture");
    var commonPicture = document.getElementsByTagName("img");
    for(var i = 0;i<commonPicture.length;i++){
        commonPicture[i].onmouseover = function () {
            BigPicture.setAttribute("src",this.src);
        }
    }
}
window.onload = changeThePath;