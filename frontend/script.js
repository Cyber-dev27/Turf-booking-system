const turfs = [
  {name: "Turf Arena 1", location: "Andheri", price: "₹800/hr", image: "https://source.unsplash.com/400x300/?football"},
  {name: "Green Kickz", location: "Bandra", price: "₹900/hr", image: "https://source.unsplash.com/400x300/?soccer"},
  {name: "Turf Side", location: "Borivali", price: "₹750/hr", image: "https://source.unsplash.com/400x300/?sports"},
  {name: "PlayZone", location: "Goregaon", price: "₹1000/hr", image: "https://source.unsplash.com/400x300/?grass-field"},
  {name: "SoccerHub", location: "Thane", price: "₹850/hr", image: "https://source.unsplash.com/400x300/?football-ground"},
  {name: "Urban Turf", location: "Mulund", price: "₹950/hr", image: "https://source.unsplash.com/400x300/?stadium"},
  {name: "PowerPlay", location: "Vile Parle", price: "₹920/hr", image: "https://source.unsplash.com/400x300/?futsal"},
  {name: "The Kickoff", location: "Chembur", price: "₹980/hr", image: "https://source.unsplash.com/400x300/?sports-ground"},
  {name: "Goal Rush", location: "Dadar", price: "₹870/hr", image: "https://source.unsplash.com/400x300/?soccer-field"},
  {name: "SkyTurf", location: "Malad", price: "₹1050/hr", image: "https://source.unsplash.com/400x300/?grass"},
  {name: "ProPlay", location: "Jogeshwari", price: "₹890/hr", image: "https://source.unsplash.com/400x300/?sport"},
  {name: "VictoryTurf", location: "Kandivali", price: "₹820/hr", image: "https://source.unsplash.com/400x300/?football-net"},
];

let currentIndex = 0;
const turfsPerPage = 3;

function renderTurfs() {
  const container = document.getElementById('turfContainer');
  container.innerHTML = '';
  const sliced = turfs.slice(currentIndex, currentIndex + turfsPerPage);
  sliced.forEach((turf) => {
    container.innerHTML += `
      <div class="turf-card">
        <img src="${turf.image}" alt="${turf.name}">
        <div class="turf-info">
          <h3>${turf.name}</h3>
          <p><strong>Location:</strong> ${turf.location}</p>
          <p><strong>Price:</strong> ${turf.price}</p>
          <button class="book-btn" onclick="openBookingForm('${turf.name}')">Book Now</button>
        </div>
      </div>
    `;
  });
}

function prevTurfs() {
  if (currentIndex >= turfsPerPage) {
    currentIndex -= turfsPerPage;
    renderTurfs();
  }
}

function nextTurfs() {
  if (currentIndex + turfsPerPage < turfs.length) {
    currentIndex += turfsPerPage;
    renderTurfs();
  }
}

let selectedTurf = '';
function openBookingForm(turfName) {
  selectedTurf = turfName;
  document.getElementById('bookingForm').style.display = 'block';
}

function confirmBooking() {
  const name = document.getElementById('userName').value;
  const dateTime = document.getElementById('bookingDateTime').value;

  if (!name || !dateTime) {
    alert('Please fill in all fields');
    return;
  }

  document.getElementById('bookingForm').style.display = 'none';
  alert(`Booking Confirmed for ${selectedTurf}!\nName: ${name}\nDate & Time: ${dateTime}`);
  triggerConfetti();
}

function triggerConfetti() {
  const confettiContainer = document.getElementById('confettiContainer');
  confettiContainer.innerHTML = '';
  for (let i = 0; i < 100; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    piece.style.animationDuration = `${2 + Math.random() * 3}s`;
    confettiContainer.appendChild(piece);
    setTimeout(() => piece.remove(), 4000);
  }
}

renderTurfs();