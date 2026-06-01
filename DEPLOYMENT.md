# Take Your AI Website Live + Add a Free Database

This guide walks you from an AI-generated website (built with Claude / the Sassio
Next.js template in this repo) to a **live domain** with **automatic deploys** and a
**free database** for storing things like emails, phone numbers, and contact-form
submissions.

It targets the project in this repo: a **Next.js 14 (App Router)** site
(`Sassio-nextjs-v2.0`). The same steps apply to any Next.js site Claude generates.

**Time required:** ~10 minutes for deployment, ~10 more for the database.

---

## What you'll end up with

- Your site running on a public URL (e.g. `your-site.vercel.app`)
- A custom domain you own (e.g. `yourbusiness.com`)
- **Automatic deploys**: every change you push to GitHub instantly rebuilds and
  updates the live site — no terminal, no manual file uploads
- A professional **business email** on your domain (e.g. `hello@yourbusiness.com`)
- *(Optional)* A **free Postgres database** (Supabase) wired into your contact form,
  so visitor submissions are stored and visible in a dashboard

---

## Prerequisites (one-time setup)

Install these on your computer first:

| Tool | Why | Where |
|------|-----|-------|
| **Node.js** (LTS) | Runs/builds the Next.js site | <https://nodejs.org> |
| **Git** | Tracks your code and pushes to GitHub | <https://git-scm.com/downloads> |
| **A GitHub account** | Hosts your code; connects to the deploy platform | <https://github.com> |

Verify the installs in a terminal:

```bash
node --version   # should print v18.x or v20.x
git --version
```

---

## Part 1 — Get the site running locally

1. **Unzip the template** in this repo:
   `sassio-saas-software-app-nextjs-template-2024-06-11-00-49-16-utc.zip`.
   Inside you'll find a folder `Sassio-nextjs-v2.0-unzip-first/1.Sassio-Nextjs/` —
   that folder *is* the website.

2. Open a terminal **inside that folder** and install + run:

   ```bash
   npm install
   npm run dev
   ```

3. Open <http://localhost:3000> in your browser. You should see the site.
   Edit any file under `app/` and the page updates live.

> The scripts come from `package.json`: `dev` (local preview), `build` (production
> build), `start` (run the production build).

---

## Part 2 — Put your code on GitHub

The auto-deploy magic works by connecting your GitHub repo to a hosting platform.
Every push to GitHub → an automatic deploy.

1. Create a **new empty repository** on GitHub (e.g. `my-website`). Don't add a
   README — keep it empty.

2. In the Next.js project folder, initialize git and push:

   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/my-website.git
   git push -u origin main
   ```

> Already using this repo? It's a git repo already — just make sure the Next.js app
> files (not the zip) are committed, then push.

---

## Part 3 — Deploy to a live domain (Vercel)

Vercel is made by the creators of Next.js, has a **free Hobby tier**, gives you a
live HTTPS URL, and redeploys automatically on every push.

1. Go to <https://vercel.com> and **sign up with GitHub**.
2. Click **Add New → Project**, then **Import** your `my-website` repo.
3. Vercel auto-detects Next.js. Leave the defaults:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output:** (handled automatically)
4. Click **Deploy**. In ~1 minute you get a live URL like
   `https://my-website.vercel.app`.

**That's the auto-update part:** from now on, every `git push` to `main`
automatically rebuilds and updates the live site. No files to touch, no terminal
needed after this.

---

## Part 4 — Connect your custom domain

1. Buy a domain from any registrar (Namecheap, Cloudflare, GoDaddy, Google Domains, etc.).
2. In Vercel: open your project → **Settings → Domains → Add** → type
   `yourbusiness.com`.
3. Vercel shows you DNS records to set. In your registrar's DNS settings, add either:
   - An **A record** for the root domain pointing to Vercel's IP, **and/or**
   - A **CNAME** for `www` pointing to `cname.vercel-dns.com`.
4. Wait for DNS to propagate (minutes to a couple hours). Vercel auto-issues a free
   **SSL certificate**, so your site is `https://` automatically.

---

## Part 5 — Set up a business email (`you@yourbusiness.com`)

Domain registrars usually **don't** include mailboxes. Pick one:

| Option | Cost | Notes |
|--------|------|-------|
| **Zoho Mail** | Free tier | Free custom-domain email for a small number of users |
| **Cloudflare Email Routing** | Free | *Forwarding only* — sends `you@yourbusiness.com` to your Gmail; pair with "Send as" to reply |
| **Google Workspace** | Paid | Full Gmail/Drive/Calendar on your domain |
| **Microsoft 365** | Paid | Outlook + Office on your domain |

Setup is the same idea for all: verify domain ownership and add the provider's
**MX records** (plus SPF/DKIM TXT records for deliverability) in your registrar's
DNS panel.

---

## Part 6 — Add a free database (Supabase)

A database lets you **store anything submitted on your site** — emails, phone
numbers, contact messages — and view it in a dashboard. Supabase gives you a free
hosted **Postgres** database.

### 6.1 Create the database

1. Go to <https://supabase.com> → sign up → **New project**.
2. Give it a name and a strong database password; pick a region near your users.
3. Once it's ready, open the **SQL Editor** and create a table for submissions:

   ```sql
   create table contact_submissions (
     id          bigint generated always as identity primary key,
     name        text,
     email       text not null,
     phone       text,
     message     text,
     created_at  timestamptz default now()
   );
   ```

4. Get your keys from **Project Settings → API**:
   - **Project URL** (e.g. `https://xxxx.supabase.co`)
   - **anon public** key (and the **service_role** key for server-side writes)

### 6.2 Add the keys to your project

Create a `.env.local` file in the Next.js project root (this file is git-ignored —
never commit secrets):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Install the Supabase client:

```bash
npm install @supabase/supabase-js
```

### 6.3 Create an API route to store submissions

This template uses the **App Router**, so add a Route Handler at
`app/api/contact/route.ts`:

```ts
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

// Server-side client. The service_role key bypasses row-level security,
// so it must ONLY ever live on the server (never in client components).
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const { error } = await supabase
    .from("contact_submissions")
    .insert({ name, email, phone, message });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
```

### 6.4 Point the contact form at the API route

The contact pages live under `app/contact/contact-1/ ... contact-4/`. In whichever
one you use, make the form submit to the API route. Example handler for a client
component:

```tsx
async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = new FormData(e.currentTarget);

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      message: form.get("message"),
    }),
  });

  if (res.ok) {
    // show a success message
  } else {
    // show an error message
  }
}
```

> If the contact page is a server component, add `"use client";` at the top of the
> file so it can use `onSubmit`/state, or split the form into a small client component.

### 6.5 Add the keys to Vercel

Your local `.env.local` isn't deployed. In **Vercel → Settings → Environment
Variables**, add the same two variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

Redeploy (or just push a commit). Now submissions on your **live** site are saved
to Supabase. View them anytime in **Supabase → Table Editor → `contact_submissions`**.

---

## The everyday workflow (after setup)

1. Make changes to your site (locally or via Claude).
2. `git add . && git commit -m "Update" && git push`
3. Vercel rebuilds and your live site updates automatically — usually within a
   minute. No terminal commands on the server, no manual file uploads.

---

## Troubleshooting

| Problem | Fix |
|--------|-----|
| Build fails on Vercel | Run `npm run build` locally first; fix the errors it reports |
| Domain not working | DNS can take up to a few hours; recheck the A/CNAME records match Vercel exactly |
| No `https` | Wait for Vercel to finish issuing the SSL cert; ensure the domain status is "Valid" |
| Form saves nothing | Check the env vars exist **in Vercel**, and that the table/column names match the SQL |
| Secrets leaked | Never expose `SUPABASE_SERVICE_ROLE_KEY` in client code or commit `.env.local` |

---

## Security notes

- Keep the **service_role** key server-side only (API routes, env vars). For
  client-side reads, use the **anon** key plus Supabase **Row Level Security (RLS)**.
- Add basic validation and spam protection (e.g. a honeypot field or a CAPTCHA) to
  public forms before going live.
- Never commit `.env.local` or any file containing keys — it's already in
  `.gitignore`.
