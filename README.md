# Kathleen Pang's Portfolio

A personal portfolio website built with plain HTML and CSS.

## Folder structure

```
├── index.html              Home page
├── education.html          Education
├── work-experience.html    Work experience
├── projects.html           Projects
├── hobbies.html            Hobbies (pixel-art mosaic)
├── js/
│   └── main.js             Opens/closes the ☰ menu on small screens
├── css/
│   └── style.css           All styles, split into numbered sections
└── images/
    ├── photos/             Photos used in the home page slideshow
    └── hobbies/            Pixel-art illustrations (drawn on Piskel)
```

## Conventions

- File names, class names and IDs use lowercase-with-hyphens (e.g. `running-shoe.png`, `.card-header`).
- Colours and shadows are defined once as variables at the top of `css/style.css`.
- Education and Work Experience entries share one `.card` style. To add a new entry, copy an existing `<section class="card">` block.
- The site is mobile-friendly: sections 8 and 9 of `style.css` hold the laptop and small-screen (900px and below) rules, and there's a ☰ menu on phones.
