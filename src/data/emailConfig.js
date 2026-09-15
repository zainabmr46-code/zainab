// ────────────────────────────────────────────────────────────
// Contact form delivery, powered by EmailJS (no backend needed).
//
// 1. Create a free account at https://www.emailjs.com
// 2. Add an Email Service (e.g. Gmail) → copy its Service ID
// 3. Create an Email Template with {{name}}, {{email}}, {{message}}
//    variables → copy its Template ID
// 4. Account → General → copy your Public Key
// 5. Paste all three below. That's it — the form in
//    src/pages/Contact.jsx already calls emailjs.send() with these.
//
// Until you fill these in, the form stays in demo mode: it
// validates and shows a success state, but doesn't send anything.
// ────────────────────────────────────────────────────────────

export const emailConfig = {
  serviceId: "",   // e.g. "service_abc1234"
  templateId: "",  // e.g. "template_xyz9876"
  publicKey: "",   // e.g. "AbCdEfGhIjKlMnOp"
};

export const isEmailConfigured =
  Boolean(emailConfig.serviceId) &&
  Boolean(emailConfig.templateId) &&
  Boolean(emailConfig.publicKey);
