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