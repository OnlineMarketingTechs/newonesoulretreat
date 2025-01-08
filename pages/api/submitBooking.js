// pages/api/submitBooking.js
import axios from "axios";
import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    // Access form data from req.body (adjust based on your framework)
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;

    // Create a data object for Zoho
    const bookingData = {
      firstName,
      lastName,
      email,
      phone,
    };

    try {
      // 1. Post to Zoho Webhook using node-fetch
      const zohoResponse = await fetch(
         
        "https://flow.zoho.com/874321425/flow/webhook/incoming?zapikey=1001.811b802b696b1145ff85d1d1144f0485.fc97c29f6dbb701eaf0df1f43a891c1c&isdebug=false",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      // Check for successful response (adjust based on Zoho's response)
      if (zohoResponse.ok) {
        const redirectUrl = "/thank-you";
        res.status(200).json({ redirectUrl, firstName: bookingData.firstName });
      } else {
        console.error(
          "Error posting to Zoho:",
          zohoResponse.status,
          zohoResponse.statusText
        );
        res.status(zohoResponse.status).json({
          message: "Error submitting booking to Zoho.",
        });
      }
    } catch (error) {
      console.error("Zoho API Error:", error);
      res.status(500).json({ message: "Error communicating with Zoho." });
    }
  } catch (error) {
    console.error("Booking Submission Error:", error);
    res.status(500).json({ message: "Error submitting booking." });
  }
}
