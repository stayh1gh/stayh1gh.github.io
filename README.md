# Bruno Paradas — Portfolio

A static portfolio site based on the Figma "Portfolio" design. No build step —
open `index.html` in a browser, or serve the folder. Use the included
`python3 serve.py` (sends no-cache headers, so edits show on a normal reload),
or any static server such as `python3 -m http.server`.

## Structure

- `index.html` — main page: navbar, hero, **work** strip, **career**, **other works**, footer
- `project.html` — project detail page (driven by the `?project=` URL param)
- `js/data.js` — **edit this file to add your projects, images, career, and social links**
- `css/style.css` — all styles (design tokens from Figma at the top)
- `images/` — put your project images here (`images/logos/` holds career logos)

## Adding your images

1. Drop the image file into `images/`
2. In `js/data.js`, set the project's `image` field (the card in the work strip), e.g.:

   ```js
   image: "images/my-project.jpg",
   ```

   For detail pages, fill the `detailImages` array — 7 slots laid out as:
   full-width, two halves, three thirds, full-width. The `OTHER_WORKS` array
   uses the same pattern. Any field left as `null` shows a placeholder.

## Other things to customize in `js/data.js`

- Hover card info: each project's `title`, `description`, `year`, and `tag`
- Detail page: `intro`, `body`, `disciplines`
- `CAREER` — the job history list
- `SOCIAL_LINKS` — LinkedIn / Read.cv / Behance URLs (currently `#` placeholders)

## Contact

The "Contact me" buttons open an email to `bruno.paradas1@gmail.com`
(set in the `mailto:` links in `index.html` / `project.html`).
