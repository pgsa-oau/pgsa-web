import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { pageData } from "./pageData";

const AimsAndObjectives = () => {
    return (
        <div className="max-w-5xl">
            <h1 className="text-xl font-bold text-center pb-6">
                Aims and objectives
            </h1>
            <p>{pageData.aimsAndObjectives.title}</p>
            <Accordion type="single" collapsible className="w-full">
            {pageData.aimsAndObjectives.aims.map((aim) => (
                    <AccordionItem key={aim.id} value={`${aim.id}`}>
                        <AccordionTrigger>{aim.description}</AccordionTrigger>
                        <AccordionContent>
                            {aim.text}
                        </AccordionContent>
                    </AccordionItem>
            ))}

             </Accordion>
            <p className="py-4">{pageData.aimsAndObjectives.extraText}</p>
        </div>
    );
};

export default AimsAndObjectives;
