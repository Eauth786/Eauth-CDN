var currentYear = new Date().getFullYear();
  document.getElementById("year").textContent = currentYear;

// Get all buttons
      const buttons = document.querySelectorAll('.tab-nav');

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

      const search = document.getElementById('search');
      const tabs = document.querySelectorAll('.sidebar-link');

      search.addEventListener('keyup', () => {
        const searchTerm = search.value.toLowerCase();
        tabs.forEach(tab => {
          const tabText = tab.textContent.toLowerCase();
          
          if (tabText.includes(searchTerm)) {
            tab.style.display = 'flex';
          } else {
            tab.style.display = 'none';
          }
        });
      });

      const input = document.getElementById("cappi");
      const button = document.getElementById("cappb");
    
      input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          button.click();
        }
      });

      function showDiv(id) {
        var divs = document.getElementsByClassName("tab");
        for (var i = 0; i < divs.length; i++) {
          if (divs[i].id == id) {
            divs[i].style.display = "block";
            localStorage.setItem("shownDiv", id);
          } else {
            divs[i].style.display = "none";
          }
        }
      }

      function copyClipboard(id) {
        // Get the text field
        var copyText = document.getElementById(id);
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
      }
      
      function copySpan(id) {
          const text = document.getElementById(id).innerText;
          navigator.clipboard.writeText(text)
          .then(() => {
              console.log("Text copied to clipboard");
          })
          .catch((error) => {
              console.error("Error copying text: ", error);
          });
      }
      
      // Toasts a default alert
      function toastAlert(title, desc) {
        // Built-in function
        halfmoon.initStickyAlert({
            content: desc,      // Required, main content of the alert, type: string (can contain HTML)
            title: title      // Optional, title of the alert, default: "", type: string
        })
    }
    
    var messageReport = "<?= $messageReport ?>";
    if (messageReport != "") {
         toastAlert(messageReport, "<?= $messageDescription ?>");
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === '/') {
          event.preventDefault();
          document.getElementById('search').focus();
        }
      });
      
        const select = document.getElementById("input-about-expiration");
  const customInput = document.getElementById("input-expire-duration");

  select.addEventListener("change", function() {
    if (select.value === "Lifetime") {
      customInput.readOnly = true;
    } else {
      customInput.readOnly = false;
    }
  });
      
      window.onload = function() {
        var shownDiv = localStorage.getItem("shownDiv");
        if (shownDiv) {
            showDiv(shownDiv);
            // Add "active" class to button that corresponds to shown div
            var button = document.getElementById(shownDiv);
        }
        else {
            var button = document.getElementById('manage-apps');
        }
        button.classList.add("active");
      };
