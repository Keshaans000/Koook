import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  organizationName: z.string().min(1, "Organization name is required"),
  industryType: z.string().min(1, "Industry type is required"),
  businessWebsite: z.string().optional(),
  socialMediaHandles: z.string().optional(),
  fullName: z.string().min(1, "Full name is required"),
  title: z.string().optional(),
  email: z.string().email("Valid email address is required"),
  phone: z.string().optional(),
  interest: z.string().min(1, "Please describe your interest"),
  sponsorshipBenefits: z.array(z.string()).min(1, "Please select at least one benefit"),
  budgetTier: z.string().min(1, "Please select a budget tier"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  formType: 'sponsorship' | 'grants';
}

const sponsorshipBenefitOptions = [
  "Logo placement on DECA merchandise",
  "Social media recognition",
  "Access to student talent/internships",
  "Speaking or event opportunities",
  "Community involvement/CSR",
  "Advertisement spaces in Wayzata School store",
  "Product retail in Wayzata School Store",
  "Other (please specify in interest section)"
];

const industryOptions = [
  "Retail",
  "Finance",
  "Food Service",
  "Technology",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Real Estate",
  "Professional Services",
  "Nonprofit",
  "Government",
  "Other"
];

const budgetOptions = [
  "Under $1,000",
  "$1,000–$3,000",
  "$3,000–$5,000",
  "$5,000+",
  "Not sure yet, please send more information"
];

export default function ContactForm({ formType }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      organizationName: "",
      industryType: "",
      businessWebsite: "",
      socialMediaHandles: "",
      fullName: "",
      title: "",
      email: "",
      phone: "",
      interest: "",
      sponsorshipBenefits: [],
      budgetTier: "",
    },
  });

  const showManualInstructions = (emailInfo: string) => {
    // Create a temporary textarea to show the email content
    const textarea = document.createElement('textarea');
    textarea.value = emailInfo;
    textarea.style.position = 'fixed';
    textarea.style.top = '50%';
    textarea.style.left = '50%';
    textarea.style.transform = 'translate(-50%, -50%)';
    textarea.style.width = '80%';
    textarea.style.height = '60%';
    textarea.style.zIndex = '10000';
    textarea.style.backgroundColor = 'white';
    textarea.style.border = '2px solid #333';
    textarea.style.padding = '20px';
    textarea.style.fontSize = '14px';
    document.body.appendChild(textarea);
    textarea.select();
    
    toast({
      title: "Copy This Email Content",
      description: "Select all the text in the box that appeared and copy it to send manually. Close the box when done.",
    });
    
    // Remove the textarea after 30 seconds
    setTimeout(() => {
      if (document.body.contains(textarea)) {
        document.body.removeChild(textarea);
      }
    }, 30000);
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Use Web3Forms for reliable email delivery
      const formData = new FormData();
      formData.append('access_key', '50a78595-e9fd-45ed-b860-898d5eaf6ace');
      formData.append('subject', `New ${formType} inquiry from ${data.organizationName}`);
      formData.append('from_name', data.fullName);
      formData.append('email', data.email);
      
      // Add all form fields to the email
      const emailBody = `
Business Information:
Organization: ${data.organizationName}
Industry: ${data.industryType}
Website: ${data.businessWebsite || 'Not provided'}
Social Media: ${data.socialMediaHandles || 'Not provided'}

Contact Information:
Name: ${data.fullName}
Title: ${data.title || 'Not provided'}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}

Interest Details:
Interest: ${data.interest}
Benefits Requested: ${data.sponsorshipBenefits.join(', ')}
Budget Tier: ${data.budgetTier}
      `;
      
      formData.append('message', emailBody);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Inquiry Sent Successfully!",
          description: "Your inquiry has been sent to our team. We'll get back to you soon.",
        });
        form.reset();
        return;
      }
      
      throw new Error('Email service unavailable');
      
    } catch (error) {
      console.log('Primary email service failed, using backup method...');
      
      // Direct Gmail backup method
      const subject = `New ${formType} inquiry from ${data.organizationName}`;
      const body = `
Business Information:
Organization: ${data.organizationName}
Industry: ${data.industryType}
Website: ${data.businessWebsite || 'Not provided'}
Social Media: ${data.socialMediaHandles || 'Not provided'}

Contact Information:
Name: ${data.fullName}
Title: ${data.title || 'Not provided'}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}

Interest Details:
Interest: ${data.interest}
Benefits Requested: ${data.sponsorshipBenefits.join(', ')}
Budget Tier: ${data.budgetTier}
      `.trim();

      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=wayzata.deca@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      try {
        window.open(gmailLink, '_blank');
        toast({
          title: "Gmail Opened",
          description: "Gmail has opened with your inquiry details. Please send the email to complete your submission.",
        });
        form.reset();
      } catch {
        // Copy to clipboard as final fallback
        const emailInfo = `TO: wayzata.deca@gmail.com\nSUBJECT: ${subject}\n\n${body}`;
        
        try {
          await navigator.clipboard.writeText(emailInfo);
          toast({
            title: "Email Details Copied",
            description: "Your inquiry details have been copied to clipboard. Please paste into your email and send to wayzata.deca@gmail.com",
          });
          form.reset();
        } catch {
          toast({
            title: "Please Email Directly",
            description: "Please send your inquiry directly to wayzata.deca@gmail.com with the form details.",
            variant: "destructive",
          });
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-2xl font-semibold text-[#003366] mb-6">
        Contact Us for {formType === 'sponsorship' ? 'Sponsorship' : 'Grant'} Opportunities
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Business Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="organizationName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization/Business Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter organization name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="industryType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry Type *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {industryOptions.map((industry) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="businessWebsite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Website</FormLabel>
                    <FormControl>
                      <Input placeholder="https://www.example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="socialMediaHandles"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Social Media Handles</FormLabel>
                    <FormControl>
                      <Input placeholder="@company, LinkedIn, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Primary Contact Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title/Role at Organization</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Marketing Manager" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email@company.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="(555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Interest Level & Goals */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Interest Level & Goals</h3>
            
            <FormField
              control={form.control}
              name="interest"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>What interests you about partnering with Wayzata DECA? *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Please describe what interests you about partnering with our DECA chapter..."
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sponsorshipBenefits"
              render={() => (
                <FormItem className="mb-4">
                  <FormLabel>Which sponsorship benefits are most appealing to your organization? *</FormLabel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    {sponsorshipBenefitOptions.map((benefit) => (
                      <FormField
                        key={benefit}
                        control={form.control}
                        name="sponsorshipBenefits"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={benefit}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(benefit)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, benefit])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== benefit
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {benefit}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budgetTier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estimated Sponsorship Budget or Tier of Interest *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget tier" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {budgetOptions.map((budget) => (
                        <SelectItem key={budget} value={budget}>
                          {budget}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-[#003366] hover:bg-[#004080] text-white py-3"
          >
            {isSubmitting ? "Sending..." : `Submit ${formType === 'sponsorship' ? 'Sponsorship' : 'Grant'} Inquiry`}
          </Button>
        </form>
      </Form>
    </div>
  );
}