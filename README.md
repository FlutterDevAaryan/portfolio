## Portfolio

This repository contains a **professional developer portfolio**

---

### ⚠️ Changes to Hero, Projects, AboutAndSkills (or any `src/` file) not showing on the live site?

**The live site serves the built files in `docs/`, not the source in `src/`.**  
After editing `Hero.tsx`, `Projects.tsx`, `AboutAndSkills.tsx`, or any file in `src/`:

1. **Rebuild** so the new code is bundled into `docs/`:
   ```bash
   npm run build
   ```
2. **Commit and push** the updated `docs/` folder (and your source changes):
   ```bash
   git add docs src
   git commit -m "content: update hero/projects/about and rebuild"
   git push origin main
   ```
3. Wait 1–2 minutes, then hard-refresh the live site (Ctrl+Shift+R).

If you skip step 1, the live site will keep showing the old content because `docs/assets/*.js` never got updated.

---

### ⚠️ "Failed to load module script" / MIME type `application/octet-stream`?

**This almost always means GitHub Pages is deploying from the wrong branch.** The live site must be built and served from **gh-pages**, not **main**.

1. Open your repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, choose **"Deploy from a branch"**.
3. Under **Branch**, select **`gh-pages`** (not `main`) and **/ (root)**.
4. Click **Save**. Wait 1–2 minutes, then hard-refresh the site (Ctrl+Shift+R).

The workflow pushes the **built** site (JS/CSS bundles) to `gh-pages`. If Pages uses `main`, it serves **source** files (e.g. `main.tsx`), which are sent with the wrong MIME type and break.

--- built with **React, TypeScript, Vite, Tailwind CSS, and Framer Motion**.

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

### 5. Hosting on GitHub Pages (simplest setup)

This project is configured to build into a `docs` folder, so you can use GitHub Pages **without any Actions or extra branches**.

#### One-time setup (in your GitHub repo)

1. Push this project to a GitHub repository (e.g. `your-username/portfolio`).
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**:
   - **Source**: choose **Deploy from a branch**.
   - **Branch**: `main` → **/docs**.
4. Save.

#### After each change

1. Build the site locally:

   ```bash
   npm run build
   ```

   This writes the production build into the `docs` folder.

2. Commit and push the `docs` folder (along with your code):

   ```bash
   git add docs
   git commit -m "build: update portfolio docs"
   git push origin main
   ```

3. Your portfolio will be available at:
   - **https://\<your-username\>.github.io/portfolio/**

GitHub Pages will serve the **built** files from `docs`, so the browser loads normal `.js` bundles (not `.tsx` source files), and the MIME type and favicon errors disappear.

You can adjust the design, colors, and copy in the React components under `src/components` as needed.
