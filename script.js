/*
  Artist Portfolio Template
  -------------------------------------------------------
  Add, remove, or edit pieces in the artwork array below.
  Every piece automatically gets:
  - a gallery card
  - its own page at index.html?piece=piece-id
  - a mailto inquiry link with the piece title in the subject line

  To use real images:
  Replace the gradient field with an image field, then update the CSS rendering if desired.
  This version uses colorful abstract gradients so the template works without image files.
*/

const artist = {
  name: "Artist Name",
  email: "artist@example.com",
  shortBio:
    "A contemporary artist creating vivid abstract work with motion, texture, and expressive color. Replace this copy with the artist's actual story, process, and style."
};

const artwork = [
  {
    id: "ocean-dreams",
    title: "Ocean Dreams",
    year: "2026",
    medium: "Acrylic on canvas",
    size: "24 × 36 in",
    status: "Available",
    price: "Price upon request",
    description:
      "A flowing abstract composition inspired by water, movement, and the emotional pull of open space.",
    gradient:
      "linear-gradient(135deg, #2ec4ff 0%, #5cff9d 38%, #ffffff 39%, #ff4fb8 69%, #9b5cff 100%)"
  },
  {
    id: "summer-static",
    title: "Summer Static",
    year: "2025",
    medium: "Mixed media",
    size: "30 × 40 in",
    status: "Available",
    price: "Price upon request",
    description:
      "Bright, energetic, and playful, this piece uses sharp contrast and layered color to feel like a frozen burst of summer noise.",
    gradient:
      "linear-gradient(150deg, #ff9f1c 0%, #ff4fb8 34%, #141414 35%, #2ec4ff 58%, #ffffff 59%, #5cff9d 100%)"
  },
  {
    id: "violet-noise",
    title: "Violet Noise",
    year: "2026",
    medium: "Acrylic and pastel",
    size: "18 × 24 in",
    status: "Sold",
    price: "Sold",
    description:
      "A smaller but bold work built around violet tones, rough edges, and layered gesture marks.",
    gradient:
      "linear-gradient(135deg, #9b5cff 0%, #ff4fb8 42%, #ffffff 43%, #2ec4ff 70%, #141414 100%)"
  },
  {
    id: "green-room",
    title: "Green Room",
    year: "2024",
    medium: "Acrylic on panel",
    size: "20 × 20 in",
    status: "Available",
    price: "Price upon request",
    description:
      "A compact square piece with heavy color fields and organic marks that give it a living, botanical feeling.",
    gradient:
      "linear-gradient(135deg, #5cff9d 0%, #2ec4ff 31%, #ffffff 32%, #ff9f1c 63%, #ff4fb8 100%)"
  },
  {
    id: "red-shift",
    title: "Red Shift",
    year: "2025",
    medium: "Oil and acrylic",
    size: "36 × 48 in",
    status: "Available",
    price: "Price upon request",
    description:
      "A larger statement piece that leans into warm motion, distorted shapes, and a sense of controlled chaos.",
    gradient:
      "linear-gradient(120deg, #ff4fb8 0%, #ff9f1c 44%, #ffffff 45%, #141414 63%, #9b5cff 100%)"
  },
  {
    id: "blue-hour",
    title: "Blue Hour",
    year: "2026",
    medium: "Mixed media on canvas",
    size: "22 × 28 in",
    status: "Available",
    price: "Price upon request",
    description:
      "Cool, atmospheric, and balanced with flashes of heat, this piece is meant to feel like the last light after sunset.",
    gradient:
      "linear-gradient(145deg, #2ec4ff 0%, #9b5cff 35%, #ffffff 36%, #ff9f1c 61%, #ff4fb8 100%)"
  }
];

const app = document.querySelector("#app");
const year = document.querySelector("#year");

document.title = `${artist.name} | Artist Portfolio`;
document.querySelector(".logo-text").textContent = artist.name;
document.querySelector("#contact a").href = `mailto:${artist.email}`;
document.querySelector("#contact a").textContent = artist.email;
year.textContent = new Date().getFullYear();

function getSelectedPieceId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("piece");
}

function createInquiryLink(piece) {
  const subject = encodeURIComponent(`Inquiry about ${piece.title}`);
  const body = encodeURIComponent(
    `Hi ${artist.name},\n\nI am interested in "${piece.title}". Please send me more information about availability and pricing.\n\nThank you.`
  );

  return `mailto:${artist.email}?subject=${subject}&body=${body}`;
}

function renderGallery() {
  app.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Original abstract artwork</p>
        <h1>Color with a little <span>chaos.</span></h1>
        <p>
          A clean artist portfolio template built for showing artwork, telling the artist's story,
          and letting collectors inquire about each individual piece.
        </p>
        <div class="hero-actions">
          <a class="button" href="#gallery">View artwork</a>
          <a class="button secondary" href="#about">About the artist</a>
        </div>
      </div>

      <div class="hero-art-card" aria-hidden="true"></div>
    </section>

    <section id="gallery" aria-labelledby="gallery-title">
      <div class="section-heading">
        <h2 id="gallery-title">Featured work</h2>
        <p>
          Each card links to its own artwork page with details, availability, and a direct inquiry button.
        </p>
      </div>

      <div class="gallery-grid">
        ${artwork.map(piece => `
          <a class="art-card" href="index.html?piece=${piece.id}" style="--piece-gradient: ${piece.gradient}">
            <div class="art-image" aria-hidden="true"></div>
            <h3>${piece.title}</h3>
            <p>${piece.medium}</p>
            <div class="card-meta">
              <span>${piece.size}</span>
              <span>${piece.status}</span>
            </div>
          </a>
        `).join("")}
      </div>
    </section>

    <section class="about-panel" id="about">
      <h2>About the artist</h2>
      <p>${artist.shortBio}</p>
    </section>
  `;
}

function renderArtworkPage(piece) {
  document.title = `${piece.title} | ${artist.name}`;

  app.innerHTML = `
    <section class="artwork-detail">
      <div class="detail-image" style="--piece-gradient: ${piece.gradient}" aria-label="Abstract preview for ${piece.title}"></div>

      <aside class="detail-panel">
        <a class="back-link" href="index.html">← Back to gallery</a>
        <p class="eyebrow">${piece.status}</p>
        <h1>${piece.title}</h1>
        <p class="detail-description">${piece.description}</p>

        <ul class="spec-list">
          <li><strong>Year</strong><span>${piece.year}</span></li>
          <li><strong>Medium</strong><span>${piece.medium}</span></li>
          <li><strong>Size</strong><span>${piece.size}</span></li>
          <li><strong>Price</strong><span>${piece.price}</span></li>
        </ul>

        <div class="inquiry-box">
          <h2>Ask about this piece</h2>
          <p>Send a quick inquiry with the artwork title already included.</p>
          <a class="button" href="${createInquiryLink(piece)}">Inquire about ${piece.title}</a>
        </div>
      </aside>
    </section>
  `;
}

function renderNotFound() {
  app.innerHTML = `
    <section class="not-found">
      <h1>Artwork not found.</h1>
      <p>
        That piece may have been renamed or removed. Head back to the gallery to see the available work.
      </p>
      <a class="button" href="index.html">Back to gallery</a>
    </section>
  `;
}

const selectedPieceId = getSelectedPieceId();

if (selectedPieceId) {
  const piece = artwork.find(item => item.id === selectedPieceId);
  piece ? renderArtworkPage(piece) : renderNotFound();
} else {
  renderGallery();
}
