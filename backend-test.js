console.log("Testing booking storage...");

let booking = {
  room: "Deluxe Room",
  total: 3000
};

localStorage.setItem("testBooking", JSON.stringify(booking));

let data = JSON.parse(localStorage.getItem("testBooking"));

if (data.room === "Deluxe Room") {
  console.log("Backend test passed");
} else {
  console.log("Backend test failed");
}