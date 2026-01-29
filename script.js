// Player Select Alert
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    if (!btn.classList.contains("generate-btn")) {
      alert("✅ Player Added Successfully!");
    }
  });
});

// Search Feature
document.getElementById("searchInput").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  let cards = document.querySelectorAll(".player-card");

  cards.forEach(card => {
    let name = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = name.includes(filter) ? "block" : "none";
  });
});

// Auto Team Generator
function generateTeam() {
  document.getElementById("teamResult").innerHTML =
    "🚀 AI Generated Team: Kohli (C), Rohit, Bumrah, Hardik, Jadeja + More!";
}
