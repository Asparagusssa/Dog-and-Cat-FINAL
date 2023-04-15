window.onscroll = function () {
    var scrolled = window.pageYOffset;
    console.log(scrolled);
    if (scrolled > 60) {
        var ulti = document.getElementById('header');
        ulti.style.background = "black";
    }
    if (scrolled < 60) {
        var ulti = document.getElementById('header');
        ulti.style.background = "transparent";
    }
}

// const modalDonate = document.getElementById("modalDonate");

// const button = document.querySelector('.don');
// button.addEventListener('click', () => {
//     const element = document.querySelector('#modalDonate');
//     element.style.visibility = 'visible';
//     element.style.opacitiy= '0';
// });



