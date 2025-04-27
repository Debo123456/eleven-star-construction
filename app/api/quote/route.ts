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
    
    const body = await request.json()
    const { name, email, phone, projectDetails } = body

    const msg = {
      to: process.env.SALES_TEAM_EMAIL!, // Your sales team email
      from: process.env.FROM_EMAIL!, // Your verified sender email
      subject: `New Quote Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Project Details: ${projectDetails}
      `,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Details:</strong></p>
        <p>${projectDetails}</p>
      `,
    }

    const response = await sgMail.send(msg)
    console.log('SendGrid Response:', response[0].statusCode)
    
    if (response[0].statusCode !== 202) {
      throw new Error(`SendGrid returned status code ${response[0].statusCode}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
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