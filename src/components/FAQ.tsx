import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_DATA } from '../types';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first question

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="content animate-fade-in max-w-6xl mx-auto px-4 sm:px-8 py-12 text-[var(--text-color)]">
      <section className="py-12">
        <div className="flex items-center gap-2 text-[var(--accent-amber)] font-semibold tracking-wider text-sm md:text-base uppercase mb-4">
          <HelpCircle className="w-5 h-5 text-[var(--accent-amber)]" />
          General FAQ
        </div>
        <h2 className="font-mono text-3xl md:text-5xl font-black tracking-tight mb-6">
          Got questions? We've got answers.
        </h2>
        <p className="text-base md:text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed mb-12 font-light">
          Can't find the answers you are looking for? Reach out to our student or faculty SPOC coordinators directly in our Contact section.
        </p>

        {/* FAQ ACCORDION LIST */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'bg-[var(--accent-amber)]/[0.02] border-[var(--accent-amber)]/30 shadow-lg'
                    : 'bg-[var(--glass-bg)] border-[var(--glass-border)] hover:border-[var(--accent-amber)]/20'
                }`}
              >
                {/* FAQ QUESTION HEADER */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors"
                >
                  <span className="text-base md:text-xl font-bold pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[var(--accent-amber)]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[var(--text-muted)] opacity-60" />
                    )}
                  </div>
                </button>

                {/* FAQ ANSWER COLLAPSIBLE PANEL */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 border-t border-[var(--glass-border)]' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-base md:text-lg text-[var(--text-muted)] leading-relaxed font-light">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
