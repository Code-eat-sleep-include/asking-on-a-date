document.addEventListener("DOMContentLoaded", function(){
    var yesButton = document.querySelector('.yes');
    var noButton = document.querySelector('.no');
    var imageElement = document.querySelector('.initialimg img');
    var textElement = document.querySelector('.initialimg h2');
    yesButton.addEventListener('click', function(){
        imageElement.src ='601e200dae8c283f67930f3b5122fa72.gif';
        textElement.textContent='YAYY, SEE YOU TOMORROW!';
    });
    noButton.addEventListener('mouseover', function(){
        imageElement.src ='cute-anime-boy-6.gif';
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var randomX = Math.floor(Math.random() * (windowWidth - 25));
        var randomY = Math.floor(Math.random() * (windowHeight - 15));
        noButton.style.position = 'absolute';
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
    });
});