// ================= LOGIN =================
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "user" && pass === "1234") {
    localStorage.setItem("loggedIn", "true");
    alert("Login successful");
    window.location.href = "booking.html";
  } else {
    alert("Invalid credentials");
  }
}

// ================= ADMIN =================
function adminLogin() {
  window.location.href = "admin.html";
}

// ================= LOGOUT =================
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

// ================= SIDEBAR =================
function toggleSidebar() {
  let sidebar = document.getElementById("sidebar");

  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-200px";
  } else {
    sidebar.style.left = "0px";
  }
}

// ================= ROOM DATA =================
let rooms = [
  { name: "Deluxe Room", price: 3000, image: "images/room1.jpg", type: "Deluxe" },
  { name: "Suite Room", price: 5000, image: "images/room2.jpg", type: "Suite" },
  { name: "Luxury Room", price: 8000, image: "images/room3.jpg", type: "Luxury" },
  { name: "Royal Suite", price: 10000, image: "images/room4.jpg", type: "Luxury" },
  { name: "Executive Room", price: 4000, image: "images/room5.jpg", type: "Deluxe" },
  { name: "Premium Suite A", price: 6000, image: "images/room6.jpg", type: "Luxury" },
  { name: "Economy Room A", price: 2000, image: "images/room7.jpg", type: "Deluxe" },
  { name: "Premium Suite B", price: 15000, image: "images/room8.jpg", type: "Luxury" },
  { name: "Economy Room B", price: 2500, image: "images/room9.jpg", type: "Suite" },
  { name: "Premium Deluxe", price: 12000, image: "images/room10.jpg", type: "Deluxe" },
  { name: "Executive Suite", price: 7000, image: "images/room11.jpg", type: "Suite" }
];

// ================= SEARCH =================
function searchRooms() {
  let type = document.getElementById("roomType").value;
  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;

  if (!checkin || !checkout) {
    alert("Please select check-in and check-out dates");
    return;
  }

  let date1 = new Date(checkin);
  let date2 = new Date(checkout);

  let diffTime = date2 - date1;
  let days = diffTime / (1000 * 60 * 60 * 24);

  if (days <= 0) {
    alert("Check-out must be after check-in");
    return;
  }

  localStorage.setItem("searchType", type);
  localStorage.setItem("days", days);
  localStorage.setItem("checkin", checkin);
  localStorage.setItem("checkout", checkout);

  window.location.href = "booking.html";
}

// ================= LOAD ROOMS =================
function loadRooms() {
  let resultDiv = document.getElementById("roomResults");
  if (!resultDiv) return;

  let type = localStorage.getItem("searchType") || "all";
  let days = parseInt(localStorage.getItem("days")) || 1;

  resultDiv.innerHTML = "";

  let filtered = rooms.filter(room => {
    return type === "all" || room.type === type;
  });

  filtered.forEach(room => {
    let total = room.price * days;

    let card = `
      <div class="card">
        <img src="${room.image}">
        <h3>${room.name}</h3>
        <p>₹${room.price} / night</p>
        <p><strong>${days} days = ₹${total}</strong></p>
        <button onclick="bookRoom('${room.name}', ${total})">Book Now</button>
      </div>
    `;

    resultDiv.innerHTML += card;
  });
}

// ================= BOOK ROOM =================
function bookRoom(room, total) {
  localStorage.setItem("room", room);
  localStorage.setItem("totalPrice", total);

  // Redirect to details page
  window.location.href = "details.html";
}

// ================= PAYMENT REDIRECT =================
// (IMPORTANT FIX — this makes Reserve button work if linked to app.js)
function goToPayment() {
  window.location.href = "payment.html";
}

// ================= AUTO LOAD =================
window.onload = function () {
  loadRooms();
};