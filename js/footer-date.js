// js/footer-date.js

document.addEventListener("DOMContentLoaded", function () {
    // Select the deploy date span
    const deployDateSpan = document.getElementById("deploy-date");

    if (deployDateSpan) {
        const today = new Date();

        // Format date as DD Mon YYYY, e.g., 03 Sep 2025
        const options = { day: "2-digit", month: "short", year: "numeric" };
        const formattedDate = today.toLocaleDateString("en-GB", options);

        // Set the date inside the footer span
        deployDateSpan.textContent = formattedDate;
    }
});
