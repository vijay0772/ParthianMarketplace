import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How do I start selling on Parthian Marketplace?",
      answer: "Getting started is easy! Simply sign up for an account, complete your seller profile with business details, and you can start listing your battery products. Upload product images, add specifications and pricing, and your products will be live on the marketplace."
    },
    {
      question: "What types of batteries can I sell or buy?",
      answer: "Parthian Marketplace supports all types of batteries including lithium-ion, lead-acid, alkaline, rechargeable batteries, automotive batteries, industrial batteries, and specialty batteries. Each listing can include detailed specifications to help buyers find exactly what they need."
    },
    {
      question: "What are the commission rates?",
      answer: "Commission rates vary by plan: Free plan charges 5% per sale, Professional plan charges 3% per sale, and Enterprise customers get custom commission rates based on their volume. All plans include secure payment processing with no hidden fees."
    },
    {
      question: "How does the payment process work?",
      answer: "Buyers make secure payments through our integrated payment gateway. For sellers, funds are held securely and released according to our payment schedule (typically 2-3 business days after delivery confirmation). All transactions are encrypted and protected."
    },
    {
      question: "Can I track my orders and inventory?",
      answer: "Yes! Sellers have access to a comprehensive dashboard where you can track inventory levels, manage orders, view sales analytics, and monitor product performance. Buyers can track their orders from purchase to delivery with real-time updates."
    },
    {
      question: "What kind of support is available?",
      answer: "We offer different support levels based on your plan. Free users get standard email support, Professional users get priority support with faster response times, and Enterprise customers get 24/7 premium support with a dedicated account manager."
    },
    {
      question: "How are sellers verified?",
      answer: "All sellers go through a verification process that includes business documentation review, identity verification, and compliance checks. Verified sellers receive a badge on their profile, helping buyers make informed decisions. Our admin team continuously monitors seller performance."
    },
    {
      question: "Can I customize my seller profile and storefront?",
      answer: "Absolutely! Professional and Enterprise plans offer enhanced customization options including custom branding, featured product sections, and personalized storefronts. You can add your logo, business description, policies, and showcase your best-selling products."
    },
    {
      question: "What happens if there's an issue with a transaction?",
      answer: "We have a robust dispute resolution process. Buyers and sellers can communicate through our platform, and our admin team is available to mediate any issues. We also offer buyer protection and seller protection policies to ensure fair outcomes."
    },
    {
      question: "Is there an API for integration?",
      answer: "Yes! Enterprise plan customers get access to our comprehensive API that allows you to integrate Parthian Marketplace with your existing systems, automate inventory management, sync orders, and create custom workflows."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <span className="text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Parthian Marketplace
          </p>
        </div>

        <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/40 shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/40">
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <p className="text-sm text-muted-foreground">
            Contact our support team at{" "}
            <a href="mailto:support@parthianmarketplace.com" className="text-primary hover:underline">
              support@parthianmarketplace.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
