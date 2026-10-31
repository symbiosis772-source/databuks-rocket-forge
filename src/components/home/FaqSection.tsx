import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteConfig } from "@/config/siteConfig";
import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const FaqSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            Frequently asked questions.
          </h2>
          <p className="text-base text-slate-600 mt-2.5">
            Clear, honest answers about our development process, pricing factors, and technical delivery.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {siteConfig.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-slate-200 rounded-xl px-5 bg-[#F8FAFC] data-[state=open]:bg-white data-[state=open]:border-blue-200 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="text-left font-heading text-base font-semibold text-slate-900 py-4 hover:no-underline hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 leading-relaxed pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center text-xs md:text-sm text-slate-500">
            Have a question that isn't answered here?{" "}
            <Link to="/contact" className="text-blue-600 font-semibold hover:underline">
              Ask our team directly
            </Link>{" "}
            or message on WhatsApp.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

