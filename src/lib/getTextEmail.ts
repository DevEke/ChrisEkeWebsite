
interface ConfirmationTextProps {
  name: string
  message: string
}

export function getConfirmationText({ name, message }: ConfirmationTextProps): string {
  return `
Got it, ${name}. I'll be in touch shortly.

Thanks for reaching out. I've received your message and I'll get back to you within one business day. Here's what happens next.

--------

WHAT HAPPENS NEXT

01. I review your message
I'll read through what you've shared and come prepared with the right questions. No generic responses.

02. I reach out to schedule a call
I'll reply to this email with a few times that work, or a link to book directly on my calendar.

03. We talk and figure out a plan
A free 20-minute call to talk through your project, answer your questions, and see if we're a good fit. No pressure, no pitch.

--------

YOUR MESSAGE

${message}

--------

Need to add something or reach me sooner? Reply directly to this email or reach me at hello@chriseke.com.

Chris Eke
Web Designer and Developer
Dallas Fort Worth, TX
https://www.chriseke.com

You're receiving this because you submitted a form on chriseke.com.
  `.trim()
}


// ── NOTIFICATION (to Chris) ───────────────────────────────────

interface NotificationTextProps {
  name: string
  email: string
  message: string
}

export function getNotificationText({ name, email, message }: NotificationTextProps): string {
  return `
New inquiry from ${name} — chriseke.com

--------

Name:    ${name}
Email:   ${email}
Message:

${message}

--------

Reply to ${name}: ${email}

chriseke.com — contact form submission
  `.trim()
}
