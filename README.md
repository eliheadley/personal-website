# personal-website

My personal site — background, experience, projects, and publications.

Plain static HTML/CSS/JS, no build step. Open `index.html` in a browser, or serve
the folder locally:

```sh
python -m http.server 8000
```

## Layout

```
index.html               single-page site (all sections)
css/main.css             styles — design tokens at the top, light + dark themes
scripts/main.js          mobile nav, sticky-header state, active-section highlight
resume/                  current résumé PDF (linked from the nav and footer)
resources/images/        photos and logos
```

## Updating

- **Résumé** — replace `resume/Eli_Headley_Resume.pdf`, keeping the filename so the
  links stay valid.
- **Content** — everything is inline in `index.html` under commented section markers.
- **Colors/spacing** — the `:root` and `prefers-color-scheme: dark` blocks at the top
  of `css/main.css`.
