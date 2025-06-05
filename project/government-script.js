const jobs = [
  { title: "Police Officer", description: "Maintain public order and enforce the law." },
  { title: "Firefighter", description: "Respond to fire emergencies and rescue situations." },
  { title: "Postal Worker", description: "Sort and deliver mail and packages." },
  { title: "Public Health Analyst", description: "Develop policies to improve public health." },
  { title: "Civil Engineer (Govt)", description: "Design and oversee infrastructure projects." },
  { title: "Public School Teacher", description: "Educate students in government schools." },
  { title: "Government Clerk", description: "Manage office paperwork and records." },
  { title: "Tax Officer", description: "Assess and collect government taxes." },
  { title: "Customs Officer", description: "Control the import/export of goods." },
  { title: "Immigration Officer", description: "Process visas and control borders." },
  { title: "District Magistrate Assistant", description: "Support administrative activities in districts." },
  { title: "Government Lawyer", description: "Represent the state in legal matters." },
  { title: "Forest Officer", description: "Manage and conserve forest resources." },
  { title: "Data Entry Operator", description: "Enter and maintain official records." },
  { title: "Government Accountant", description: "Maintain public sector financial records." },
  { title: "Railway Station Master", description: "Supervise operations at railway stations." },
  { title: "Traffic Controller", description: "Manage city or highway traffic systems." },
  { title: "Airport Security Officer", description: "Maintain safety and check security at airports." },
  { title: "Water Resource Manager", description: "Plan and manage water conservation." },
  { title: "Environmental Scientist", description: "Conduct environmental impact research." },
  { title: "IT Officer", description: "Maintain government computer networks and data." },
  { title: "Public Relations Officer", description: "Communicate government policies to the public." }
];

const container = document.getElementById('job-container');

jobs.forEach((job) => {
  const jobHTML = `
    <div class="job-listing">
      <h2>${job.title}</h2>
      <p>${job.description}</p>
      <a href="apply.html" class="apply-btn">Apply</a>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', jobHTML);
});

function toggleForm(id) {
  const form = document.getElementById(id);
  form.style.display = form.style.display === 'block' ? 'none' : 'block';
}
