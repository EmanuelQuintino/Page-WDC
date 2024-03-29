window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 50) {
    const containerTechnologies = document.querySelectorAll(".containerTechnologies li");
    containerTechnologies.forEach((element) => {
      element.classList.add("pulsarAnimation");
    });
  }

  if (window.scrollY > 200) {
    const anotherSubjects = document.querySelector(".anotherSubjects");
    anotherSubjects.classList.add("downTopAnimation");
  }

  if (window.scrollY > 340) {
    const projects = document.querySelector(".projects");
    projects.classList.add("downTopAnimation");
  }

  if (window.scrollY > 720) {
    const instructorPerfil = document.querySelector(".instructorPerfil");
    instructorPerfil.classList.add("opacityAnimation");
  }

  if (window.scrollY > 850) {
    const statsCourse = document.querySelectorAll(".stats h2, .cardStats");
    statsCourse.forEach((value) => {
      value.classList.add("pulsarAnimation");
    });
  }

  if (window.scrollY > 1120) {
    const education = document.querySelector(".education");
    education.classList.add("downTopAnimation");
  }

  if (window.scrollY > 1220) {
    const containerContacts = document.querySelector(".containerContacts");
    containerContacts.classList.add("downTopAnimation");
  }

  if (window.scrollY > 1300) {
    const footerLogo = document.querySelectorAll("footer h3, .logoContainer img");
    footerLogo.forEach((value) => {
      value.classList.add("pulsarAnimation");
    });
  }
});
