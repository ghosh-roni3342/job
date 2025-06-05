document.getElementById("jobApplicationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const role = document.getElementById("role").value;
  const coverLetter = document.getElementById("coverLetter").value.trim();
  const resume = document.getElementById("resumeUpload").files[0];

  if (!resume) {
    alert("Please upload your resume.");
    return;
  }

  // Simulated submission (you can connect to server/email service here)
  console.log("Applicant Info:", { fullName, email, phone, role, coverLetter, resume });

  document.getElementById("confirmationMsg").innerText = `Thank you ${fullName}, your application for "${role}" has been submitted!`;
  document.getElementById("jobApplicationForm").reset();
});
