const subjectDetails = {
  ai: { number: "01", title: "AI Foundations", description: "Understanding the ideas behind intelligent systems, from problem-solving to the building blocks of machine learning.", focus: "How machines learn, reason, and find patterns." },
  python: { number: "02", title: "Python Programming with IBM Faculty", description: "Writing clear programs, learning core syntax, and using Python as a practical tool for experiments and automation.", focus: "Thinking in functions, data, and repeatable logic." },
  innovation: { number: "03", title: "Innovation Lab", description: "A space to notice real problems, ask better questions, and shape small ideas into experiments worth testing.", focus: "Moving from a rough idea to a useful first prototype." },
  data: { number: "04", title: "SQL & NoSQL", description: "Getting comfortable with how information is stored, queried, and shaped for different kinds of applications.", focus: "Choosing the right structure for the question." },
  math: { number: "05", title: "Mathematics", description: "Practising the quantitative thinking that makes technical ideas easier to understand and explain.", focus: "Building confidence with patterns, logic, and problem-solving." },
  environment: { number: "06", title: "Environmental Science", description: "Learning how systems connect—and how better data and technology can help us see those connections.", focus: "Seeing technical work in a wider real-world context." },
  lab: { number: "07", title: "Python Lab", description: "Turning concepts into hands-on practice through small programs, debugging sessions, and repeatable experiments.", focus: "Learning by running, breaking, and improving code." }
};

const detail = document.querySelector("#subject-detail");
const modal = document.querySelector("#subject-modal");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalFocus = document.querySelector("#modal-focus");
const modalNumber = document.querySelector("#modal-number");

function showSubject(key, openModal = false) {
  const subject = subjectDetails[key];
  if (!subject) return;
  detail.querySelector("strong").textContent = subject.title;
  detail.querySelector("p").textContent = subject.description;
  detail.querySelector(".detail-tag").textContent = "Click another card to explore →";
  if (openModal) {
    modalNumber.textContent = subject.number;
    modalTitle.textContent = subject.title;
    modalDescription.textContent = subject.description;
    modalFocus.textContent = subject.focus;
    modal.showModal();
  }
}

document.querySelectorAll(".subject-card").forEach((card) => {
  card.addEventListener("click", () => showSubject(card.dataset.subject, true));
});
document.querySelector(".modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

document.querySelectorAll(".filter").forEach((filter) => {
  filter.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");
    const selected = filter.dataset.filter;
    document.querySelectorAll(".project-card").forEach((card) => {
      card.classList.toggle("hidden", selected !== "all" && card.dataset.projectStatus !== selected);
    });
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
