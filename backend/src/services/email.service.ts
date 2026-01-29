import nodemailer from 'nodemailer';

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

class EmailService {
  private transporter: nodemailer.Transporter | null = null;
  private fromEmail: string;
  private fromName: string;

  constructor() {
    this.fromEmail = process.env.EMAIL_FROM || 'noreply@shantibhavan.org';
    this.fromName = process.env.EMAIL_FROM_NAME || 'Shanthi Bhavan';
    this.initTransporter();
  }

  private initTransporter(): void {
    const host = process.env.EMAIL_HOST;
    const port = parseInt(process.env.EMAIL_PORT || '587', 10);
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!host || !user || !pass) {
      console.warn('Email configuration incomplete. Email notifications will be disabled.');
      return;
    }

    const config: EmailConfig = {
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    };

    this.transporter = nodemailer.createTransport(config);
  }

  async sendEmail(options: EmailOptions): Promise<boolean> {
    if (!this.transporter) {
      console.warn('Email transporter not configured. Skipping email:', options.subject);
      return false;
    }

    try {
      await this.transporter.sendMail({
        from: `"${this.fromName}" <${this.fromEmail}>`,
        to: options.to,
        subject: options.subject,
        html: options.html,
        text: options.text || options.html.replace(/<[^>]*>/g, '')
      });
      console.log('Email sent successfully to:', options.to);
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  }

  // Donation Emails
  async sendDonationSuccess(data: {
    email: string;
    donorName: string;
    amount: number;
    currency: string;
    transactionId: string;
    donationType: string;
    receiptNumber?: string;
  }): Promise<boolean> {
    const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2e7d32; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .details { background: white; padding: 15px; margin: 15px 0; border-radius: 5px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    .amount { font-size: 24px; color: #2e7d32; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Your Donation!</h1>
    </div>
    <div class="content">
      <p>Dear ${data.donorName},</p>
      <p>We are deeply grateful for your generous contribution to Shanthi Bhavan. Your support helps us continue our mission of transforming lives.</p>

      <div class="details">
        <h3>Donation Details</h3>
        <p><strong>Amount:</strong> <span class="amount">${data.currency} ${data.amount.toLocaleString()}</span></p>
        <p><strong>Transaction ID:</strong> ${data.transactionId}</p>
        <p><strong>Type:</strong> ${data.donationType}</p>
        ${data.receiptNumber ? `<p><strong>Receipt Number:</strong> ${data.receiptNumber}</p>` : ''}
        <p><strong>Date:</strong> ${new Date().toLocaleDateString('en-IN', { dateStyle: 'long' })}</p>
      </div>

      <p>Your donation is eligible for tax exemption under Section 80G of the Income Tax Act.</p>
      <p>If you have any questions, please don't hesitate to contact us.</p>

      <p>With gratitude,<br>The Shanthi Bhavan Team</p>
    </div>
    <div class="footer">
      <p>Shanthi Bhavan Children's Project<br>
      This is an automated email. Please do not reply directly.</p>
    </div>
  </div>
</body>
</html>`;

    return this.sendEmail({
      to: data.email,
      subject: `Thank You for Your Donation - ${data.currency} ${data.amount.toLocaleString()}`,
      html
    });
  }

  async sendDonationFailed(data: {
    email: string;
    donorName: string;
    amount: number;
    currency: string;
    reason?: string;
  }): Promise<boolean> {
    const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #d32f2f; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Payment Could Not Be Processed</h1>
    </div>
    <div class="content">
      <p>Dear ${data.donorName},</p>
      <p>We regret to inform you that your donation of <strong>${data.currency} ${data.amount.toLocaleString()}</strong> could not be processed.</p>

      ${data.reason ? `<p><strong>Reason:</strong> ${data.reason}</p>` : ''}

      <p>Please try again or contact us if you continue to experience issues.</p>
      <p>We appreciate your intention to support our cause.</p>

      <p>Best regards,<br>The Shanthi Bhavan Team</p>
    </div>
    <div class="footer">
      <p>Shanthi Bhavan Children's Project<br>
      This is an automated email. Please do not reply directly.</p>
    </div>
  </div>
</body>
</html>`;

    return this.sendEmail({
      to: data.email,
      subject: 'Donation Payment Issue - Shanthi Bhavan',
      html
    });
  }

  // Fellowship Emails
  async sendFellowshipWelcome(data: {
    email: string;
    subscriberName: string;
    monthlyAmount: number;
    currency: string;
    verificationLink: string;
  }): Promise<boolean> {
    const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1565c0; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .button { display: inline-block; padding: 12px 30px; background: #1565c0; color: white; text-decoration: none; border-radius: 5px; margin: 15px 0; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to Shanthi Bhavan Fellowship!</h1>
    </div>
    <div class="content">
      <p>Dear ${data.subscriberName},</p>
      <p>Thank you for joining the Shanthi Bhavan Fellowship program! Your commitment to support our mission with a monthly contribution of <strong>${data.currency} ${data.monthlyAmount.toLocaleString()}</strong> will make a lasting impact.</p>

      <p>Please verify your email address to complete your registration:</p>
      <p style="text-align: center;">
        <a href="${data.verificationLink}" class="button">Verify Email Address</a>
      </p>

      <p>As a fellowship member, you will receive:</p>
      <ul>
        <li>Regular updates on our programs and impact</li>
        <li>Annual reports and newsletters</li>
        <li>Invitations to special events</li>
      </ul>

      <p>Thank you for being part of our family!</p>
      <p>Warm regards,<br>The Shanthi Bhavan Team</p>
    </div>
    <div class="footer">
      <p>Shanthi Bhavan Children's Project<br>
      This is an automated email. Please do not reply directly.</p>
    </div>
  </div>
</body>
</html>`;

    return this.sendEmail({
      to: data.email,
      subject: 'Welcome to Shanthi Bhavan Fellowship - Please Verify Your Email',
      html
    });
  }

  async sendFellowshipPaymentReminder(data: {
    email: string;
    subscriberName: string;
    monthlyAmount: number;
    currency: string;
    dueDate: Date;
    paymentLink: string;
  }): Promise<boolean> {
    const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #ff9800; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .button { display: inline-block; padding: 12px 30px; background: #2e7d32; color: white; text-decoration: none; border-radius: 5px; margin: 15px 0; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Fellowship Payment Reminder</h1>
    </div>
    <div class="content">
      <p>Dear ${data.subscriberName},</p>
      <p>This is a friendly reminder that your monthly fellowship contribution of <strong>${data.currency} ${data.monthlyAmount.toLocaleString()}</strong> is due on <strong>${data.dueDate.toLocaleDateString('en-IN', { dateStyle: 'long' })}</strong>.</p>

      <p style="text-align: center;">
        <a href="${data.paymentLink}" class="button">Make Payment Now</a>
      </p>

      <p>Your continued support helps us provide education and care to children in need.</p>
      <p>Thank you for being a valued member of our fellowship!</p>

      <p>Warm regards,<br>The Shanthi Bhavan Team</p>
    </div>
    <div class="footer">
      <p>Shanthi Bhavan Children's Project<br>
      This is an automated email. Please do not reply directly.</p>
    </div>
  </div>
</body>
</html>`;

    return this.sendEmail({
      to: data.email,
      subject: 'Fellowship Payment Reminder - Shanthi Bhavan',
      html
    });
  }

  async sendFellowshipPaused(data: {
    email: string;
    subscriberName: string;
    reason?: string;
  }): Promise<boolean> {
    const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #757575; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Fellowship Subscription Paused</h1>
    </div>
    <div class="content">
      <p>Dear ${data.subscriberName},</p>
      <p>Your Shanthi Bhavan Fellowship subscription has been paused.</p>
      ${data.reason ? `<p><strong>Reason:</strong> ${data.reason}</p>` : ''}
      <p>You can resume your subscription at any time by contacting us or logging into your account.</p>
      <p>We hope to welcome you back soon!</p>

      <p>Best regards,<br>The Shanthi Bhavan Team</p>
    </div>
    <div class="footer">
      <p>Shanthi Bhavan Children's Project<br>
      This is an automated email. Please do not reply directly.</p>
    </div>
  </div>
</body>
</html>`;

    return this.sendEmail({
      to: data.email,
      subject: 'Fellowship Subscription Paused - Shanthi Bhavan',
      html
    });
  }

  async sendFellowshipCancelled(data: {
    email: string;
    subscriberName: string;
    reason?: string;
  }): Promise<boolean> {
    const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #d32f2f; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Fellowship Subscription Cancelled</h1>
    </div>
    <div class="content">
      <p>Dear ${data.subscriberName},</p>
      <p>Your Shanthi Bhavan Fellowship subscription has been cancelled.</p>
      ${data.reason ? `<p><strong>Reason:</strong> ${data.reason}</p>` : ''}
      <p>We are grateful for your past support and contributions. If you wish to rejoin in the future, we would be happy to welcome you back.</p>
      <p>Thank you for being part of our journey.</p>

      <p>Best regards,<br>The Shanthi Bhavan Team</p>
    </div>
    <div class="footer">
      <p>Shanthi Bhavan Children's Project<br>
      This is an automated email. Please do not reply directly.</p>
    </div>
  </div>
</body>
</html>`;

    return this.sendEmail({
      to: data.email,
      subject: 'Fellowship Subscription Cancelled - Shanthi Bhavan',
      html
    });
  }

  // Offline Donation Emails
  async sendOfflineDonationApproved(data: {
    email: string;
    donorName: string;
    amount: number;
    currency: string;
    receiptNumber?: string;
  }): Promise<boolean> {
    const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2e7d32; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .details { background: white; padding: 15px; margin: 15px 0; border-radius: 5px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    .amount { font-size: 24px; color: #2e7d32; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Donation Confirmed</h1>
    </div>
    <div class="content">
      <p>Dear ${data.donorName},</p>
      <p>We are pleased to confirm that your donation has been received and approved.</p>

      <div class="details">
        <h3>Donation Details</h3>
        <p><strong>Amount:</strong> <span class="amount">${data.currency} ${data.amount.toLocaleString()}</span></p>
        ${data.receiptNumber ? `<p><strong>Receipt Number:</strong> ${data.receiptNumber}</p>` : ''}
        <p><strong>Date:</strong> ${new Date().toLocaleDateString('en-IN', { dateStyle: 'long' })}</p>
      </div>

      <p>Thank you for your generous support!</p>

      <p>With gratitude,<br>The Shanthi Bhavan Team</p>
    </div>
    <div class="footer">
      <p>Shanthi Bhavan Children's Project<br>
      This is an automated email. Please do not reply directly.</p>
    </div>
  </div>
</body>
</html>`;

    return this.sendEmail({
      to: data.email,
      subject: `Donation Confirmed - ${data.currency} ${data.amount.toLocaleString()}`,
      html
    });
  }

  async sendOfflineDonationRejected(data: {
    email: string;
    donorName: string;
    amount: number;
    currency: string;
    reason?: string;
  }): Promise<boolean> {
    const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #d32f2f; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Donation Could Not Be Processed</h1>
    </div>
    <div class="content">
      <p>Dear ${data.donorName},</p>
      <p>We regret to inform you that your donation of <strong>${data.currency} ${data.amount.toLocaleString()}</strong> could not be processed.</p>
      ${data.reason ? `<p><strong>Reason:</strong> ${data.reason}</p>` : ''}
      <p>Please contact us if you have any questions or would like to make another donation.</p>

      <p>Best regards,<br>The Shanthi Bhavan Team</p>
    </div>
    <div class="footer">
      <p>Shanthi Bhavan Children's Project<br>
      This is an automated email. Please do not reply directly.</p>
    </div>
  </div>
</body>
</html>`;

    return this.sendEmail({
      to: data.email,
      subject: 'Donation Issue - Shanthi Bhavan',
      html
    });
  }
}

// Export singleton instance
export const emailService = new EmailService();
export default emailService;
