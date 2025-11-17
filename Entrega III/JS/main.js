// SPA

const pages = document.querySelectorAll(".page");
const menulinks = document.querySelectorAll("nav a[data-page]");

function openPage(pageId) {
    pages.forEach(p => p.style.display = "none");
    document.getElementById(pageId).style.display = "block";
    localStorage.setItem("currentPage", pageId);
}

menulinks.forEach(link => {
    link.addEventListener("click", () => {
        const page = link.getAttribute("data-page");
        openPage(page);
    });
});

const savedPage = localStorage.getItem("currentPage") || "inicio";
openPage(savedPage);

//ACESSIBILIDADE
//AUMENTAR FONTE

document.getElementById("aumentar-fonte").addEventListener("click", () => {
    let tamanhoAtual = parseFloat(localStorage.getItem("tamanhoFonte")) || 100;
    tamanhoAtual += 10;
    document.body.style.fontSize = tamanhoAtual + "%";
    localStorage.setItem("tamanhoFonte", tamanhoAtual);
});

//DIMINUIR FONTE

document.getElementById("diminuir-fonte").addEventListener("click", () => {
    let tamanhoAtual = parseFloat(localStorage.getItem("tamanhoFonte")) || 100;
    tamanhoAtual -= 10;

    if (tamanhoAtual < 60) tamanhoAtual = 60;

    document.body.style.fontSize = tamanhoAtual + "%";
    localStorage.setItem("tamanhoFonte", tamanhoAtual);
});

//RESETAR FONTE

document.getElementById("resetar-fonte").addEventListener("click", () => {
    document.body.style.fontSize = "100%";
    localStorage.setItem("tamanhoFonte", 100);
});

//ALTO CONTRASTE

document.getElementById("contraste").addEventListener("click", () => {
    document.body.classList.toggle("contraste");

    if (document.body.classList.contains("contraste")) {
        localStorage.setItem("contrasteAtivado", "true");
    } else {
        localStorage.removeItem("contrasteAtivado");
    }
});

window.addEventListener("load", () => {
    const tamanhoSalvo = localStorage.getItem("tamanhoFonte");
    if (tamanhoSalvo) {
        document.body.style.fontSize = tamanhoSalvo + "%";
    }

    if (localStorage.getItem("contrasteAtivado") === "true") {
        document.body.classList.add("contraste");
    }
});
