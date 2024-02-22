const button = document.querySelector("button");

function showNotification() {
  if (Notification.permission === "granted") {
    new Notification("Hello, world!");
  }
}

button.addEventListener("click", () => {
  Notification.requestPermission().then(function (permission) {
    if (permission !== "granted") {
      alert("You need to grant permission to receive notifications");
    }
  });

  setTimeout(() => {
    showNotification();
  }, 15000);
});
