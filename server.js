<!DOCTYPE html>
<html>
<head>
  <title>OnlyThanks 🚀</title>
</head>
<body>

<h2>Send a Thanks Message 🚀</h2>

<input type="text" id="msg" placeholder="Type your message here" />
<button onclick="sendData()">Send</button>

<p id="status"></p>

<h3>Messages</h3>
<ul id="messages"></ul>

<script>
window.onload = loadMessages;

function loadMessages() {
  fetch("https://onlythankx-backend-clean-production.up.railway.app/api/thanks")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("messages");
      list.innerHTML = "";

      data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.message;
        list.appendChild(li);
      });
    })
    .catch(err => {
      document.getElementById("status").textContent = "Error loading messages";
      console.error(err);
    });
}

function sendData() {
  const message = document.getElementById("msg").value;

  fetch("https://onlythankx-backend-clean-production.up.railway.app/api/thanks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("status").textContent = "Sent: " + data.message;
      document.getElementById("msg").value = "";
      loadMessages();
    })
    .catch(err => {
      document.getElementById("status").textContent = "Send failed";
      console.error(err);
    });
}
</script>

</body>
</html>