// middleware.js 

import { NextResponse } from "next/server";

export function middleware(req) {
  // ... your middleware logic, if needed ...

  return NextResponse.next(); // Continue to the API route
}

export const config = {
  matcher: ["/api/submitBooking"], // Apply middleware to this path
};