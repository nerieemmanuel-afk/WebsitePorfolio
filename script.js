const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
  const root = document.documentElement;

  if(root.getAttribute("data-theme")==="dark"){
    root.setAttribute("data-theme","light");
    btn.textContent="🌙";
  } else {
    root.setAttribute("data-theme","dark");
    btn.textContent="☀️";
  }
});