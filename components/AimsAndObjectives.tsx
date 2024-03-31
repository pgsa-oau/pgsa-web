import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { pageData } from "./pageData";

const AimsAndObjectives = () => {
    return (
        <Card className="shadow-lg md:font-medium">
            <CardHeader>
                <CardTitle className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400">
                    Aims and objectives
                </CardTitle>
            </CardHeader>

            <CardContent>
                <CardDescription>
                    {pageData.aimsAndObjectives.title}
                </CardDescription>
                <Accordion type="single" collapsible className="w-full pb-4">
                    {pageData.aimsAndObjectives.aims.map((aim) => (
                        <AccordionItem
                            className="py-1"
                            key={aim.id}
                            value={`${aim.id}`}
                        >
                            <AccordionTrigger className="text-left">
                                {aim.description}
                            </AccordionTrigger>
                            <AccordionContent>{aim.text}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <CardDescription>
                    {pageData.aimsAndObjectives.extraText}
                </CardDescription>
            </CardContent>
        </Card>
    );
};

export default AimsAndObjectives;
