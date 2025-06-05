const jobs = [
  "Social Media Manager",
  "Content Creator",
  "Social Media Strategist",
  "Influencer Marketing Coordinator",
  "Social Media Analyst",
  "Video Editor (Reels & Shorts)",
  "Community Manager",
  "TikTok Content Specialist",
  "Instagram Growth Expert",
  "YouTube Channel Manager",
  "Social Media Copywriter",
  "Social Media Ads Specialist"
];

const descriptions = [
  "Oversee content planning and platform strategy.",
  "Create videos, graphics, and written content.",
  "Develop comprehensive strategies for all platforms.",
  "Manage influencer outreach and campaigns.",
  "Analyze metrics and improve engagement rates.",
  "Edit short-form content for various social apps.",
  "Engage with audiences and moderate communities.",
  "Create viral content tailored for TikTok.",
  "Plan strategies to grow and engage Instagram followers.",
  "Manage uploads, tags, and content for YouTube channels.",
  "Write catchy captions and social post copy.",
  "Manage ad campaigns across Meta and LinkedIn."
];

const container = document.querySelector(".job-listings");

jobs.forEach((title, index) => {
  const listing = document.createElement("div");
  listing.className = "job-listing";

  listing.innerHTML = `
    <h2>${title}</h2>
    <p>${descriptions[index]}</p>
    <a class="apply-btn" href="apply.html" target="_blank">Apply</a>
  `;

  container.appendChild(listing);
});
