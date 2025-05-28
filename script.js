
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Scroll-to-top button functionality
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerHTML = "↑";
scrollTopBtn.id = "scrollTopBtn";
scrollTopBtn.style.position = "fixed";
scrollTopBtn.style.bottom = "30px";
scrollTopBtn.style.right = "30px";
scrollTopBtn.style.display = "none";
scrollTopBtn.style.background = "#007bff";
scrollTopBtn.style.color = "#fff";
scrollTopBtn.style.border = "none";
scrollTopBtn.style.borderRadius = "50%";
scrollTopBtn.style.width = "40px";
scrollTopBtn.style.height = "40px";
scrollTopBtn.style.fontSize = "24px";
scrollTopBtn.style.cursor = "pointer";
scrollTopBtn.style.zIndex = "1000";

document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});
