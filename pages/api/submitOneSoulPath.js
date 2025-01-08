// pages/api/submitOneSoulPath.js
import fetch from "node-fetch";

export default async function handler(req, res) {
    try {
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const email = req.body.email;
      const phone = req.body.phone;
  
      const bookingData = {
        firstName,
        lastName,
        email,
        phone,
      };
  
      try {
        const zohoResponse = await fetch(
          "https://flow.zoho.com/874321425/flow/webhook/incoming?zapikey=1001.4ee5916231718a517fe427a0d792478e.98bc6bd9fc9cb20575f5fd322d2e6278&isdebug=false",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingData),
          }
        );
  
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