import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteConfig } from "@/config/siteConfig";
import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const FaqSection: React.FC = () => {
  return (
    <section className="bg-[#F7F4EE] py-16 md:py-24 border-b border-[#DDDCD4]">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5E7DA] border border-[#DDDCD4] text-[#242621] text-xs font-semibold mb-3 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#A43F2B]" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.14] font-bold tracking-tight text-[#242621]">
            Frequently asked questions.
          </h2>
          <p className="text-base sm:text-lg text-[#62665E] mt-2.5">
            Straightforward answers about our development approach, scope estimation, and in-house products.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {siteConfig.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[#DDDCD4] rounded-xl px-5 bg-[#FFFFFF] data-[state=open]:border-[#A43F2B]/40 data-[state=open]:shadow-subtle transition-all"
              >
                <AccordionTrigger className="text-left font-sans text-base font-semibold text-[#242621] py-4 hover:no-underline hover:text-[#A43F2B]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#62665E] leading-relaxed pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center text-xs md:text-sm text-[#62665E]">
            Have another question about your specific workflow?{" "}
            <Link to="/contact" className="text-[#A43F2B] font-semibold underline hover:text-[#8C3423]">
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
