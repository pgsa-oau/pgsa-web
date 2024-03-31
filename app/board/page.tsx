import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'

const NoticeBoard = () => {

  return (
      <div className="space-y-5">
          <section className="font-medium space-y-4">
              <Card>
                  <CardHeader>
                      <CardTitle className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400">
                          Notice Board
                      </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                      <CardDescription>
                          Welcome to the PGSA Notice Board. Here you will find
                          important information, updates, and announcements from
                          the PGSA. Be sure to check back regularly for the
                          latest updates.
                      </CardDescription>
                      <CardDescription className="flex flex-col min-h-[40vh] items-center justify-center font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400">
                          NEWS: The PGSA is pleased to announce the launch of
                          our new website. The website is designed to provide
                          you with easy access to information, resources, and
                          updates from the PGSA. Be sure to check it out and let
                          us know what you think.
                      </CardDescription>
                  </CardContent>
              </Card>
          </section>
          <section className="font-medium space-y-4">
              <Card>
                  <CardHeader>
                      <CardTitle className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400">
                          Safety and Security
                      </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                      <CardDescription>
                          Your safety and security is our top priority. We have
                          put in place measures to ensure that you are safe and
                          secure while on campus.
                      </CardDescription>
                      <CardDescription>
                          We have a team of security personnel who are always
                          available to attend to your security needs. You can
                          reach out to them via the following options:
                      </CardDescription>
                      <CardDescription>
                          <ul className="space-y-4">
                              <li>
                                  <strong>Emergency Contact:</strong> +234 123
                                  456 7890
                              </li>
                              <li>
                                  <strong>Security Hotline:</strong> +234 123
                                  456 7890
                              </li>
                              <li>
                                  <strong>
                                      Speak with a security personnel:
                                  </strong>{" "}
                                  +234 123 456 7890
                              </li>
                          </ul>
                      </CardDescription>
                  </CardContent>
              </Card>
          </section>
          <section className="font-medium space-y-4">
              <Card>
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
                          students feel welcome and included. You can reach out
                          to us if you have any concerns or suggestions on how
                          we can improve our diversity and inclusion efforts.
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
                                  <strong>Phone Contact:</strong> +234 123 456
                                  7890
                              </li>
                              <li>
                                  <strong>Administrators:</strong> +234 123 456
                                  7890
                              </li>
                          </ul>
                      </CardDescription>
                  </CardContent>
              </Card>
          </section>
      </div>
  );
}

export default NoticeBoard
