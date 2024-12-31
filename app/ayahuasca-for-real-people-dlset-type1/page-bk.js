// pages/download-pdf.js
import Link from 'next/link';

export default function DownloadPDF() {
  return (
    <div>
      <h1>Thank you for submitting the form!</h1>
      <p>You can download your PDF here:</p>
      <Link href="/assets/images/one-soul-path/The-One-Soul-Path.pdf" download>
        Download PDF
      </Link>
    </div>
  );
}