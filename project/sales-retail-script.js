const jobs = [
  { title: "Retail Sales Associate", description: "Assist customers, manage stock, and handle transactions in-store." },
  { title: "Store Manager", description: "Oversee daily operations, manage staff, and drive sales." },
  { title: "Cashier", description: "Process payments and provide customer service at checkout." },
  { title: "Sales Executive", description: "Identify client needs, present solutions, and close sales." },
  { title: "Customer Service Representative", description: "Respond to customer inquiries and resolve issues efficiently." },
  { title: "Visual Merchandiser", description: "Design in-store displays and layouts to maximize sales." },
  { title: "Inventory Specialist", description: "Track stock levels and coordinate product replenishment." },
  { title: "E-commerce Sales Manager", description: "Manage online sales channels and digital campaigns." },
  { title: "Regional Sales Manager", description: "Lead sales teams and strategies across multiple locations." },
  { title: "Brand Ambassador", description: "Promote brand awareness through events and product demonstrations." },
  { title: "Retail Buyer", description: "Select and purchase products for resale based on trends and demand." },
  { title: "Sales Analyst", description: "Analyze sales data and trends to inform business decisions." }
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
