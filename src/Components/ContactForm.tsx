import { useState } from "react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="w-full bg-neutral-100/50 dark:bg-neutral-900/40 rounded-3xl border border-neutral-200 dark:border-white/5 p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-6">Let's Work Together</h2>
      
      <form 
        action="https://formsubmit.co/ajayyadav9002341@gmail.com" 
        method="POST"
        onSubmit={() => setIsSubmitting(true)}
        className="space-y-5"
      >
        <input type="hidden" name="_subject" value="New submission from your portfolio!" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-neutral-900 dark:text-neutral-200">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              required 
              placeholder="Your Name"
              className="w-full bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl px-4 py-3 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-neutral-900 dark:text-neutral-200">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
              placeholder="Your Email"
              className="w-full bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl px-4 py-3 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-neutral-900 dark:text-neutral-200">
            Service <span className="text-red-500">*</span>
          </label>
          <select 
            name="service" 
            id="service" 
            required 
            className="w-full bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow appearance-none"
          >
            <option value="" disabled selected>Something in mind?</option>
            <option value="Web Development">Web Development</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Full Stack Development">Full Stack Development</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-neutral-900 dark:text-neutral-200">
            Explain Your Idea <span className="text-red-500">*</span>
          </label>
          <textarea 
            name="message" 
            id="message" 
            rows={4} 
            required 
            placeholder="Enter Your Idea"
            className="w-full bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl px-4 py-3 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-none"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 px-6 rounded-xl transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
