import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Container from "./Container";

const faqs = [
  {
    question: "Είναι εμπιστευτικά όσα συζητάμε στη θεραπεία;",
    answer:
      "Η εμπιστευτικότητα αποτελεί βασικό μέρος της θεραπευτικής σχέσης. Όσα συζητούνται στο πλαίσιο της ψυχοθεραπείας παραμένουν απόρρητα, με τις εξαιρέσεις που προβλέπονται από το επαγγελματικό και δεοντολογικό πλαίσιο.",
  },
  {
    question: "Πώς μπορεί να με βοηθήσει ένας ψυχοθεραπευτής;",
    answer:
      "Η ψυχοθεραπεία προσφέρει έναν ασφαλή και υποστηρικτικό χώρο στον οποίο μπορεί κανείς να διερευνήσει σκέψεις, συναισθήματα και δυσκολίες, με τη βοήθεια ενός κατάλληλα εκπαιδευμένου επαγγελματία.",
  },
  {
    question: "Πώς πραγματοποιείται η θεραπευτική διαδικασία;",
    answer:
      "Η θεραπευτική διαδικασία διαμορφώνεται μέσα από τη συνεργασία θεραπευτή και θεραπευόμενου και προσαρμόζεται στις ανάγκες, στους στόχους και στον προσωπικό ρυθμό κάθε ανθρώπου.",
  },
  {
    question: "Πόσο διαρκεί η ψυχοθεραπεία;",
    answer:
      "Η συνολική διάρκεια της ψυχοθεραπείας δεν είναι ίδια για όλους. Εξαρτάται από τις ανάγκες, τους θεραπευτικούς στόχους και την πορεία της συνεργασίας.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section className="bg-background py-20">
      <Container>
        <div className="max-w-5xl">
          <div className="flex items-center gap-8">
            <h2 className="shrink-0 text-3xl font-semibold text-brand">
              Συχνές Ερωτήσεις
            </h2>

            <div aria-hidden="true" className="h-[2px] flex-1 bg-brand" />
          </div>

          <div className="mt-10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;

              return (
                <div key={faq.question} className="border-b-2 border-brand">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => handleToggle(index)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-medium text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    >
                      <span>{faq.question}</span>

                      <ChevronDown
                        aria-hidden="true"
                        className={`h-5 w-5 shrink-0 transition-transform duration-300 motion-reduce:transition-none ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div id={answerId} className="pb-6 pr-12">
                        <p className="max-w-4xl leading-7 text-text">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
