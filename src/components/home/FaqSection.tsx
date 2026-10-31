import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteConfig } from "@/config/siteConfig";
import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const FaqSection: React.FC = () => {
  return (
    <section className="bg-[#F6F5EF] py-16 md:py-24 border-b border-[#D8E0D8]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5ECE5] border border-[#D8E0D8] text-[#123B32] text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#182822] font-heading">
            Frequently asked questions.
          </h2>
          <p className="text-base text-[#53635C] mt-2.5">
            Straightforward answers about our development approach, scope estimation, and technical delivery.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {siteConfig.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[#D8E0D8] rounded-xl px-5 bg-[#FFFFFF] data-[state=open]:border-[#123B32]/40 data-[state=open]:shadow-subtle transition-all"
              >
                <AccordionTrigger className="text-left font-heading text-base font-semibold text-[#182822] py-4 hover:no-underline hover:text-[#123B32]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#53635C] leading-relaxed pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center text-xs md:text-sm text-[#53635C]">
            Have another question about your specific workflow?{" "}
            <Link to="/contact" className="text-[#123B32] font-semibold underline">
              Ask our team directly
            </Link>{" "}
            or message us on WhatsApp.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
