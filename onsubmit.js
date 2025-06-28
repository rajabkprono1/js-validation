<form onsubmit="return validateForm()">
  <input type="text" id="email" required>
  <input type="submit" value="Submit">
</form>

<script>
function validateForm() {
  let email = document.getElementById("email").value;
  if (!email.includes("@")) {
    alert("Please enter a valid email address");
    return false;
  }
  return true;
}
</script>
