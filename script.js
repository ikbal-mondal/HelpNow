
    let heartCount = 0;
    let coinCount = 100;
    let copyCount = 0;

    const heartCountEl = document.getElementById("heartCount");
    const coinCountEl = document.getElementById("coinCount");
    const copyCountEl = document.getElementById("copyCount");
    const callHistoryEl = document.getElementById("callHistory");
    const clearHistoryBtn = document.getElementById("clearHistoryBtn");

    // Heart button logic
    document.querySelectorAll(".heart-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        heartCount++;
        heartCountEl.textContent = heartCount;
        btn.textContent = "❤️";
      });
    });

    // Copy button logic
    document.querySelectorAll(".copy-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const card = e.target.closest(".service-card");
        const serviceName = card.querySelector(".service-name").textContent;
        const serviceNumber = card.querySelector(".service-number").textContent;

        navigator.clipboard.writeText(serviceNumber);
        alert(`Copied ${serviceName} number: ${serviceNumber}`);

        copyCount++;
        copyCountEl.textContent = copyCount;
      });
    });

    // Call button logic
    document.querySelectorAll(".call-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const card = e.target.closest(".service-card");
        const serviceName = card.querySelector(".service-name").textContent;
        const serviceNumber = card.querySelector(".service-number").textContent;

        if (coinCount < 20) {
          alert("Not enough coins to make a call!");
          return;
        }

        coinCount -= 20;
        coinCountEl.textContent = coinCount;

        const now = new Date();
        const time = now.toLocaleTimeString();

        alert(`Calling ${serviceName} at ${serviceNumber}`);

        const li = document.createElement("li");
        li.className = "flex justify-between items-center bg-gray-50 px-3 py-2 rounded shadow";
        li.innerHTML = `
          <div>
            <h2 class="font-bold">${serviceName}</h2>
            <p class="text-green-700 font-semibold">${serviceNumber}</p>
          </div>
          <span class="text-gray-500 text-sm">${time}</span>
        `;
        callHistoryEl.prepend(li);
      });
    });

    // Clear history
    clearHistoryBtn.addEventListener("click", () => {
      callHistoryEl.innerHTML = "";
    });
 