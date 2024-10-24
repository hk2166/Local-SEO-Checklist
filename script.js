// script.js
document.addEventListener('DOMContentLoaded', function() {
  const checklistForm = document.getElementById('seo-checklist');
  const progressBar = document.getElementById('progress');
  const progressText = document.getElementById('progress-text');

  // Track progress based on checkboxes
  checklistForm.addEventListener('change', function() {
    const totalItems = checklistForm.querySelectorAll('input[type="checkbox"]').length;
    const checkedItems = checklistForm.querySelectorAll('input[type="checkbox"]:checked').length;

    const progressPercentage = Math.floor((checkedItems / totalItems) * 100);
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `${progressPercentage}% completed`;

    // Add dynamic tips
    const tips = document.querySelector('.dynamic-tips');
    if (progressPercentage > 50) {
      tips.textContent = "You're doing great! Focus on managing reviews to boost your local visibility!";
    } else {
      tips.textContent = "Keep going! Optimizing Google My Business is the foundation of good local SEO.";
    }
  });
});
