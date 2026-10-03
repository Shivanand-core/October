# Shivraj 350 — International Peer Reviewed Multidisciplinary Journal

Official scholarly web portal and online repository for **Shivraj 350: International Peer Reviewed Multidisciplinary Journal**, published by **Shivaji College, University of Delhi** (Accredited NAAC Grade "A").

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm or bun

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 📦 How to Publish to GitHub

### Step 1: Initialize Git in your project folder
```bash
git init
git add .
git commit -m "Initial commit: Shivraj 350 Journal website"
```

### Step 2: Create a New Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Name your repository (e.g., `shivraj-350` or `shivraj350-journal`).
3. Set visibility to **Public** (required for free GitHub Pages) or **Private**.
4. **Do not** check "Initialize this repository with a README" (we already have one).
5. Click **Create repository**.

### Step 3: Link and Push to GitHub
Run the following commands in your terminal (replace `<YOUR-USERNAME>` and `<YOUR-REPO>`):
```bash
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO>.git
git push -u origin main
```

---

## 🌐 How to Publish on GitHub Pages (Free Hosting)

This repository includes a ready-to-use **GitHub Actions Workflow** (`.github/workflows/deploy.yml`) that automatically builds and deploys your website.

### Automatic Deployment (Recommended):
1. In your GitHub repository, click on **Settings** (top tab).
2. On the left sidebar, click on **Pages**.
3. Under **Build and deployment** -> **Source**, select:
   👉 **GitHub Actions**
4. The workflow will automatically trigger on every `git push` to `main`, and your live journal website will be published at:
   `https://<YOUR-USERNAME>.github.io/<YOUR-REPO>/`

---

## 🛠️ Tech Stack
- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8 (with relative path support)
- **Styling:** Tailwind CSS v4
- **Typography:** Cormorant Garamond, Newsreader & Plus Jakarta Sans
- **Icons:** Lucide React
- **Hosting Support:** GitHub Pages, Vercel, Netlify, Cloud Run
