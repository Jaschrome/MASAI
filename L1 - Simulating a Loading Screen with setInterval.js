function Loading() {
  const interval = setInterval(() => {
    console.log("Loading...");
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    console.log("Loaded successfully!");
  }, 5000);
}

Loading();
