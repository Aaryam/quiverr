imageSource = '';

console.log(imageSource);

function moveTo(siteLink) {
    window.location.replace(siteLink);
}

function movePage(site) {
    window.location.href = site;
}

function moveClothes(img) {
    window.location.href = '../clothes.html';
    // Check browser support
    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("clothesImage", img);
        // Retrieve
        document.getElementById("clothesImg").innerHTML = localStorage.getItem("clothesImage");
    } else {
        document.getElementById("clothesImg").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

/* Commands to commit */

/* 1. git add * */
/* 2. git commit -m "msg" */
/* 3. git push origin master */