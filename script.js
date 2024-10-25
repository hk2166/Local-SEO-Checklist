const totalItems = 8;
let completedItems = 0;

function updateProgress() {
    const progressPercentage = (completedItems / totalItems) * 100;
    document.getElementById("progress-bar").style.width = progressPercentage + "%";
    document.getElementById("progress-text").innerText = `${Math.round(progressPercentage)}% complete`;
}

function checkTask(taskId) {
    const checkbox = document.getElementById(taskId);
    if (checkbox.checked) {
        completedItems += 1;
    } else {
        completedItems -= 1;
    }
    updateProgress();
}

function showTips() {
    const tipsSection = document.getElementById("tips-section");
    const tipsContent = document.getElementById("tips-content");
    tipsContent.innerHTML = "";  // Clear any previous tips

    // Check each item and provide feedback if unchecked
    const tasks = [
        { id: "gmb", tip: "Claim and optimize your Google My Business profile to boost visibility in local searches." },
        { id: "local-keywords", tip: "Use local keywords in your website content to rank better for location-specific searches." },
        { id: "nap", tip: "Ensure that your business name, address, and phone number (NAP) are consistent across all online listings." },
        { id: "reviews", tip: "Managing and responding to reviews can increase trust and improve your local ranking." },
        { id: "local-links", tip: "Build backlinks from local websites and directories to strengthen your local presence." },
        { id: "website-mobile", tip: "A mobile-friendly website is essential for local SEO, as many users search on mobile devices." },
        { id: "social-media", tip: "Optimize your social media profiles and link them to your website to drive local engagement." },
        { id: "local-schema", tip: "Implementing local schema markup helps search engines understand your business location and services." }
    ];

    // Loop through tasks to find unchecked ones and display corresponding tips
    let hasUnchecked = false;
    tasks.forEach(task => {
        const checkbox = document.getElementById(task.id);
        if (!checkbox.checked) {
            hasUnchecked = true;
            const tip = document.createElement("p");
            tip.innerText = task.tip;
            tipsContent.appendChild(tip);
        }
    });

    if (!hasUnchecked) {
        tipsContent.innerHTML = "<p>Great job! You've completed all the recommended tasks for local SEO.</p>";
    }

    tipsSection.style.display = "block";
}

updateProgress();  // Initialize progress on page load
