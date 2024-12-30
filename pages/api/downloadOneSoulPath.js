import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req) {
  try {
    // (Optional) If you have authentication, check for it here (e.g., cookie, session)

    const filePath = path.join(process.cwd(), 'public', 'The-One-Soul-Path.pdf'); 
    const file = fs.readFileSync(filePath);

    return new NextResponse(file, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="/assets/images/one-soul-path/The-One-Soul-Path.pdf"',
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse('Error downloading ebook.', { status: 500 });
  }
}