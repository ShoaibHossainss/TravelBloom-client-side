import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_3tyaa8e", // Replace with your EmailJS Service ID
        "template_y3emlkc", // Replace with your EmailJS Template ID
        {
          to_name: "Recipient's Name",   // Replace with the recipient's name or admin's name
          from_name: formData.name,     // Name entered in the form
          message: formData.message,    // Message entered in the form
          reply_to: formData.email,        // Email entered in the form
        },
        "B0Q6U6QECFeWgY3Jb" // Replace with your EmailJS Public Key
      );
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 mx-6">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn text-white bg-blue-500 hover:bg-blue-600"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
