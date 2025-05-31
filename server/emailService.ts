import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactFormData {
  organizationName: string;
  industryType: string;
  businessWebsite?: string;
  socialMediaHandles?: string;
  fullName: string;
  title?: string;
  email: string;
  phone?: string;
  interest: string;
  sponsorshipBenefits: string[];
  budgetTier: string;
  formType: 'sponsorship' | 'grants';
}

export async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  try {
    const benefitsList = formData.sponsorshipBenefits.join(', ');
    
    const msg = {
      to: 'wayzata.deca@gmail.com',
      from: 'noreply@wayzatadeca.org', // This should be a verified sender in SendGrid
      subject: `New ${formData.formType === 'sponsorship' ? 'Sponsorship' : 'Grant'} Inquiry from ${formData.organizationName}`,
      html: `
        <h2>New ${formData.formType === 'sponsorship' ? 'Sponsorship' : 'Grant'} Inquiry</h2>
        
        <h3>Basic Business Information</h3>
        <p><strong>Organization/Business Name:</strong> ${formData.organizationName}</p>
        <p><strong>Industry Type:</strong> ${formData.industryType}</p>
        ${formData.businessWebsite ? `<p><strong>Business Website:</strong> ${formData.businessWebsite}</p>` : ''}
        ${formData.socialMediaHandles ? `<p><strong>Social Media Handles:</strong> ${formData.socialMediaHandles}</p>` : ''}
        
        <h3>Primary Contact Information</h3>
        <p><strong>Full Name:</strong> ${formData.fullName}</p>
        ${formData.title ? `<p><strong>Title/Role:</strong> ${formData.title}</p>` : ''}
        <p><strong>Email Address:</strong> ${formData.email}</p>
        ${formData.phone ? `<p><strong>Phone Number:</strong> ${formData.phone}</p>` : ''}
        
        <h3>Interest Level & Goals</h3>
        <p><strong>What interests you about partnering with Wayzata DECA:</strong></p>
        <p>${formData.interest}</p>
        
        <p><strong>Sponsorship Benefits of Interest:</strong> ${benefitsList}</p>
        <p><strong>Estimated Budget Tier:</strong> ${formData.budgetTier}</p>
        
        <hr>
        <p><em>This message was sent from the Wayzata DECA website contact form.</em></p>
      `,
    };

    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}