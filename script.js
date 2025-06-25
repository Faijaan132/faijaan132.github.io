function addToWatchlist() {
  alert("Shadow has been added to your watchlist!");
}

function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}
// Make member divs clickable
document.querySelectorAll('.member').forEach(member => {
  member.addEventListener('click', () => {
    const link = member.getAttribute('data-link');
    if (link) {
      window.location.href = link;
    }
  });
});
