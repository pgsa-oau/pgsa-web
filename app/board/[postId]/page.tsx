/* eslint-disable @next/next/no-img-element */
// "use client";

import React from "react";
import { Poppins as FontSans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { fetchNews, fetchNewsDetails, sanitizeContent } from "@/app/utils";
import { post } from "@/app/types";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: "400",
});

const Page = async ({ params }: { params: { postId: string } }) => {
    const newsData = await fetchNewsDetails(params.postId as string);

    return (
        <TracingBeam className="px-6 relative z-40">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative z-50">
                <div className="mb-10">

                    <h1 className={twMerge(fontSans.variable, "text-4xl mb-4")}>
                        {newsData.title}
                    </h1>

                    <div className="text-sm prose prose-sm dark:prose-invert">
                        <img
                            src={newsData.thumbnail}
                            alt={newsData.title}
                            className="rounded-lg mb-10 object-cover"
                        />
                        <div className="post-content" dangerouslySetInnerHTML={{ __html: sanitizeContent(newsData.content) }}></div>
                    </div>
                </div>
            </div>
        </TracingBeam>
    );
};
export default Page;

export async function generateStaticParams() {
    const data = await fetchNews();

    return data.map((post: post) => ({
        postId: post.id.toString(),
    }));
}
