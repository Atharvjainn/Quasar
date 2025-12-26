const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const outputPath = path.join(__dirname, '..', 'public', 'Quasar_x_AI_2026_Intro.pdf');
const imagesDir = path.join(__dirname, '..', 'public', 'images');

const doc = new PDFDocument({ size: 'A4', margin: 48, bufferPages: true });
const stream = fs.createWriteStream(outputPath);
console.log('generate-intro-pdf: stream & doc created');
doc.pipe(stream);
doc.on('end', () => console.log('generate-intro-pdf: doc end'));
doc.on('error', (e) => console.error('generate-intro-pdf: doc error', e));
stream.on('error', (e) => console.error('generate-intro-pdf: stream error', e));

const logoQuasar = path.join(imagesDir, 'logo.png'); // fallback to project logo if exists
const quasarSvg = path.join(__dirname, '..', 'public', 'logo.svg');
const iiit = path.join(imagesDir, 'iiitranchi.png');
const iic = path.join(imagesDir, 'iic.png');
const hg = path.join(imagesDir, 'hg.png');
const aiImpact = path.join(imagesDir, 'ai-impact-logo.png');

// Helper to draw a header
function header(title) {
  doc.font('Helvetica-Bold').fontSize(16).text(title, { align: 'center' });
  doc.moveDown(0.5);
}

// Title Page
console.log('generate-intro-pdf: starting title page');
if (fs.existsSync(quasarSvg)) {
  try {
    // pdfkit doesn't render svg by default; skip if present
  } catch (e) {}
}

header('Quasar x AI 2026');
doc.font('Helvetica').fontSize(12).text('Introduction to Quasar x AI 2026', { align: 'center' });
doc.moveDown(1);
console.log('generate-intro-pdf: title page done');
// logos row
const logos = [iiit, iic, hg, aiImpact];
let available = 0;
logos.forEach((p) => { if (fs.existsSync(p)) available++; });
const logoSize = 70;
const spacing = 20;
let totalWidth = available * logoSize + (available - 1) * spacing;
let startX = doc.page.width / 2 - totalWidth / 2;
console.log('generate-intro-pdf: placing logos, available=', available);
logos.forEach((p) => {
  if (fs.existsSync(p)) {
    try {
      console.log('generate-intro-pdf: placing', p);
      doc.image(p, startX, doc.y, { width: logoSize, height: logoSize });
      startX += logoSize + spacing;
      console.log('generate-intro-pdf: placed', p);
    } catch (e) { console.error('generate-intro-pdf: image error', p, e); }
  }
});
console.log('generate-intro-pdf: logos placed');

// Title details
doc.moveDown(6);
doc.font('Helvetica-Bold').fontSize(20).text('Quasar x AI 2026', { align: 'center' });
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(12).text('A 24-Hour AI Hackathon • January 30-31, 2026', { align: 'center' });

doc.moveDown(2);
doc.font('Helvetica').fontSize(10).text('Website: https://quasarhacks.vercel.app', { align: 'center' });
doc.font('Helvetica').fontSize(10).text('Registration: https://unstop.com/p/quasar-x-ai-2026-indian-institute-of-information-technology-iiit-ranchi-1613293?utm_medium=Share&utm_source=houseofg77083&utm_campaign=Online_coding_challenge', { align: 'center' });

// New Page: Index
console.log('generate-intro-pdf: adding index page');
doc.addPage();
header('Index');
doc.moveDown(0.5);
const toc = [
  '1. Introduction',
  '2. What is Quasar x AI',
  '3. Theme: AI for Economic & Social Good',
  '4. Organizers & Collaborators',
  '5. Problem Statement Guidelines',
  '6. Rounds, Registration & Schedule',
  '7. Prizes, Perks & Contact',
];

toc.forEach((t, i) => {
  doc.font('Helvetica').fontSize(12).text(`${i + 1}. ${t}`);
});
console.log('generate-intro-pdf: index page done');
// Page 3: Introduction & What is Quasar
doc.addPage();
header('Introduction to Quasar x AI 2026');
doc.font('Helvetica').fontSize(11).text(
  'Quasar x AI 2026 is a student-centered hackathon that brings together participants to build AI-powered solutions over a 24-hour finale. Hosted by IIIT Ranchi and organized with the Institution Innovation Council (IIC), in collaboration with House of Geeks (HG) and AI Summit, this event aims to encourage innovation that applies AI for Economic and Social Good. The hackathon features an initial online submission round followed by an on-campus 24-hour final at IIIT Ranchi Campus on January 30–31, 2026.'
);

doc.moveDown(1);
header('What is Quasar x AI?');
doc.font('Helvetica').fontSize(11).text(
  'Quasar x AI is a focused hackathon and learning platform. It encourages teams to create impactful, AI-driven projects that address real-world challenges aligned with the theme. Participants get mentorship, access to resources, and opportunities to present to expert judges.'
);

// Page 4: Theme & Organizers
console.log('generate-intro-pdf: adding theme & organizers');
doc.addPage();
header('Theme: AI for Economic & Social Good');
doc.font('Helvetica').fontSize(11).text('Our theme encourages projects that apply AI to improve economic opportunities or social welfare. This includes use-cases such as healthcare access, financial inclusion, agricultural productivity, public service optimization, accessibility, education, disaster response, and other domains where AI can generate measurable positive impact.');

doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11).text('Projects may span any domain, but must clearly explain how the solution advances economic or social outcomes and demonstrate the use of AI as a core component (models, data pipelines, inference, decision support, or automation). Innovation, feasibility, and real-world applicability are key evaluation criteria.');
console.log('generate-intro-pdf: theme & organizers done');
doc.moveDown(1);
header('Organizers & Collaborators');
doc.font('Helvetica').fontSize(11).text('Organizers:');
doc.list(['Indian Institute of Information Technology (IIIT) Ranchi', 'Institution Innovation Council (IIC)'], { bulletIndent: 12 });

doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11).text('Collaborators:');
doc.list(['House of Geeks (HG) — Technical Society of IIIT Ranchi', 'AI Summit — AI Impact / AI Summit'], { bulletIndent: 12 });

// Add small bios
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(10).text('IIIT Ranchi: The host institute providing venue, logistics, and academic support for the grand finale.');
doc.moveDown(0.2);
doc.font('Helvetica').fontSize(10).text('IIC: Institution Innovation Council supporting coordination, mentorship, and outreach.');
doc.moveDown(0.2);
doc.font('Helvetica').fontSize(10).text('HG (House of Geeks): The technical society of IIIT Ranchi assisting with technical coordination and volunteer support.');

doc.moveDown(0.2);
doc.font('Helvetica').fontSize(10).text('AI Summit: Collaboration partner helping with community outreach and judge coordination.');

// Page 5: Problem Statement page
console.log('generate-intro-pdf: adding problem statement page');
doc.addPage();
header('Problem Statement Guidelines');
doc.font('Helvetica').fontSize(11).text('Teams may propose ideas in any domain, but projects must:');

doc.moveDown(0.2);
doc.list([
  'Align with the theme "AI for Economic & Social Good"',
  'Clearly use AI as a central component (model development, inference pipeline, automation, or data-driven decision support)',
  'Demonstrate feasibility and expected impact, including how the solution benefits economic outcomes or social welfare'
], { bulletIndent: 12 });

doc.moveDown(0.4);
doc.font('Helvetica').fontSize(11).text('Be creative — you may build across domains (health, agriculture, finance, education, accessibility, urban planning, etc.) but ensure the AI contribution is well explained. Projects should include technical details, datasets, and an outline of how the AI model or component is used.');

// Bring in sample problem-statement excerpt if present
console.log('generate-intro-pdf: checking problem statements file');
const psPath = path.join(__dirname, '..', 'public', 'problem-statements', 'ps.txt');
if (fs.existsSync(psPath)) {
  console.log('generate-intro-pdf: ps.txt found, reading excerpt');
  const psText = fs.readFileSync(psPath, 'utf8').split('\n').slice(0, 120).join('\n');
  doc.moveDown(0.5);
  doc.font('Helvetica-Bold').fontSize(12).text('Example Problem Statements (excerpt):');
  doc.moveDown(0.2);
  doc.font('Helvetica').fontSize(9).text(psText);
}

// Page 6: Rounds, Registration & Schedule
console.log('generate-intro-pdf: adding Rounds & Registration page');
doc.addPage();
header('Rounds, Registration & Schedule');
doc.font('Helvetica-Bold').fontSize(11).text('Rounds Overview:');
doc.font('Helvetica').fontSize(11).text('\nRound 1 (Online): PPT and short video submission. Submission window: January 15–18, 2026. Teams submit a PPT describing the team, problem statement, proposed AI-based solution, tech stack, and expected outcomes. Shortlisting is based on innovation, feasibility, and AI integration.');

doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11).text('Round 2 (Final): Top teams invited to the 24-hour on-campus finale at IIIT Ranchi on January 30–31, 2026.');

// Registration details
doc.moveDown(0.5);
header('Registration');
doc.font('Helvetica').fontSize(11).text('Registration opens: January 5, 2026 – January 10, 2026.');
doc.font('Helvetica').fontSize(11).text('Registration link: https://unstop.com/p/quasar-x-ai-2026-indian-institute-of-information-technology-iiit-ranchi-1613293?utm_medium=Share&utm_source=houseofg77083&utm_campaign=Online_coding_challenge');
doc.font('Helvetica').fontSize(11).text('Registration fee: ₹500 per team. Team size: 1–5 members.');

doc.moveDown(0.5);
header('Schedule Highlights');
doc.font('Helvetica').fontSize(11).list([
  'Registration: Jan 5–10, 2026',
  'Round 1 submission (PPT & Video): Jan 15–18, 2026',
  'Round 2 Shortlisting Results announced: Jan 20, 2026',
  'Grand Finale (24-hour hackathon): Jan 30–31, 2026'
]);

// Page 7: Prizes, Perks & Contact
doc.addPage();
header('Prizes & Perks');
doc.font('Helvetica').fontSize(11).text('Prize Pool: ₹15,000 total');
doc.list(['1st Prize: ₹6,000', '2nd Prize: ₹4,000', '3rd Prize: ₹3,000', 'Remaining amount reserved for track-based awards'], { bulletIndent: 12 });

doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11).text('Perks: Food, refreshments, mentorship, awards, goodies, stickers, and lots of fun. Judges and IIC/HG members will be available to support teams throughout the event.');

doc.moveDown(0.5);
header('Judges & Support');
doc.font('Helvetica').fontSize(11).text('Experienced judges from academia and industry will evaluate submissions. The event is coordinated with IIIT Ranchi, IIC and House of Geeks volunteers to ensure participants have logistical and technical assistance when needed.');

// Contact & Links
doc.moveDown(0.5);
header('Useful Links & Contacts');
doc.font('Helvetica').fontSize(11).text('Website: https://quasarhacks.vercel.app');
doc.font('Helvetica').fontSize(11).text('Registration (Unstop): https://unstop.com/p/quasar-x-ai-2026-indian-institute-of-information-technology-iiit-ranchi-1613293?utm_medium=Share&utm_source=houseofg77083&utm_campaign=Online_coding_challenge');

doc.moveDown(1);
if (fs.existsSync(iiit)) doc.image(iiit, { width: 120 });
if (fs.existsSync(iic)) doc.image(iic, doc.x + 10, doc.y - 80, { width: 80 });
if (fs.existsSync(hg)) doc.image(hg, doc.x + 100, doc.y - 80, { width: 80 });

// Final notes
doc.addPage();
header('Closing Notes');
doc.font('Helvetica').fontSize(11).text('We look forward to your participation. Focus on building solutions that have tangible social or economic impact and make meaningful use of AI. Good luck and see you at Quasar x AI 2026!');

// Footer - small legal note
const addFooter = () => {
  const bottom = doc.page.height - doc.page.margins.bottom - 20;
  doc.font('Helvetica-Oblique').fontSize(8).text('Quasar x AI 2026 — Organized by IIIT Ranchi & IIC. Collaborators: House of Geeks (HG), AI Summit. For official details, visit the website.', doc.page.margins.left, bottom, { width: doc.page.width - doc.page.margins.left - doc.page.margins.right, align: 'center' });
};

// Add footers for all pages
for (let i = 0; i < doc.bufferedPageRange().count; i++) {
  doc.switchToPage(i);
  addFooter();
}

// Finish
doc.end();

stream.on('finish', () => {
  console.log('Intro PDF generated at', outputPath);
});