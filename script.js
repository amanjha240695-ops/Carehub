// Debug: confirm script loading
console.log("[carehub] script.js loaded");
window.addEventListener('error', function (e) {
    console.error('[carehub] window error:', e.message, e.filename + ':' + e.lineno);
});

// Back to top code
const backToTop = document.querySelector(".foot-panel1");
console.log('[carehub] backToTop element:', backToTop);
if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ===========================================
//- Medicine Search
// ===========================================

const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-icon-1");
console.log('[carehub] searchInput:', !!searchInput, 'searchBtn:', !!searchBtn);

function searchMedicine() {
    if (!searchInput) return;
    const medicine = searchInput.value.trim();
    if (medicine === "") {
        alert("Please enter a medicine name.");
        return;
    }
    const url = `https://www.google.com/search?q=${encodeURIComponent(medicine)}+medicine`;
    window.open(url, "_blank");
}

if (searchBtn) searchBtn.addEventListener("click", searchMedicine);
if (searchInput) {
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            searchMedicine();
        }
    });
}


// ===========================================
// - Hero Button Animation
// ===========================================

const heroButtons = document.querySelector(".hero-buttons");
console.log('[carehub] heroButtons:', !!heroButtons);
window.addEventListener("load", () => {
    if (heroButtons) heroButtons.classList.add("show-buttons");
});

// ===========================================
// - Medicine Cards Scroll Animation
// ===========================================

const revealCards = document.querySelectorAll(".reveal");
console.log('[carehub] revealCards count:', revealCards.length);
if (revealCards && revealCards.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const cards = [...document.querySelectorAll(".reveal")];
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add("active");
                    }, index * 200);
                });
            }
        });
    }, {
        threshold: 0.2
    });

    revealCards.forEach((card) => observer.observe(card));
}

// ===========================================
// Hamburger Menu Toggle
// ===========================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
if (menuToggle && navMenu) {
    // Hide menu when page loads
    navMenu.classList.add("hide");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("hide");
    });
}


document.addEventListener("keydown", function (e) {
    if (e.ctrlKey) {
        const blockedKeys = ["a", "c", "x", "v", "s", "u"];
        if (blockedKeys.includes(e.key.toLowerCase())) {
            e.preventDefault();
        }
    }

    if (e.key === "F12") {
        e.preventDefault();
    }
});

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

document.addEventListener("selectstart", function (e) {
    e.preventDefault();
});

document.addEventListener("dragstart", function (e) {
    e.preventDefault();
});