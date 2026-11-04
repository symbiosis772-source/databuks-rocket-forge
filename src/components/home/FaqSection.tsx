import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteConfig } from "@/config/siteConfig";
import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const FaqSection: React.FC = () => {
  return (
    <section className="bg-[#FAFAFA] dark:bg-[#090909] py-16 md:py-24 border-b border-[#DADADA] dark:border-[#303030] transition-colors duration-200">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F1F1F1] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] text-[#111111] dark:text-[#F5F5F5] text-xs font-semibold mb-3 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#111111] dark:text-[#F5F5F5]" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.14] font-bold tracking-tight text-[#111111] dark:text-[#F5F5F5]">
            Frequently asked questions.
          </h2>
          <p className="text-base sm:text-lg text-[#555555] dark:text-[#B5B5B5] mt-2.5">
            Straightforward answers about our development approach, scope estimation, and in-house products.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {siteConfig.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[#DADADA] dark:border-[#303030] rounded-xl px-5 bg-[#FFFFFF] dark:bg-[#171717] data-[state=open]:border-[#111111] dark:data-[state=open]:border-[#F5F5F5] data-[state=open]:shadow-subtle transition-all"
              >
                <AccordionTrigger className="text-left font-sans text-base font-semibold text-[#111111] dark:text-[#F5F5F5] py-4 hover:no-underline hover:text-[#555555] dark:hover:text-[#E0E0E0] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#555555] dark:text-[#B5B5B5] leading-relaxed pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center text-xs md:text-sm text-[#555555] dark:text-[#B5B5B5]">
            Have another question about your specific workflow?{" "}
            <Link to="/contact" className="text-[#111111] dark:text-[#F5F5F5] font-semibold underline hover:opacity-80">
              Ask our engineering team directly
            </Link>{" "}
            or chat with us on WhatsApp.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
