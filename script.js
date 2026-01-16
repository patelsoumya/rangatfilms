// Show content after skeleton
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("skeleton").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  }, 1000); // adjust delay
});

// Tabs
function openTab(evt, tabId) {
  document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
  document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));

  evt.target.classList.add("active");
  document.getElementById(tabId).classList.add("active");
}
