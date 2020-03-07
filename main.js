imageSource = '';

console.log(imageSource);

function moveTo (siteLink)
{
    window.location.replace(siteLink);
}

function movePage (image)
{
    imageSource = image;
    console.log(image + 'this is the one in movePage');
    window.location.href = 'clothes.html';
}

function returnImageClothes ()
{
    document.getElementById("myImg").src = imageSource;
    console.log(imageSource);
}