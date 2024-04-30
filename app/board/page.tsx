import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const NoticeBoard = () => {
    return (
        <div className="space-y-5 relative z-50">
            <section className="font-medium space-y-4">
                <Card className="bg-transparent border-0">
                    <CardHeader>
                        <CardTitle className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400">
                            Notice Board
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <CardDescription>
                            Welcome to the PGSA Notice Board. Here you will find
                            important information, updates, and announcements
                            from the PGSA. Be sure to check back regularly for
                            the latest updates.
                        </CardDescription>

                        {dummyData.map((data) => (
                            <Link key={data.id} href={`/board/${data.id}`}>
                                <CardDescription className="p-4 rounded-lg shadow-xl dark:border-2 hover:border-emerald-300">
                                    <div className="flex flex-wrap justify-between items-center italic mb-4">
                                        <h3 className="font-bold">
                                            {data.author}
                                        </h3>
                                        <p className="text-xs">{data.date}</p>
                                    </div>

                                    <p className="text-sm">{data.summary}</p>
                                </CardDescription>
                            </Link>
                        ))}
                    </CardContent>
                </Card>
            </section>
            <section className="font-medium space-y-4">
                <Card className="bg-transparent border-0">
                    <CardHeader>
                        <CardTitle className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400">
                            Safety and Security
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <CardDescription>
                            Your safety and security is our top priority. We
                            have put in place measures to ensure that you are
                            safe and secure while on campus.
                        </CardDescription>
                        <CardDescription>
                            We have a team of security personnel who are always
                            available to attend to your security needs. You can
                            reach out to them via the following options:
                        </CardDescription>
                        <CardDescription>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Emergency Contact:</strong>{" "}
                                    +2348164031725 / +2347038675918
                                </li>
                            </ul>
                        </CardDescription>
                    </CardContent>
                </Card>
            </section>
            <section className="font-medium space-y-4">
                <Card className="bg-transparent border-0">
                    <CardHeader>
                        <CardTitle className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400">
                            Diversity and Inclusion
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <CardDescription>
                            We are committed to creating a diverse and inclusive
                            environment for all our students. We believe that
                            diversity and inclusion are essential for the growth
                            and development of our students.
                        </CardDescription>
                        <CardDescription>
                            We have put in place measures to ensure that all our
                            students feel welcome and included. You can reach
                            out to us if you have any concerns or suggestions on
                            how we can improve our diversity and inclusion
                            efforts.
                        </CardDescription>
                        <CardDescription>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Email:</strong>
                                    <a
                                        href="mailto:pgsaife@oauife.edu.ng"
                                        className="text-blue-500"
                                    >
                                        {" "}
                                        pgsaife@oauife.edu.ng{" "}
                                    </a>
                                </li>
                                <li>
                                    <strong>Phone Contact:</strong>{" "}
                                    +2348164031725 / +2347038675918
                                </li>
                            </ul>
                        </CardDescription>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
};

export default NoticeBoard;

const dummyData = [
    {
        author: "PGSA",
        date: "28/03/2024",
        summary:
            "NEWS: The PGSA is pleased to announce the launch of our new website. The website is designed to provide you with easy access to information, resources, and updates from the PGSA. Be sure to check it out and let us know what you think.",
        id: "1",
    },
    {
        author: "Student Affairs",
        date: "30/03/2024",
        summary:
            "UPDATE: We have updated our student policies. Please review them at your earliest convenience.",
        id: "2",
    },
    {
        author: "Academic Affairs",
        date: "01/04/2024",
        summary:
            "REMINDER: Course registration for the next semester begins next week. Please prepare accordingly.",
        id: "3",
    }
];
