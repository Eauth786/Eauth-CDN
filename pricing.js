document.getElementById('discount').addEventListener('change', function() {
  if (!this.checked) {
    document.getElementById('yearly').classList.add('d-none');
    document.getElementById('monthly').classList.remove('d-none');
  } else {
    document.getElementById('yearly').classList.remove('d-none');
    document.getElementById('monthly').classList.add('d-none');
  }
});
