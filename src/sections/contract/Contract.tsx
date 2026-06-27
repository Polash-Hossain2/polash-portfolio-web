"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Globe,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Contract() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-20 text-white"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="mt-4 text-slate-400">
            Ready to start your project? Let's build something amazing together.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Left Side */}
          <div className="lg:col-span-3">
            <Card className="rounded-2xl border border-slate-700 bg-slate-900 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Send me a message
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <Label className="mb-2 block text-slate-300">
                      Your Name
                    </Label>

                    <Input
                      placeholder="John Doe"
                      className="border-slate-700 bg-slate-950 text-white placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <Label className="mb-2 block text-slate-300">
                      Email Address
                    </Label>

                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="border-slate-700 bg-slate-950 text-white placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block text-slate-300">
                    Subject
                  </Label>

                  <Input
                    placeholder="Project discussion"
                    className="border-slate-700 bg-slate-950 text-white placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <Label className="mb-2 block text-slate-300">
                    Message
                  </Label>

                  <Textarea
                    rows={7}
                    placeholder="Tell me about your project..."
                    className="border-slate-700 bg-slate-950 text-white placeholder:text-slate-500"
                  />
                </div>

                <Button className="h-12 w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Side */}
          <div className="space-y-8 lg:col-span-2">
            {/* Contact Info */}
            <Card className="rounded-2xl border border-slate-700 bg-slate-900 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Contact Information
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20">
                    <Mail className="h-5 w-5 text-blue-500" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">Email</h4>

                    <p className="text-slate-400">
                      polash@gmail.com
                    </p>

                    <p className="text-sm text-slate-500">
                      Response within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/20">
                    <Phone className="h-5 w-5 text-green-500" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      WhatsApp
                    </h4>

                    <p className="text-slate-400">
                      +088 01733453433
                    </p>

                    <p className="text-sm text-slate-500">
                      Available for quick chats
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20">
                    <MapPin className="h-5 w-5 text-violet-500" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      Location
                    </h4>

                    <p className="text-slate-400">
                      Dhaka, Bangladesh
                    </p>

                    <p className="text-sm text-slate-500">
                      Open to remote work worldwide
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social */}
            <Card className="rounded-2xl border border-slate-700 bg-slate-900 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Connect with me
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex gap-4">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-12 w-12 rounded-full bg-slate-800 text-white hover:bg-blue-600"
                  >
                    <FaGithub className="h-5 w-5" />
                    
                  </Button>

                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-12 w-12 rounded-full bg-slate-800 text-white hover:bg-blue-600"
                  >
                    <FaLinkedin className="h-5 w-5" />
                    
                  </Button>

                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-12 w-12 rounded-full bg-slate-800 text-white hover:bg-blue-600"
                  >
                    <FaSquareFacebook className="h-5 w-5" />
                    
                  </Button>

                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-12 w-12 rounded-full bg-slate-800 text-white hover:bg-green-600"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}