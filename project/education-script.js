const jobs = [
  {
    title: "Primary School Teacher",
    description: "Teach basic subjects to children in grades 1 to 5 using engaging methods."
  },
  {
    title: "High School Math Teacher",
    description: "Deliver advanced math instruction and help students prepare for exams."
  },
  {
    title: "College Lecturer",
    description: "Teach specialized subjects at the undergraduate level and guide research."
  },
  {
    title: "Curriculum Developer",
    description: "Design lesson plans and educational material for school boards or institutions."
  },
  {
    title: "Special Education Teacher",
    description: "Work with children with disabilities and adapt teaching techniques accordingly."
  },
  {
    title: "Online Tutor",
    description: "Provide one-on-one or group virtual lessons in various subjects."
  },
  {
    title: "Education Counselor",
    description: "Guide students on academic paths, career choices, and mental well-being."
  },
  {
    title: "School Principal",
    description: "Oversee school operations, administration, staff, and student development."
  },
  {
    title: "Library Media Specialist",
    description: "Manage school libraries and assist students in research and digital literacy."
  },
  {
    title: "Adult Education Instructor",
    description: "Teach adults basic education, GED prep, or job-related skills."
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
