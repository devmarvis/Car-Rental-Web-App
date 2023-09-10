import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import faqs from "../faqs"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

function FAQItem({question, answer}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div 
        onClick={toggleOpen}
        className={`p-4 px-9 w-full border-b rounded ${isOpen ? "bg-blue-50" : ""}`}>{/*faq item */}
            <div 
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-anchor-placement="bottom-bottom"
            className=" flex justify-between mb-2">{/*faq question */}
                <span className=" font-['Roboto'] font-semibold text-[#4477CE]">{question}</span>
                <span>
                    <FontAwesomeIcon
                    className={`${isOpen ? "" : "rotate-180"}`}
                    icon={faChevronUp}
                    />
                </span>
            </div>
            {isOpen && <div className=" font-['roboto'] text-sm tracking-wider leading-relaxed">{answer}</div>}
        </div>
    )
};

const FAQS = () => {
  return (
    <div className="w-full max-w-xl mx-auto mb-9">{/*FAQ Container */}
      {
        faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))
      }
    </div>
  )
}
export default FAQS