"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import emailjs from "@emailjs/browser";
import { useState } from "react";

const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string().min(10),
});

const ContactUs = () => {
    const [feedback, setFeedback] = useState("");
    const [feedbackType, setFeedbackType] = useState("success");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        emailjs
            .send('service_4aav2wz', 'template_v3r9w5d', values, {
                publicKey: 'NF3T84lHdWPXpR3zP',
            })
            .then(
                () => {
                    setFeedback("Message sent successfully!");
                    form.reset();
                },
                (error) => {
                    setFeedbackType("error");
                    setFeedback("Message failed to send! Please try again.");
                    console.error(error);
                }
            );
    }

    return (
        <section className="w-full">
            <h2 className="text-center font-bold">Contact Us</h2>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5 w-full max-w-lg mx-auto"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="first name last name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is your name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="youremail@email.com"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is your email.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Type your message here." {...field} />
                                </FormControl>
                                <FormDescription>
                                    Type in your message.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {feedback &&
                        (feedbackType === "success" ? (
                            <div className="text-green-500">{feedback}</div>
                        ) : (
                            <div className="text-red-500">{feedback}</div>
                        ))}

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </section>
    );
};

export default ContactUs;
