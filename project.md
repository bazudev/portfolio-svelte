# portfolio-svelte — Project Knowledge

> Personal developer portfolio for **Bazudewa** (alias: `boxgramer`).  
> Built with SvelteKit, statically pre-rendered, styled with TailwindCSS v4.

---

## 👤 Owner / Identity

| Field | Value |
|---|---|
| Name | Bazudewa |
| Alias | Boxgramer |
| GitHub | https://github.com/boxgramer |
| LinkedIn | https://id.linkedin.com/in/boxgramer/en |
| WhatsApp | +62 813-3820-9217 |
| X (Twitter) | https://x.com/BoxGramer |
| Email | boxgramer@gmail.com |

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | SvelteKit 2 + Svelte 5 |
| Language | TypeScript 5 |
| Styling | TailwindCSS v4 (@tailwindcss/vite) |
| Bundler | Vite 6 |
| Markdown parser | marked v16 |
| Icons | svelte-hero-icons v5 |
| Deployment adapter | @sveltejs/adapter-static (outputs to build/) |
| Node types | @types/node |

---

## 📦 Package Scripts

```bash
npm run dev        # Vite dev server
npm run build      # Static production build → ./build
npm run preview    # Preview production build locally
npm run check      # svelte-kit sync + svelte-check (type checking)
npm run prepare    # svelte-kit sync (runs automatically on install)
```

---

## ⚙️ Configuration

### svelte.config.js
- Adapter: @sveltejs/adapter-static → output dir build/
- prerender.entries: ['*'] — all routes pre-rendered
- Path aliases:
  - $lib → src/lib
  - $assets → src/lib/assets
  - $routes → src/routes

### vite.config.ts
- Uses @sveltejs/vite-plugin-svelte and @tailwindcss/vite

### +layout.js (root)
- export const prerender = true — enables static generation globally

---

## 📁 Directory Structure

```
portfolio-svelte/
├── src/
│   ├── app.html                    # Root HTML shell
│   ├── app.css                     # Global CSS (minimal)
│   ├── app.d.ts                    # SvelteKit type declarations
│   ├── data/
│   │   ├── project_client.ts       # Freelance/client project data array
│   │   └── writeups.ts             # Writeup metadata array
│   ├── lib/
│   │   ├── index.ts                # (empty – placeholder for $lib exports)
│   │   ├── assets/
│   │   │   ├── avatar.png          # Profile avatar (used in Header logo)
│   │   │   └── rimba.png           # Hero section large photo (~14MB)
│   │   ├── server/
│   │   │   └── markdown.ts         # Server-only: reads .md files → HTML via marked
│   │   ├── writeups/               # Raw markdown writeup files
│   │   │   ├── writeup-20250422.md
│   │   │   ├── writeup-20250425.md
│   │   │   ├── writeup-20250426.md
│   │   │   ├── writeup-20250427.md
│   │   │   ├── writeup-20250429.md
│   │   │   ├── writeup-20250430.md
│   │   │   ├── writeup-20250501.md
│   │   │   ├── writeup-20250510.md
│   │   │   ├── writeup-20250520.md
│   │   │   └── writeups.md         # (general/template)
│   │   └── components/
│   │       ├── layout/
│   │       │   ├── Header.svelte   # Sticky top nav with hash-section detection
│   │       │   └── Footer.svelte   # Simple footer with optional nav links
│   │       └── ui/
│   │           ├── Home.svelte     # Hero + animated role + experience timeline
│   │           ├── Writeup.svelte  # Writeup card grid with show/hide toggle
│   │           ├── Projects.svelte # Tabbed project list (freelance / open-source)
│   │           └── Contact.svelte  # Floating WhatsApp button (fixed bottom-right)
│   └── routes/
│       ├── +layout.js              # prerender = true
│       ├── +layout.svelte          # Root layout wrapper (empty slot)
│       ├── +page.svelte            # Main homepage
│       ├── writeups/
│       │   └── [slug]/
│       │       ├── +page.server.ts # Load writeup by slug → markdown → HTML; prev/next
│       │       └── +page.svelte    # Renders @html content
│       └── landings/
│           └── web/
│               └── +page.svelte   # Standalone software-house landing page
├── static/                         # Public static assets (project screenshots)
│   ├── favicon.png
│   ├── box-cache-tester/
│   ├── box-downloader/
│   ├── brutoforce-testing/
│   ├── cbt/
│   ├── education/
│   ├── pos/
│   └── trem/
├── package.json
├── svelte.config.js
├── tailwind.config.cjs
├── vite.config.ts
├── tsconfig.json
└── global.d.ts
```

---

## 🖥️ Routes & Pages

| Route | File | Description |
|---|---|---|
| / | src/routes/+page.svelte | Main portfolio page |
| /writeups/[slug] | src/routes/writeups/[slug]/+page.svelte | Individual writeup detail |
| /landings/web | src/routes/landings/web/+page.svelte | Client-facing software house landing |

---

## 🧩 Components

### Header.svelte
- Props: title: string | null, nextUrl: string | null, prevUrl: string | null
- Sticky top bar (z-50, h-20)
- Logo: avatar.png + "Boxgramer" brand name → clicking navigates to /
- Mode 1 (no title prop): Shows main nav links (Home / Writeup / Project) with hash-based active underline animation
- Mode 2 (with title prop): Shows writeup title + prev/next arrow navigation using svelte-hero-icons
- Tracks current hash via window.addEventListener('hashchange', ...)

### Footer.svelte
- Props: hasNav: boolean = true
- Shows copyright © 2023 Boxgramer
- When hasNav=true: Shows footer nav links
- When hasNav=false: Centered copyright only (used on writeup pages)
- BUG: Footer nav links have Writeup→#projects and Project→#writeups (swapped)

### Home.svelte
- No props
- Hero section: Full viewport height on desktop (md:min-h-screen)
- Background: bg-gradient-to-tr from-indigo-50 via-white to-indigo-100
- Left column: H1 name + animated typewriter role + bio paragraph + experience timeline
- Right column: rimba.png hero image + social link bar
- Animated role cycles through: Software Engineer, Backend Developer, Cybersecurity Enthusiast, Freelance Developer, Game Programmer
  - Typing speed: 90ms/char | Deleting: 60ms/char | Pause after full word: 1800ms
  - Blinking cursor rendered as inline-block element with CSS @keyframes blink
- Experience timeline (3 entries):
  1. Game Programmer at SLAB Game — April 2025–July 2025 (Godot, Roblox/Lua)
  2. Freelance Software Engineer — 2021–present (TALL Stack)
  3. Full Stack Developer at Primakara College — 2020–2021 (Laravel)
- Social links: GitHub (boxgramer), LinkedIn, WhatsApp (6281338209217), X (BoxGramer)
- NOTE: console.log(currentSection) debug line exists in Header.svelte line 21

### Writeup.svelte
- No props
- Imports from src/data/writeups.ts
- Sorts by id ascending
- Grid: 1 col → 2 col (sm) → 3 col (lg)
- Default visible: 6 cards; Show All / Hide toggle
- Each card: date, title (link to /writeups/[slug]), summary text

### Projects.svelte
- No props
- Two tabs: "Best Freelance Project" (client) / "Open Source Tools" (opensource)
- Default active tab: client
- Client projects from src/data/project_client.ts; show 3 by default
- Open source projects hardcoded inline; show 3 by default
- Each client card: horizontal scrollable image strip, title, description, "Request Demo" → WhatsApp
- Each open source card: image, title, description, "View on GitHub"

### Contact.svelte
- Props: whatsappNumber = '6281338209217'
- Fixed floating green WhatsApp button at bottom-6 right-6
- z-index: 1000

---

## 📊 Data: project_client.ts

Exports: projects (array of 4)

| # | Title | Year | Type | Stack |
|---|---|---|---|---|
| 1 | Education Physics App Android | 2025 | mobile and web | Flutter, Laravel, MySQL, FilamentPHP, PHP |
| 2 | POS System Web and Mobile | 2024 | web and mobile | Flutter, Laravel, MySQL, Livewire, AlpineJS, TailwindCSS |
| 3 | Invoices System | 2023 | web | Laravel, MySQL, Bootstrap |
| 4 | Exam System Android and Web | 2024 | web and mobile | Flutter, Laravel, MySQL |

Schema per project:
```ts
{
  title: string,
  description: string,
  images: string[],     // paths under /static/ (e.g. "/pos/dashboard.png")
  demoLink: string,     // WhatsApp link
  year: string,
  type: string,
  stacks: string[]
}
```

---

## 📊 Data: writeups.ts

Exports: writeups (array of 7)

| id | slug | title | date | file |
|---|---|---|---|---|
| 1 | web-shell-upload-obfuscated-file-extension | Web shell upload via obfuscated file extension | 2025-04-22 | writeup-20250422.md |
| 2 | web-cache-poisoning-multiple-headers | Web Cache Poisoning with multiple headers | 2025-04-25 | writeup-20250425.md |
| 3 | targeted-web-cache-poisoning-unknown-header | Targeted web cache poisoning using an unknown header | 2025-04-26 | writeup-20250426.md |
| 4 | web-cache-poisoning-unkeyed-query-parameter | Web cache poisoning via an unkeyed query parameter | 2025-04-27 | writeup-20250427.md |
| 5 | parameter-cloaking | Parameter Cloaking | 2025-04-29 | writeup-20250429.md |
| 6 | web-cache-poisoning-fat-get-request | Web cache poisoning via a fat GET request | 2025-04-30 | writeup-20250430.md |
| 7 | web-cache-poisoning-dom-vulnerability | Web cache poisoning to exploit a DOM vulnerability | 2025-05-10 | writeup-20250510.md |

Schema per writeup:
```ts
{
  id: number,
  slug: string,
  title: string,
  date: string,         // YYYY-MM-DD
  summary: string,
  url: string,          // /writeups/<slug>
  file: string          // filename in src/lib/writeups/
}
```

NOTE: writeup-20250501.md and writeup-20250520.md exist in src/lib/writeups/ but are NOT registered in writeups.ts (not publicly accessible).

---

## 🔒 Writeup System

### src/lib/server/markdown.ts
- Server-only utility (uses Node fs module)
- Reads file from src/lib/writeups/<fileName>
- Parses markdown to HTML via marked.parse()
- Returns { html: string }
- Throws Error if file not found

### +page.server.ts (writeups/[slug])
- prerender = true
- entries() generates all slug entries from writeups.ts for static prerender
- load() finds writeup by slug, loads markdown, returns html + metadata + prev/next URLs
- 404 if slug not found; 500 if markdown read fails

### +page.svelte (writeups/[slug])
- Renders {@html data.html} inside .content div
- Header with title + prev/next navigation
- Footer with hasNav=false

---

## 🏠 /landings/web Page

Standalone marketing page for software house persona:
- Hero: "Custom Software Solutions Built with Precision"
- Featured project: hardcoded to projects[1] (POS System) from project_client.ts
- 3 placeholder cards: ShopSmart (Next.js/Stripe/MongoDB), DataViz Dashboard (React/D3.js), ConnectHub (Vue.js/Socket.io) — fictional
- Contact section: email boxgramer@gmail.com, phone +6281-338-209-217
- Inline footer (does NOT use Footer.svelte)

---

## 🛠️ Open Source Projects (hardcoded in Projects.svelte)

| Title | Language | Description | GitHub |
|---|---|---|---|
| Box Cache Tester | Rust | CLI tool for testing web cache behavior / cache poisoning | github.com/boxgramer/box-cache-tester |
| Box Downloader | Rust | Parallel file downloader using multi-threading | github.com/boxgramer/box-downloader |
| Bruteforce Testing Auth System | Rust | HTTP brute-force tool with dynamic params, wordlist combos, tokio concurrency | github.com/boxgramer/brutforce-testing |

---

## 🖼️ Static Assets

| Folder | Project | Images |
|---|---|---|
| /education/ | Education Physics App | dashboard, drawing, materi, quis, mobil, simulation |
| /pos/ | POS System | mobile_transaksi, mobile_dashboard, mobile_kas, report, barang, stok, dashboard, pilih_cabang |
| /trem/ | Invoices System | detail_booking, booking, transaksi, dashboard, login |
| /cbt/ | Exam CBT System | dashboardnew, login, mobile_score_test, mobile_run_test, mobile_start_test, report, dashboard, test |
| /box-cache-tester/ | Open Source | test.png |
| /box-downloader/ | Open Source | testing.png |
| /brutoforce-testing/ | Open Source | brutforcepng.png |

Lib assets:
- src/lib/assets/avatar.png — profile avatar used in Header logo
- src/lib/assets/rimba.png — large hero photo (~14MB, should be optimized)

---

## 📝 Writeup Methodology

Each writeup follows this structure:
1. Investigate the system → retrieve list of features
2. Describe the feature and explain how it works
3. List possible vulnerabilities grouped by feature
4. Proof of Concept for each vulnerability
5. Impact assessment
6. Takeaways / lessons learned

Topics covered: web cache poisoning (multiple headers, unknown header, unkeyed query param, fat GET, DOM vulnerability, parameter cloaking) and file upload vulnerabilities (null byte injection).

---

## ⚠️ Known Issues / Bugs

1. Footer nav links are swapped: "Writeup" anchor points to #projects and "Project" points to #writeups
2. console.log(currentSection) left in Header.svelte line 21 — debug artifact to clean up
3. rimba.png is ~14MB — large unoptimized asset
4. writeup-20250501.md and writeup-20250520.md exist in src/lib/writeups/ but NOT in writeups.ts
5. /landings/web placeholder project cards are fictional (ShopSmart, DataViz, ConnectHub)
6. tailwind.config.cjs may be redundant since TailwindCSS v4 uses Vite plugin config
