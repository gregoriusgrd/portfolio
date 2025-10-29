"use client";

import { useForm, ValidationError } from "@formspree/react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xovpdybk"); // check https://formspree.io/forms/xovpdybk/submissions

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center space-y-3 rounded-2xl border border-gray-200 p-6 text-center">
        <CheckCircle2 className="h-10 w-10 text-green-500" />
        <p className="font-medium text-gray-800">Message sent successfully!</p>
        <p className="text-sm text-gray-500">I’ll get back to you soon 👋</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-800"
        >
          Name
        </label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-800"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-800"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          rows={6}
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <Button
        type="submit"
        disabled={state.submitting}
        className="w-full cursor-pointer"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};
