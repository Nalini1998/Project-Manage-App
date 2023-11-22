const progression = document.getElementById("progression");
progression.addEventListener("change", function() {
  const selectedOption = this.options[this.selectedIndex];
  const row = selectedOption.parentNode.parentNode;
  row.cells[1].innerHTML = "Selected Author";
  row.cells[2].innerHTML = "Selected Technology";
});

const table = document.getElementById("table");

const rows = document.getElementsByTagName("tr");

for (let a = 1; a < rows.length; a++) {
  const row = rows[a];
  const cell = row.insertCell(0);
  cell.innerHTML = `Meow${a.toString().padStart(2, '0')}`;
}

const projectNames = table.getElementsByTagName("tr");

for (let j = 1; j < projectNames.length; j++) {
  const projectName = projectNames[j];
  const cellProject = projectName.insertCell(0);
  cellProject.innerHTML = `Project Meow${j}`;
}

const authors = table.getElementsByTagName("tr");

for (let k = 1; k < authors.length; k++) {
  const author = authors[k];
  const cellAuthors = author.insertCell(0);
  cellAuthors.innerHTML = `Author Meow${k.toString().padStart(2, '0')}`;
}

const linkInput = document.getElementById('link-input');
linkInput.addEventListener('blur', function() {
  let link = this.value.trim();
  const urlRegex = "";
  if (link.match(urlRegex)) {
    if (link.startsWith('http://') && link.startsWith('https://')) {
      link = 'http://' + link;
    }
    this.value = link;
  } else {
    alert('Please enter a valid URL.');
    this.value = '';
  }
});

const projectNameInputs = document.querySelectorAll(".projectNameInput");

for (let i = 0; i < projectNameInputs.length; i++) {
  const projectNameInput = projectNameInputs[i];
  projectNameInput.addEventListener("blur", function() {
    const projectName = this.value;
    saveProjectName(i, projectName);
  });
}

function saveProjectName(index, projectName) {
  // Here you can implement your own way of saving the Project Name. For example, you can use localStorage, a server-side API, or any other data storage technique that suits your needs.
  console.log(`Saving Project Name "${projectName}" for row ${index + 1}.`);
}

// h1 typing effects
const headingText = "Project Manager By Meow 😼";
const headingElement = document.getElementById('typing-heading');

let i = 0;
setInterval(function() {
  if (i <= headingText.length) {
    headingElement.innerHTML = headingText.slice(0, i) + "_";
    i++;
  } else {
    clearInterval();
    headingElement.innerHTML = headingText;
  }
}, 150);

// deadline
const deadlineElement = document.getElementById('deadline');
const deadline = new Date(); // Specify your desired deadline date and time here

const day = String(deadline.getDate()).padStart(2, '0');
const month = String(deadline.getMonth() + 1).padStart(2, '0');
const year = deadline.getFullYear().toString().slice(2);
const hours = String(deadline.getHours()).padStart(2, '0');
const minutes = String(deadline.getMinutes()).padStart(2, '0');

deadlineElement.innerHTML = `${day}-${month}-${year} ${hours}:${minutes}`;
