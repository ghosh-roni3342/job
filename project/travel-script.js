const jobs = [
  { title: "Travel Agent", description: "Plan and sell transportation, accommodations, and tours." },
  { title: "Tour Guide", description: "Lead groups on excursions and explain points of interest." },
  { title: "Flight Attendant", description: "Ensure passenger safety and comfort on flights." },
  { title: "Hotel Concierge", description: "Assist guests with services and local recommendations." },
  { title: "Cruise Director", description: "Plan and manage entertainment on a cruise ship." },
  { title: "Travel Blogger", description: "Create content about destinations and experiences." },
  { title: "Airline Customer Service Rep", description: "Assist customers with bookings and flight issues." },
  { title: "Resort Activities Coordinator", description: "Organize recreational activities for guests." },
  { title: "Visa Consultant", description: "Guide clients through the visa application process." },
  { title: "Travel Photographer", description: "Capture and sell photos from global destinations." },
  { title: "Destination Wedding Planner", description: "Coordinate weddings in exotic locations." },
  { title: "Adventure Tour Leader", description: "Guide adventure trips like safaris or hiking tours." }
];

const container = document.getElementById('job-container');

jobs.forEach((job) => {
  const jobHTML = `
    <div class="job-listing">
      <h2>${job.title}</h2>
      <p>${job.description}</p>
      <a class="apply-btn" href="apply.html?job=${encodeURIComponent(job.title)}" target="_blank">Apply</a>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', jobHTML);
});
