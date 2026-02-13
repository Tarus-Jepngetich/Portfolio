import { useState } from "react";
import Flower from "../assets/Flower.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", msg: "" });
  // state: idle | loading | success | error

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", msg: "Sending..." });

    try {
      const formEl = e.currentTarget;

      // Netlify requires URL encoded format
      const formData = new FormData(formEl);
      const body = new URLSearchParams(formData).toString();

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!res.ok) throw new Error("Failed to send message.");

      setStatus({
        state: "success",
        msg: "Message sent! I’ll get back to you soon 💌",
      });

      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        state: "error",
        msg: err?.message || "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <div className="relative bg-white border border-[var(--rule)] shadow-[0_18px_50px_rgba(0,0,0,0.10)] overflow-hidden">
      {/* Decorative art */}
      <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-90">
        <img
          src={Flower}
          alt="Decorative art mirrored"
          className="w-36 float-slow-alt scale-x-[-1]"
        />
      </div>

      {/* Page header strip */}
      <div className="px-6 py-3 border-b border-[var(--rule)] flex flex-wrap items-center justify-between gap-2">
        <span className="text-[11px] uppercase tracking-[0.26em] text-[var(--ink-soft)]">
          Contact Desk
        </span>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 text-[11px] uppercase tracking-[0.22em] border border-[var(--rule)] bg-[var(--mint)]/60 text-[var(--ink)]">
            Collaborate
          </span>
          <span className="px-3 py-1 text-[11px] uppercase tracking-[0.22em] border border-[var(--rule)] bg-[var(--peach)]/60 text-[var(--ink)]">
            Say Hello
          </span>
        </div>

        <span className="text-[11px] uppercase tracking-[0.26em] text-[var(--ink-soft)]">
          The Tarus Gazette
        </span>
      </div>

      <div className="p-6 md:p-10">
        <h2 className="font-serif text-[var(--ink)] text-4xl md:text-5xl leading-tight mb-4 text-center">
          Get in Touch 💌
        </h2>

        <p className="font-serif text-center text-[var(--ink-soft)] max-w-3xl mx-auto mb-10">
          Let’s collaborate, connect, or just share ideas — I’d love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left column */}
          <aside className="md:col-span-4">
            <div className="border border-[var(--rule)] p-5">
              <h3 className="font-serif text-xl text-[var(--ink)] mb-2">Details</h3>
              <div className="rule my-3" />

              <ul className="font-serif text-sm text-[var(--ink-soft)] space-y-3">
                <li>
                  <span className="uppercase tracking-[0.18em] text-[11px] text-[var(--ink-soft)]">
                    Email
                  </span>
                  <div className="text-[var(--ink)] font-semibold">
                    mercytarus644@gmail.com
                  </div>
                </li>

                <li>
                  <span className="uppercase tracking-[0.18em] text-[11px] text-[var(--ink-soft)]">
                    Location
                  </span>
                  <div className="text-[var(--ink)] font-semibold">
                    Brisbane • Australia
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          {/* Right column */}
          <div className="md:col-span-8">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              className="border border-[var(--rule)] p-6 md:p-8 bg-[var(--paper)]"
            >
              {/* Required hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    Your Name
                  </span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    type="text"
                    placeholder="Tarus Gazette Reader's Name"
                    className="px-4 py-3 border border-[var(--rule)] bg-white text-[var(--ink)] outline-none focus:ring-2 focus:ring-[var(--mint)]"
                    required
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    Your Email
                  </span>
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    placeholder="reader@email.com"
                    className="px-4 py-3 border border-[var(--rule)] bg-white text-[var(--ink)] outline-none focus:ring-2 focus:ring-[var(--mint)]"
                    required
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 mt-4">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                  Message
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows="5"
                  placeholder="Write your message here..."
                  className="px-4 py-3 border border-[var(--rule)] bg-white text-[var(--ink)] outline-none focus:ring-2 focus:ring-[var(--peach)]"
                  required
                />
              </label>

              {status.state !== "idle" && (
                <div
                  className={`mt-4 border border-[var(--rule)] px-4 py-3 font-serif text-sm ${
                    status.state === "success" ? "bg-[var(--mint)]/30" : ""
                  } ${status.state === "error" ? "bg-[var(--peach)]/30" : ""}`}
                >
                  {status.msg}
                </div>
              )}

              <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
                <span className="text-xs text-[var(--ink-soft)] font-serif">
                  Response time: usually within 24–48 hours.
                </span>

                <button
                  type="submit"
                  disabled={status.state === "loading"}
                  className="px-6 py-3 border border-[var(--ink)] bg-[var(--ink)] text-white text-sm font-semibold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.state === "loading" ? "Sending..." : "Send Message ✉️"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
