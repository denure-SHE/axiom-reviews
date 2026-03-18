# Axiom Review

Publishing site for AI governance novels and policy analysis.
Built with [Astro](https://astro.build) and deployed on Vercel.

## Setup

```bash
npm install
npm run dev        # local development at localhost:4321
npm run build      # production build
```

## Adding a new chapter

1. Create a new `.md` file in `src/content/novels/architecture-of-thinking/`
2. Copy the frontmatter from an existing chapter, update title/num/prev/next
3. Write the chapter content below the `---`
4. Update the `toc` array in the new file and the adjacent chapter files
5. `git add . && git commit -m "Add Chapter X" && git push`

## Adding a policy post

1. Create a new `.md` file in `src/content/policy/`
2. Use the same frontmatter pattern
3. Push to GitHub — Vercel redeploys automatically

## Repo
https://github.com/denure-SHE/axiom-reviews
