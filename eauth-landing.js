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

      // Check if checkbox is initially checked
      if (switchElement.checked) {
        divElement1.style.display = "none";
        divElement2.style.display = "block";
      } else {
        divElement1.style.display = "block";
        divElement2.style.display = "none";
      }
      
      // Add event listener to checkbox change event
      switchElement.addEventListener("change", function() {
        if (this.checked) {
          divElement1.style.display = "none";
          divElement2.style.display = "block";
        } else {
          divElement1.style.display = "block";
          divElement2.style.display = "none";
        }
      });

    var currentYear = new Date().getFullYear();
  document.getElementById("year").textContent = currentYear;
