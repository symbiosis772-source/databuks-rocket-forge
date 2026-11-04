import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteConfig } from "@/config/siteConfig";
import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const FaqSection: React.FC = () => {
  return (
    <section className="bg-[#080D16] py-16 md:py-24 border-b border-[#2A3850]">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101827] border border-[#2A3850] text-[#67E8F9] text-xs font-semibold mb-3 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#67E8F9]" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.14] font-bold tracking-tight text-[#F4F7FC]">
            Frequently asked questions.
          </h2>
          <p className="text-base sm:text-lg text-[#B5C1D3] mt-2.5">
            Straightforward answers about our development approach, scope estimation, and in-house products.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {siteConfig.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[#2A3850] rounded-xl px-5 bg-[#151F30] data-[state=open]:border-[#2563EB] data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left font-sans text-base font-semibold text-[#F4F7FC] py-4 hover:no-underline hover:text-[#67E8F9] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#B5C1D3] leading-relaxed pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center text-xs md:text-sm text-[#B5C1D3]">
            Have another question about your specific workflow?{" "}
            <Link to="/contact" className="text-[#67E8F9] font-semibold underline hover:text-[#93C5FD]">
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
