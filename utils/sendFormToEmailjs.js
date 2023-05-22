import emailjs from "@emailjs/browser";

export const sendFormToEmailjs = async (form) => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    return;
  } catch (err) {
    return null;
  }
};
