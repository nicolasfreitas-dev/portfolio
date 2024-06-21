window.addEventListener("scroll", () => {
    let navbar = document.querySelector("#navbar");

    const scrollHeight = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
        navbar.style.transition = "all .9s ease-out";
        navbar.style.scrollBehavior = "smooth";
        navbar.style.scrollSnapStop = "always";
    }
});

