function startNavigation() {
    const campus = document.getElementById('campus').value;
    const building = document.getElementById('building').value;
    const current = document.getElementById('current').value;
    const destination = document.getElementById('destination').value;
  
    if (!campus || !building || !current || !destination) {
      alert("Please fill out all fields.");
      return;
    }
  
    // You can store selections in localStorage if needed
    window.location.href = "navigate.html";

  }
  