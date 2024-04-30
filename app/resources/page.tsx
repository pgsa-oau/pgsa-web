import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";


const Resources = () => {

    return (
        <div className="space-y-5 relative z-50">
            <section className="font-medium space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400">
                            Publications
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <CardDescription>
                            Welcome to the PGSA Publications section. Here you
                            will find important publications, articles, and
                            research papers from members of the OAU postgraduate
                            community. Be sure to check back regularly for the
                            latest publications.
                        </CardDescription>
                        <CardDescription className="flex flex-col min-h-[40vh] items-center justify-center text-indigo-700 text-2xl font-extrabold">
                            This section will contain a list of publications
                            when available.
                        </CardDescription>
                    </CardContent>
                </Card>
            </section>
            <section className="font-medium space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400">
                            Admissions
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <CardDescription>
                            For admission related information don&apos;t
                            hesitate to check the PG college website:{" "}
                            <Link
                                href={
                                    "http://pgcollege.oauife.edu.ng/"
                                }
                                target="_blank"
                                className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400"
                            >
                                OAU PG School
                            </Link>
                        </CardDescription>
                        <CardDescription>
                            If you have further questions, please feel free to
                            reach out to us.
                        </CardDescription>
                    </CardContent>
                </Card>
            </section>
            <section className="font-medium space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400">
                            Obafemi Awolowo University
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <CardDescription>
                            To find important information, updates, and
                            announcements from the university. Be sure to check
                            the school website:{" "}
                            <Link
                                href={"https://oauife.edu.ng"}
                                target="_blank"
                                className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400"
                            >
                                Obafemi Awolowo University
                            </Link>
                        </CardDescription>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
};

export default Resources;
