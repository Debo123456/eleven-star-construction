import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: Request) {
  try {
    
    // Verify environment variables are set
    if (!process.env.SENDGRID_API_KEY || !process.env.SALES_TEAM_EMAIL || !process.env.FROM_EMAIL) {
      throw new Error('Missing required environment variables')
    }

    console.log("Environment variables present:", {
      apiKey: !!process.env.SENDGRID_API_KEY,
      apiKeyLength: process.env.SENDGRID_API_KEY?.length,
      salesEmail: process.env.SALES_TEAM_EMAIL,
      fromEmail: process.env.FROM_EMAIL
    });
    
    const body = await request.json()
    const { name, email, phone, service, projectDetails } = body

    const emailAddresses = process.env.SALES_TEAM_EMAIL!.split(',').map(email => email.trim());
    const primaryEmail = emailAddresses[0];
    const ccEmails = emailAddresses.slice(1);

    const msg = {
      to: primaryEmail, // Primary recipient
      cc: ccEmails.length > 0 ? ccEmails : undefined, // CC recipients if any
      from: process.env.FROM_EMAIL!, // Your verified sender email
      subject: `New Quote Request from ${name} - ${service}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service Requested: ${service}
        Project Details: ${projectDetails}
      `,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Requested:</strong> ${service}</p>
        <p><strong>Project Details:</strong></p>
        <p>${projectDetails}</p>
      `,
    }

    const response = await sgMail.send(msg)
    console.log(response);
    console.log('SendGrid Response:', response[0].statusCode)
    
    if (response[0].statusCode !== 202) {
      throw new Error(`SendGrid returned status code ${response[0].statusCode}`)
    }

    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    type SendGridError = { response?: { body?: unknown } };
    if (
      typeof error === 'object' &&
      error !== null &&
      'response' in error
    ) {
      const sgError = error as SendGridError;
      console.error("Error sending email:", sgError.response?.body || error);
    } else {
      console.error("Error sending email:", error);
    }
    // Return more detailed error information
    return NextResponse.json(
      { 
        error: "Failed to send quote request",
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 