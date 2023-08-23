// Toasts a default alert
      function toastAlert(title, desc) {
        // Built-in function
        halfmoon.initStickyAlert({
            content: desc,      // Required, main content of the alert, type: string (can contain HTML)
            title: title      // Optional, title of the alert, default: "", type: string
        })
    }
    
    document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the shownDiv value from localStorage
  const shownDiv = localStorage.getItem('shownDiv');

  // Show the previously shown div, or the first div if shownDiv is null
  showDiv(shownDiv || 'manage-apps');

  // Other JavaScript code here
  var messageReport = "<?= $messageReport ?>";
    if (messageReport != "") {
         toastAlert(messageReport, "<?= $messageDescription ?>");
    }
});
    
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
  const divs = document.querySelectorAll('.tab');
  divs.forEach(div => {
    if (div.id === id) {
      div.classList.remove('hidden-tab');
      localStorage.setItem('shownDiv', id);
    } else {
      div.classList.add('hidden-tab');
    }
  });
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

function confirmButton(buttonName, buttonValue, buttonText, titleText) {
            document.getElementById("confirmAlertTitle").innerHTML = titleText;
            
            if (buttonValue == '') {
                var icon = 'fa-refresh';
            }
            else {
                var icon = 'fa-trash-o'
            }
            var confirmButton = document.getElementById("confirmButton");
            confirmButton.setAttribute("name", buttonName);
            confirmButton.setAttribute("value", buttonValue);
            confirmButton.innerHTML = '<i class="fa '+icon+'" aria-hidden="true"></i> ' + buttonText;
        }
        
        function changeKeyType() {
  const select = document.getElementById("selectKeyType");
  
  const userCustomKey_label = document.getElementById("userCustomKey_label");
  const userCustomKey = document.getElementById("input_Customkey");
  
  const keyLength_label = document.getElementById("keyLength-label");
  const input_length = document.getElementById("input-length");
  const keyQuantity = document.getElementById("keyQuantity-label");
  const input_quantity = document.getElementById("input-quantity");

  if (select.value === "random") {
      
    keyLength_label.style.display = "block";
    input_length.style.display = "block";
    keyQuantity.style.display = "block";
    input_quantity.style.display = "block";
    
    userCustomKey_label.style.display = "none";
    userCustomKey.style.display = "none";
    userCustomKey.value = "";
    
  } else if (select.value === "custom") {
      
    keyLength_label.style.display = "none";
    input_length.style.display = "none";
    keyQuantity.style.display = "none";
    input_quantity.style.display = "none";
    
    userCustomKey_label.style.display = "block";
    userCustomKey.style.display = "block";
    
  }
}

const searchInput = document.getElementById('search-users');
const table = document.getElementById('table-users');
const rows = table.getElementsByTagName('tr');

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();

  for (let i = 1; i < rows.length; i++) {
    const username = rows[i].querySelector('#username').textContent.toLowerCase();

    if (username.includes(searchTerm)) {
      rows[i].style.display = '';
    } else {
      rows[i].style.display = 'none';
    }
  }
});
