// JavaScript for managing checklist progress and feedback
const totalItems = 8;
let completedItems = 0;

function updateProgress() {
    const progressPercentage = (completedItems / totalItems) * 100;
    document.getElementById("progress-bar").style.width = progressPercentage + "%";
    document.getElementById("progress-text").innerText = `${Math.round(progressPercentage)}% complete`;
}

function checkTask(taskId) {
    const checkbox = document.getElementById(taskId);
    const feedback = document.getElementById(`${taskId}-feedback`);

    if (checkbox.checked) {
        completedItems += 1;
        feedback.innerText = "";  // Clear feedback if task is completed
    } else {
        completedItems -= 1;
        // Provide feedback for unchecked items
        switch (taskId) {
            case 'gmb':
                feedback.innerText = "Claiming and optimizing your Google My Business profile is crucial for local visibility.";
                break;
            case 'local-keywords':
                feedback.innerText = "Including local keywords helps you rank better for location-specific searches.";
                break;
            case 'nap':
                feedback.innerText = "Ensure your business name, address, and phone number are consistent across all platforms.";
                break;
            case 'reviews':
                feedback.innerText = "Managing reviews helps build trust and improve your local search ranking.";
                break;
            case 'local-links':
                feedback.innerText = "Backlinks from local sources boost your credibility and search presence.";
                break;
            case 'website-mobile':
                feedback.innerText = "A mobile-friendly website is essential as most searches are done on mobile devices.";
                break;
            case 'social-media':
                feedback.innerText = "Optimized social media profiles can drive local engagement and improve SEO.";
                break;
            case 'local-schema':
                feedback.innerText = "Local schema markup helps search engines understand your business better.";
                break;
            default:
                feedback.innerText = "";
        }
    }

    updateProgress();
}

updateProgress(); // Initialize progress on page load
