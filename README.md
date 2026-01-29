## Portfolio

This repository contains a **professional developer portfolio** built with **React, TypeScript, Vite, Tailwind CSS, and Framer Motion**.

The site is optimized for recruiters and hiring managers, showcasing:

- **Hero section**: Clear headline, role, and call-to-action buttons (View Projects, Download Resume).
- **Project showcase**: Cards for your 8 Flutter apps and chat backend with tech stack, highlights, and GitHub links.
- **About & skills**: Short summary of who you are and your strongest skills.
- **Contact section**: Email, GitHub, LinkedIn links, plus a quick contact form (opens the user’s email client).
- **Subtle animations**: Smooth, professional animations using Framer Motion.

### 1. Getting started

```bash
npm install
npm run dev
```

This will start the development server (Vite). Open the printed URL in your browser.

### 2. Configure your personal details

Edit `src/data.ts` and replace the placeholders:

- **`personalInfo`**: Set your real name, location, email, GitHub, LinkedIn, and resume URL.
- **`projects`**: Update each project’s `title`, `description`, `tech`, `highlights`, and `githubUrl` to match your 10 GitHub repositories (8 Flutter apps + 1 chat backend + any other).

### 3. Resume download

By default, the "Download Resume" button points to:

- `personalInfo.resumeUrl = "resume.pdf"` in `src/data.ts`

Place your actual resume file at:

- `public/resume.pdf`

Or change `resumeUrl` to point to a hosted resume (for example, a Google Drive or OneDrive link).

### 4. Build for production

```bash
npm run build
npm run preview
```

This builds the optimized production bundle and lets you preview it locally.

### 5. Hosting on GitHub Pages

The repo is set up to deploy automatically with **GitHub Actions**.

#### One-time setup (in your GitHub repo)

1. Push this project to a GitHub repository (e.g. `your-username/portfolio`).
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**:
   - **Source**: choose **GitHub Actions** (not “Deploy from a branch”).
4. Save. You don’t need to create the `gh-pages` branch or set a branch/folder.

#### After each push

- Pushing to the **main** branch runs the workflow: it builds the site and deploys to GitHub Pages.  
  If your default branch is **master**, edit `.github/workflows/deploy.yml` and change `branches: ["main"]` to `branches: ["master"]`.
- Your portfolio will be available at:
  - **https://\<your-username\>.github.io/portfolio/**

The build uses **relative base** (`base: './'`) so the app works when served at **.../portfolio/** (GitHub Pages project site). Locally, `npm run dev` serves at **http://localhost:5173/** (root).

If you use a repo named **\<username\>.github.io** (user site) instead of **portfolio** (project site), the site will be at **https://\<your-username\>.github.io/**; the same relative base works there too.

You can adjust the design, colors, and copy in the React components under `src/components` as needed.
