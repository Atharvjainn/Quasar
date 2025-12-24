const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const inputPath = path.join(__dirname, '..', 'public', 'problem-statements', 'ps.txt');
const outputPath = path.join(__dirname, '..', 'public', 'problem-statements', 'all-problem-statement.pdf');

const text = fs.readFileSync(inputPath, 'utf8');

const doc = new PDFDocument({ size: 'A4', margin: 48 });
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Title
doc.font('Helvetica-Bold').fontSize(18).text('Quasar x AI 2026 - Problem Statements', { align: 'center' });
doc.moveDown(0.5);

// Render body text with some spacing and small font
doc.font('Helvetica').fontSize(10).lineGap(4);

const lines = text.split(/\r?\n/);

lines.forEach((line) => {
  if (line.trim() === '') {
    doc.moveDown(0.5);
  } else if (/^=+$/.test(line.trim())) {
    // Separator lines: draw a thin rule
    doc.moveDown(0.2);
    const y = doc.y;
    doc.strokeColor('#cccccc').lineWidth(0.5).moveTo(doc.page.margins.left, y).lineTo(doc.page.width - doc.page.margins.right, y).stroke();
    doc.moveDown(0.5);
  } else if (/^PS - \d+/.test(line.trim())) {
    doc.moveDown(0.3);
    doc.font('Helvetica-Bold').fontSize(12).text(line.trim());
    doc.moveDown(0.2);
    doc.font('Helvetica').fontSize(10);
  } else if (/^[A-Z][A-Za-z ]+:$/.test(line.trim())) {
    // Section headings like BACKGROUND:
    doc.moveDown(0.3);
    doc.font('Helvetica-Bold').fontSize(11).text(line.trim());
    doc.moveDown(0.1);
    doc.font('Helvetica').fontSize(10);
  } else {
    // Normal paragraph - use text wrapping provided by pdfkit
    doc.text(line, { align: 'left' });
  }

  // Add new page if near bottom
  if (doc.y > doc.page.height - doc.page.margins.bottom - 50) {
    doc.addPage();
  }
});

doc.end();

stream.on('finish', () => {
  console.log('PDF generated at', outputPath);
});
