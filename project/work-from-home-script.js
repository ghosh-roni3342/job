const jobs = [
  { title: "Remote Customer Support", description: "Handle customer queries via email or chat remotely." },
  { title: "Virtual Assistant", description: "Manage calendars, respond to emails, and assist with admin tasks." },
  { title: "Online Tutor", description: "Teach students via video calls in various subjects." },
  { title: "Remote Data Entry Clerk", description: "Input and manage data in spreadsheets and databases." },
  { title: "Freelance Writer", description: "Write articles, blog posts, or marketing copy." },
  { title: "Remote Graphic Designer", description: "Design graphics for web and social media content." },
  { title: "Social Media Moderator", description: "Moderate user comments and maintain online community standards." },
  { title: "Telehealth Nurse", description: "Provide healthcare advice and assistance via video call." },
  { title: "Remote Project Manager", description: "Coordinate teams and tasks across time zones." },
  { title: "Software Developer (Remote)", description: "Work on development projects using modern tools remotely." },
  { title: "Remote Recruiter", description: "Screen and interview candidates virtually for hiring teams." },
  { title: "Remote Marketing Coordinator", description: "Assist in planning, executing, and tracking marketing campaigns." }
];

const container = document.getElementById("job-listings");

jobs.forEach((job) => {
  const listing = document.createElement("div");
  listing.className = "job-listing";

  // Apply button now links to apply.html with job title as URL parameter
  listing.innerHTML = `
    <h2>${job.title}</h2>
    <p>${job.description}</p>
    <a class="apply-btn" href="apply.html?job=${encodeURIComponent(job.title)}" target="_blank">Apply</a>
  `;

  container.appendChild(listing);
});
