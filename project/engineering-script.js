const jobs = [
  {
    title: "Mechanical Engineer",
    description: "Design and test mechanical systems and components in manufacturing and product development."
  },
  {
    title: "Civil Engineer",
    description: "Plan, design, and oversee construction and maintenance of building structures and infrastructure."
  },
  {
    title: "Electrical Engineer",
    description: "Design, develop, and test electrical systems and equipment for commercial and industrial use."
  },
  {
    title: "Software Engineer",
    description: "Develop software systems and applications using modern programming languages and tools."
  },
  {
    title: "Chemical Engineer",
    description: "Apply chemical principles to solve problems in manufacturing, energy, and materials."
  },
  {
    title: "Aerospace Engineer",
    description: "Design and test aircraft, spacecraft, and missile systems ensuring performance and safety."
  },
  {
    title: "Environmental Engineer",
    description: "Develop technologies to improve environmental protection, waste management, and sustainability."
  },
  {
    title: "Industrial Engineer",
    description: "Optimize production processes, systems, and workflow to improve efficiency and reduce waste."
  },
  {
    title: "Petroleum Engineer",
    description: "Design equipment and processes for extracting oil and gas from underground reservoirs."
  },
  {
    title: "Biomedical Engineer",
    description: "Develop medical devices, imaging systems, and prosthetics integrating biology and engineering."
  },
  {
    title: "Robotics Engineer",
    description: "Design and build robots and automated systems for various industrial applications."
  },
  {
    title: "Structural Engineer",
    description: "Analyze and design buildings and structures to ensure they can withstand loads and forces."
  }
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



function toggleForm(formId) {
  const form = document.getElementById(formId);
  form.style.display = (form.style.display === "block") ? "none" : "block";
}
