menuBurger(); // trigger the burger button menu
dropDown("color-change", ".dropdown-menu-color"); // trigger the color change
dropDown("taille", ".dropdown-menu-taille"); // trigger the size change
dropDown("font-change", ".dropdown-menu-font"); // trigger the font change
handleGrey(); // trigger the grey mode change

/* buttons menu sizes change */

const btnsSizes = document.querySelectorAll("ul.dropdown-menu-taille > li > button");

const valuesSizes = ["8px", "12px", "16px", "20px", "24px", "26px"];

/* buttons funtions change */

changeSize(valuesSizes[0], btnsSizes[0], "50px");
changeSize(valuesSizes[1], btnsSizes[1], "75px");
changeSize(valuesSizes[2], btnsSizes[2]);
changeSize(valuesSizes[3], btnsSizes[3]);
changeSize(valuesSizes[4], btnsSizes[4]);
changeSize(valuesSizes[5], btnsSizes[5]);

/** Menu burger **/

function menuBurger() {
    const burger = document.querySelector("#burger");
    burger.addEventListener("click", () => {
        openBurger();
    });
    burger.addEventListener("keydown", (event) => {
        if (event.keyCode  === 13) {
            openBurger();
       f }
    });
}

function openBurger() {
    const accessibility = document.querySelector(".accessibilité");
    const nav = document.querySelector("header > nav > ul.menu");
    if (accessibility.classList.contains("block")) {
        accessibility.classList.remove("block");
        accessibility.style.display = "none";
        nav.style.display = "none";
} else {
        accessibility.classList.add("block");
        accessibility.style.display = "flex";
        nav.style.display = "inline";
    }
}

/** Menu burger child dropdown **/

function dropDown(id, option) {
    const dropdown = document.querySelector(option);
    const dropdownColor = document.getElementById(id);
    dropdownColor.addEventListener("click", () => {
        if (dropdownColor.classList.contains("on")) {
            dropdown.style.display = "flex";
            dropdown.style.position = "absolute";
            dropdown.style.top = "50px";
            dropdown.style.left = "-25px";
            dropdown.style.padding = "unset";
            dropdownColor.classList.remove("on");
        } else {
            dropdown.style.display = "none";
            dropdownColor.classList.add("on");
        }
    });
}

/* Size change */

function changeSize(size, button, lineHieght = "150px") {
    const html = document.getElementsByTagName("html")[0];
    const paragraphe = document.querySelector(".paragraphe_accueil");
    button.addEventListener("click", () => {
        html.style.fontSize = size;
        paragraphe.style.lineHeight = lineHieght;
    });
}

/* Niveau de gris */

function handleGrey() {
    const btn = document.getElementById("grey-screen");
    const body = document.querySelector("body");
    btn.addEventListener("click", () => {
        if (body.classList.contains("grey")) {
            body.style.filter = "unset";
            body.classList.remove("grey");
        } else {
            body.style.filter = "grayscale(100%)";
            body.classList.add("grey");
        }
    });
}

/* Change the font */

function changeFont(police = "Verdana") {
    const body = document.getElementById("grey");
    const container = document.querySelector(".container");
    if (police === "LexieReadable") {
        body.classList.add("LexieReadable");
        body.classList.remove("Luciole");
        body.removeAttribute("style");
    } else if (police === "Luciole") {
        body.classList.remove("LexieReadable");
        body.classList.add("Luciole");
        body.removeAttribute("style");
    } else {
        body.style.fontFamily = police;
        body.classList.remove("LexieReadable");
        body.classList.remove("Luciole");
    }
}

document.getElementById("Luciole").addEventListener("click", function() {
    changeFont("Luciole");
});

document.getElementById("LexieReadable").addEventListener("click", function() {
    changeFont("LexieReadable");
});

document.getElementById("Verdana").addEventListener("click", function() {
    changeFont();
});

/* Change color page */

changeColorPage("noirBlanc", "#fff", "#000", "#0100A9", true);
changeColorPage("noirJaune", "#FAF1BC", "#000000", "#0100A9", true);
changeColorPage("brunSaumon", "#FFBF86", "#0100A9", "#64001D", true);
changeColorPage("mauveBlanc", "#FFFFFF", "#4D00FF", "#64001D", true);
changeColorPage("blancBleu", "#002639", "#FFFFFF", "#FFE200");
changeColorPage("jauneBleu", "#002639", "#FFE200", "#FFFFFF");
changeColorPage("cielBleu", "#002639", "#82FFFF", "#FFFFFF");
changeColorPage("limeBleu", "#002639", "#00FF00", "#FFFFFF");
changeColorPage("blancNoir", "#000000", "#FFFFFF", "#FFE200");
changeColorPage("jauneNoir", "#000000", "#FFE200", "#FFFFFF");
changeColorPage("cielNoir", "#000000", "#82FFFF", "#FFFFFF");
changeColorPage("limeNoir", "#000000", "#00FF00", "#FFFFFF");

function changeColorPage(nameColor, backColor, frontColor, secondaryColor, flag = false) {
    const btns = document.querySelectorAll(".dropdown-menu-color > li > button");
    const body = document.getElementById("grey");
    const links = document.querySelectorAll("a:not(.lien-cards):not(.damier-link)");  
    const textes = document.getElementsByTagName("p");
    const figcaption = document.querySelector("figcaption");
    const h1 = document.getElementsByTagName("h1");
    const h2 = document.getElementsByTagName("h2");
    const h3 = document.querySelectorAll("h3:not(.daminer-original-color)");
    const h4 = document.querySelectorAll("h4:not(.daminer-original-color)");
    const h5 = document.getElementsByTagName("h5");
    const h6 = document.getElementsByTagName("h6");
    btns.forEach(function(btn) {
        btn.addEventListener("click", () => {
        if(btn.classList.contains(nameColor)) {
            logoColor(flag);
            body.style.background = backColor;
            figcaption.style.color = frontColor;
            Array.from(links).forEach((link) => {
                link.style.color = secondaryColor;
                link.addEventListener("mouseenter", () => {
                    link.style.color = backColor;
                });
                link.addEventListener("mouseleave", () => {
                    link.style.color = secondaryColor;
                });
            });
            Array.from(textes).forEach((text) => {
                text.style.color = frontColor;
            });
            Array.from(h1).forEach((text) => {
                text.style.color = frontColor;
            });
            Array.from(h2).forEach((text) => {
                text.style.color = frontColor;
            });
            Array.from(h3).forEach((text) => {
                text.style.color = frontColor;
            });
            Array.from(h4).forEach((text) => {
                text.style.color = frontColor;
            });
            Array.from(h5).forEach((text) => {
                text.style.color = frontColor;
            });
            Array.from(h6).forEach((text) => {
                text.style.color = frontColor;
            });
        }
    });
    });
}

/* logo */

function logoColor(boolean) {
    const s1 = document.querySelectorAll(".s1");
    const s3 = document.querySelectorAll(".s3");
    const s4 = document.querySelectorAll(".s4");
    const s6 = document.querySelectorAll(".s6");
    const s8 = document.querySelectorAll(".s8");
    const s13 = document.querySelectorAll(".s13");
    const s14 = document.querySelectorAll(".s14");
    const s15 = document.querySelectorAll(".s15");
    const s19 = document.querySelectorAll(".s19");
    if (boolean) {
        s1.forEach((s) => {
            s.style.fill = "#000";
        })
        s3.forEach((s) => {
            s.style.fill = "#000";
        })
        s4.forEach((s) => {
            s.style.fill = "#000";
        })
        s6.forEach((s) => {
            s.style.fill = "#000";
        })
        s8.forEach((s) => {
            s.style.fill = "#000";
        })
        s13.forEach((s) => {
            s.style.fill = "#000";
        })
        s14.forEach((s) => {
            s.style.fill = "#000";
        })
        s15.forEach((s) => {
            s.style.fill = "#000";
        })
        s19.forEach((s) => {
            s.style.fill = "#000";
        })
    } else {
        s1.forEach((s) => {
            s.style.fill = "#fff";
        })
        s3.forEach((s) => {
            s.style.fill = "#fff";
        })
        s4.forEach((s) => {
            s.style.fill = "#fff";
        })
        s6.forEach((s) => {
            s.style.fill = "#fff";
        })
        s8.forEach((s) => {
            s.style.fill = "#fff";
        })
        s13.forEach((s) => {
            s.style.fill = "#fff";
        })
        s14.forEach((s) => {
            s.style.fill = "#fff";
        })
        s15.forEach((s) => {
            s.style.fill = "#fff";
        })
        s19.forEach((s) => {
            s.style.fill = "#fff";
        })
    }
    return;
}