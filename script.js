function changeImage1() {

    const img = document.getElementById("hp-1");

    const currentSrc = img.getAttribute("src");

    if (currentSrc === "imagens/hp-1.jpg") {
        img.setAttribute("src", "imagens/hp-2.jpg");

        img.setAttribute("alt", "harry potter e a câmara secreta");
    }

    else {
        img.setAttribute("src", "imagens/hp-1.jpg");

        img.setAttribute("alt", "harry potter e a pedra filosofal");
    }
}