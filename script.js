function encode() {
  const input = document.getElementById("inputText").value;
  const encoded = btoa(input);
  document.getElementById("outputText").value = encoded;
}

function decode() {
  const input = document.getElementById("inputText").value;
  try {
    const decoded = atob(input);
    document.getElementById("outputText").value = decoded;
  } catch (error) {
    document.getElementById("outputText").value = "Invalid encoded message!";
  }
}
