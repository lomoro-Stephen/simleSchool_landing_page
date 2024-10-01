(function () {
    const menu = document.querySelector(".nav-bar-mobile");
    const menuBars = document.getElementById("menuBars");
    const closeCross = document.getElementById("close");
    menuBars.addEventListener("click", () => {
        menu.classList.add("showMobileNav");
        checking();
    });

    closeCross.addEventListener("click", () => {
        menu.classList.remove("showMobileNav");
        checking();
    });

    function checking() {
        if (menu.classList.contains("showMobileNav")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }

})();