document.getElementById('generateBtn').addEventListener('click', function () {
  const genre = document.getElementById('genre').value.trim();
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const characters = document.getElementById('characters').value.trim();
  const storyline = document.getElementById('storyline').value.trim();
  const message = document.getElementById('message').value.trim();
  const date = document.getElementById('date').value.trim();

  // Validate required fields
  if (!genre || !title || !author || !characters || !storyline || !message || !date) {
    alert("Please fill in all fields.");
    return;
  }

  const resultHTML = `
    <p><strong>Genre:</strong> ${genre}</p>
    <p><strong>Title:</strong> ${title}</p>
    <p><strong>Author:</strong> ${author}</p>
    <p><strong>Characters:</strong> ${characters}</p>
    <p><strong>Storyline:</strong> ${storyline}</p>
    <p><strong>The Message:</strong> ${message}</p>
    <p><strong>Date:</strong> ${date}</p>
  `;

  document.getElementById('resultBox').innerHTML = resultHTML;

  // Clear input fields after generation
  document.querySelector('form').reset();
});

// Template selector
const templateSelector = document.getElementById('templateSelector');
templateSelector.addEventListener('change', function () {
  document.body.className = this.value;
});

// Download as PDF
const downloadBtn = document.getElementById('downloadBtn');
downloadBtn.addEventListener('click', function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const content = document.getElementById('resultBox').innerText;
  doc.text(content, 10, 10);
  doc.save("creative-writing.pdf");
});
