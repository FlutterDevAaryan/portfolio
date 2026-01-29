# Fix: "Failed to load module script" / MIME type application/octet-stream

If you see this error on your live site, **GitHub Pages is serving the source branch (main) instead of the built site (gh-pages)**.

## Fix (do this once)

1. On GitHub, open your repo **FlutterDevAaryan/portfolio**.
2. Go to **Settings** → **Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source**: select **"Deploy from a branch"** (not "GitHub Actions").
   - **Branch**: choose **`gh-pages`** (not `main`).
   - **Folder**: **/ (root)**.
4. Click **Save**.
5. Wait 1–2 minutes, then open: https://flutterdevaaryan.github.io/portfolio/
6. Hard refresh: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac).

After this, the site will serve the **built** JavaScript from the `gh-pages` branch, and the MIME type error will go away.
