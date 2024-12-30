// pages/api/submitAyafRP.js
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
      // Post to Zoho Webhook using node-fetch
      const zohoResponse = await fetch(
        "https://flow.zoho.com/874321425/flow/webhook/incoming?zapikey=1001.f20381d80b787db7606ced66be170f6e.6894193db22a2219a96c4db072c6d170&isdebug=true", // Use the correct Zoho Webhook URL and API key for this form
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      if (zohoResponse.ok) {
        // Redirect to the PDF download page
        res.redirect("/ayahuasca-for-real-people-dlset-type1");
      } else {
        console.error(
          "Error posting to Zoho:",
          zohoResponse.status,
          zohoResponse.statusText
        );
        res.status(zohoResponse.status).json({
          message: "Error submitting data to Zoho.",
        });
      }
    } catch (error) {
      console.error("Zoho API Error:", error);
      res.status(500).json({ message: "Error communicating with Zoho." });
    }
  } catch (error) {
    console.error("Data Submission Error:", error);
    res.status(500).json({ message: "Error submitting data." });
  }
}