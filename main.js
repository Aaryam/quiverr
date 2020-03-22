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
    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("lastname", img);
        console.log(localStorage.getItem("lastname"));
        // Retrieve
        
    } else {
        document.getElementById("clothesImg").alt = "Sorry, your browser does not support local storage";
    }
}

function loadClothes ()
{
    document.getElementById("clothesImg").src = localStorage.getItem("lastname");
}

/* Commands to commit */

/* 1. git add * */
/* 2. git commit -m "msg" */
/* 3. git push origin master */