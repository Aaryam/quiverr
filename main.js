imageSource = '';

console.log(imageSource);

function moveTo (siteLink)
{
    window.location.replace(siteLink);
}

function movePage (site)
{
    window.location.href = site;
}

function returnImageClothes ()
{
    document.getElementById("myImg").src = imageSource;
    console.log(imageSource);
}

/* Commands to commit */

/* 1. git add * */
/* 2. git commit -m "msg" */
/* 3. git push origin master */