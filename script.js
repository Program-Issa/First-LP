document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 見えたらactiveクラスを追加
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // 1度だけ発火させる
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
});
