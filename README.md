# Kathleen Pang's Portfolio

A personal portfolio website built with plain HTML and CSS.

## Folder structure

```
├── index.html              Home page
├── education.html          Education
├── work-experience.html    Work experience
├── education-nus.html        Blog post: NUS (opens when you click its card)
├── education-hwa-chong.html  Blog post: Hwa Chong
├── work-nestle.html          Blog post: Nestle
├── work-fraser-and-neave.html  Blog post: Fraser and Neave
├── projects.html           Projects
├── hobbies.html            Hobbies (pixel-art mosaic)
├── js/
│   └── main.js             Opens/closes the ☰ menu on small screens
├── documents/
│   └── assignments/        PDFs shown in the assignment pop-ups (NUS blog post)
├── css/
│   └── style.css           All styles, split into numbered sections
└── images/
    ├── photos/             Photos used in the home page slideshow
    │   └──  Institutions   Photos of Institution Logos used in Education and Working Experience
    ├── hobbies/            Pixel-art illustrations (drawn on Piskel)
```

## Conventions

- File names, class names and IDs use lowercase-with-hyphens (e.g. `running-shoe.png`, `.card-header`).
- Colours and shadows are defined once as variables at the top of `css/style.css`.
- Education and Work Experience entries share one `.card` style. Each card is a link (`<a class="card card-with-photo card-link" href="...">`) that opens its blog post. To add a new entry, copy an existing card and one of the blog post pages, then point the card's `href` at the new page.
- Blog posts: grey italic text (`class="placeholder"`) is a prompt to replace. Once you write your own text, remove `class="placeholder"` from that paragraph.
- Assignments (NUS blog post): each one is a tile `<button data-dialog="x">` plus a pop-up `<dialog id="x">`. To add one, copy both, give them a new matching id, and put the PDF in `documents/assignments/`. Remove your student number from a PDF before uploading it.
- The site is mobile-friendly: sections 8 and 9 of `style.css` hold the laptop and small-screen (900px and below) rules, and there's a ☰ menu on phones.
- Education and Work Experience photos: put the image in `images/education/` or `images/work/` and change the `src` of that card's `<img class="card-photo">`. Any shape works; the whole image is fitted inside the circle.

## Before publishing a change

**If you changed `css/style.css` or `js/main.js`:** raise the version number in the links at the top of all the HTML files, e.g. `style.css?v=2` → `style.css?v=3`. Browsers then download the new file straight away instead of reusing an old saved copy. In VS Code, **Ctrl+Shift+H** (find and replace in all files) updates them all at once.

Then check every page you touched at three sizes. In Chrome, press **F12**, then **Ctrl+Shift+M** (device toolbar) and pick a width:

- **Phone**: 375px
- **Laptop**: 1280px
- **Wide screen**: 1920px

Then press **Ctrl+Shift+R** to make sure you're seeing the newest CSS, not an old cached copy.
