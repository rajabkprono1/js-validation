<input type="text" id="username" onfocus="validateOnFocus()">

<script>
function validateOnFocus() {
  let input = document.getElementById("username");
  if (input.value === "") {
    input.style.backgroundColor = "yellow";
    alert("Please enter your username");
  }
}
</script>
