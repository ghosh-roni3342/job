const jobs = [
  { title: "Registered Nurse", description: "Provide patient care, administer medications, and support recovery." },
  { title: "Medical Assistant", description: "Assist physicians in clinical tasks and patient management." },
  { title: "Surgeon", description: "Perform operations and guide patients through surgical procedures." },
  { title: "Pharmacist", description: "Dispense medication and provide pharmaceutical guidance." },
  { title: "Radiologic Technologist", description: "Perform diagnostic imaging examinations like X-rays." },
  { title: "Physical Therapist", description: "Help patients regain movement and manage pain through exercises." },
  { title: "Healthcare Administrator", description: "Oversee healthcare operations and improve service delivery." },
  { title: "Dentist", description: "Diagnose and treat problems related to teeth and gums." },
  { title: "Medical Billing Specialist", description: "Handle healthcare billing, insurance claims, and coding." },
  { title: "Anesthesiologist", description: "Administer anesthesia and monitor patient vitals during surgery." },
  { title: "Paramedic", description: "Provide emergency medical care and transport patients to hospitals." },
  { title: "Nutritionist", description: "Advise patients on healthy eating and create dietary plans." },
  { title: "Psychiatrist", description: "Diagnose and treat mental health conditions with therapy and medication." },
  { title: "Lab Technician", description: "Collect and analyze lab samples to assist in diagnoses." },
  { title: "Pediatrician", description: "Specialize in care for infants, children, and adolescents." },
  { title: "Occupational Therapist", description: "Assist patients in developing, recovering, or improving daily skills." },
  { title: "Dermatologist", description: "Treat skin, hair, and nail conditions." }
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
