# Aria Voss — Portfolio

A dark, animated personal portfolio built with React, Framer Motion, React Three
Fiber, and an interactive tsParticles background — matching the brief's stack and
section list.

## What's inside

- **React 18 + Vite** — fast dev server, instant HMR
- **Tailwind CSS** — custom dark palette (`ink` / `mist` / `signal` / `molten`)
- **Framer Motion** — scroll reveals, staggered text, and a distinct page
  transition per route (`AnimatePresence` + `mode="wait"`)
- **React Three Fiber** — rotating wireframe hero scene that reacts to the
  cursor, disabled/simplified on mobile and for `prefers-reduced-motion`
- **tsParticles** — interactive particle field behind the hero, particle count
  scales down on mobile
- **React Router** — `/`, `/projects`, `/articles`, `/resume`, `/contact`
- Every section from the brief: hero, about, mid-page CTA, downloadable resume
  (with preview modal), filterable project grid, live "currently" status
  widget, validated contact form, featured articles, coding profiles, and
  social links

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) 18 or newer.

```bash
cd portfolio
npm install
npm run dev
```

Open the URL it prints (usually **http://localhost:5173**). The dev server
hot-reloads as you edit files.

Other scripts:

```bash
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

## 2. Make it yours

Almost everything text-based lives in **`src/data/content.js`** — your name,
bio, skills, projects, articles, coding-profile stats, and social links. Edit
that one file first.

- **Resume** — replace `public/resume.pdf` with your real PDF. The download
  button and preview modal on `/resume` already point at that path.
- **Colors/fonts** — `tailwind.config.js` (the `signal`/`molten`/`ink`/`mist`
  palette) and the Google Fonts import at the top of `src/index.css`.
- **Project images** — swap the `image` URLs in `content.js` for your own
  screenshots (drop files in `public/` and reference them as `/your-file.png`).

## 3. Wire up the contact form

The form validates client-side and shows loading/success/error states no
matter what. Actual delivery is wired through **EmailJS** (no backend to
host) and is off by default — you'll see a small "Demo mode" note on the
Contact page until you turn it on:

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. **Email Services** → add one (Gmail, Outlook, etc.) → copy its **Service ID**.
3. **Email Templates** → create one using `{{name}}`, `{{email}}`, and
   `{{message}}` variables → copy its **Template ID**.
4. **Account → General** → copy your **Public Key**.
5. Paste all three into `src/data/emailConfig.js`. The form will start
   sending for real immediately — no other code changes needed.

Prefer a different service or your own server instead? Swap the `emailjs.send(...)`
call in `src/pages/Contact.jsx`'s `handleSubmit` for a `fetch` to Formspree, or
to a Node/Express + Nodemailer endpoint you host separately (Vite only builds
the front end, so that endpoint needs its own hosting).

Either way, the `mailto:` link near the top of the page (driven by
`profile.email` in `content.js`) works immediately as a fallback.

## 4. Deploy

The app is a static build — any static host works.

**Vercel**
```bash
npm i -g vercel
vercel
```

**Netlify**
```bash
npm run build
# drag the dist/ folder into Netlify's dashboard, or:
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

Both platforms also support connecting the GitHub repo directly for
auto-deploys on push — set the build command to `npm run build` and the
publish/output directory to `dist`.

## Performance & accessibility notes already handled

- `prefers-reduced-motion` is respected globally — page transitions, scroll
  reveals, the 3D hero, and the particle field all fall back to static/near-
  static states.
- Particle count and 3D geometry detail both drop on narrow viewports.
- Routes aren't code-split by default (see the build warning about chunk
  size) — if you want to trim the initial bundle, swap the page imports in
  `src/App.jsx` for `React.lazy` + `Suspense`.
