# Astro Env prerender bug

How the reproduce:

1. Run install (I use pnpm, but any package manager will do). `pnpm install`.
2. Run `pnpm dev`
3. Open localhost and you'll see the error.
4. Go to `package.json`. Set the Astro dependency to `4.1.1`. Run install again.
5. Open localhost and it works like it used to.
