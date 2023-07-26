// Get all buttons
      const buttons = document.querySelectorAll('.nav-item');

      // Add click event listener to each button
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          // Remove "active" class from all buttons
          buttons.forEach(button => {
            button.classList.remove('active');
          });

          // Add "active" class to clicked button
          button.classList.add('active');
        });
      });

      const switchElement = document.getElementById("switch-2");
      const divElement1 = document.getElementById("monthly");
      const divElement2 = document.getElementById("yearly");
    
        // Check if there is a saved state in localStorage
  const savedState = localStorage.getItem("switchState");
  if (savedState === "checked") {
    switchElement.checked = true;
    divElement1.style.display = "none";
    divElement2.style.display = "block";
  } else {
    switchElement.checked = false;
    divElement1.style.display = "block";
    divElement2.style.display = "none";
  }

    // Check if there is a saved state in localStorage
    switchElement.checked = true;
    divElement1.style.display = "none";
    divElement2.style.display = "block";

  switchElement.addEventListener("change", function() {
    if (this.checked) {
      divElement1.style.display = "none";
      divElement2.style.display = "block";
      localStorage.setItem("switchState", "checked");
    } else {
      divElement1.style.display = "block";
      divElement2.style.display = "none";
      localStorage.setItem("switchState", "unchecked");
    }
  });
    var currentYear = new Date().getFullYear();
  document.getElementById("year").textContent = currentYear;
