//init AOS
AOS.init();

//show button when scroll down 50px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("top-btn").style.display = "block";
    } else {
        document.getElementById("top-btn").style.display = "none";
    }
}

// scroll to top when button pressed
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
