console.log("Frontend test running...");

function testLogin() {
  let user = "user";
  let pass = "1234";

  if (user === "user" && pass === "1234") {
    console.log("Login test passed");
  } else {
    console.log("Login test failed");
  }
}

testLogin();