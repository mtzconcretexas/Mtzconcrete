# MTZ Concrete — Editable GitHub Version

This version is intentionally organized so future changes are easy.

## The file you will normally edit

### `site-config.js`

Almost all regular changes are centralized there:

- company name
- phone
- email
- SEO title/description
- menu links
- English/Spanish text
- services
- project cards
- project photos
- service cities
- social media
- form options
- whole sections on/off

You should NOT need to search through `index.html` every time you want to change basic content.

---

# Quick examples

## Change phone

Open:

`site-config.js`

Find:

```js
phoneDisplay: "512-999-2415",
phoneDial: "+15129992415",
```

Change both.

---

## Add a service

Inside `CONFIG.services`, copy one block:

```js
{
  number: "07",
  title: {
    en: "Retaining Walls",
    es: "Muros de Contención"
  },
  description: {
    en: "Description here.",
    es: "Descripción aquí."
  }
},
```

---

## Remove a service

Delete the entire `{ ... }` block for that service.

---

## Add a city

Inside:

```js
serviceAreas: [
```

add:

```js
"New Braunfels",
```

---

## Hide a section

Inside:

```js
sections: {
```

Change:

```js
projects: true,
```

to:

```js
projects: false,
```

---

# Add social links later

Inside `CONFIG.social`:

```js
facebook: {
  name: "Facebook",
  icon: "f",
  enabled: false,
  url: ""
},
```

Change to:

```js
facebook: {
  name: "Facebook",
  icon: "f",
  enabled: true,
  url: "https://facebook.com/YOUR-PAGE"
},
```

Same idea for:

- WhatsApp
- Instagram
- TikTok

---

# Add real project photos

1. Put photos inside:

`assets/images/`

Example:

`assets/images/driveway-austin.jpg`

2. In `site-config.js`, edit:

```js
{
  title: {
    en: "Driveway",
    es: "Entrada"
  },
  image: "assets/images/driveway-austin.jpg"
},
```

If `image: ""`, the website uses a clean placeholder.

---

# Main files

## `index.html`

Website structure.

Edit this when you want to add a completely new type of section or new form fields.

## `site-config.js`

Main content/settings file.

This is where most changes should happen.

## `script.js`

Website behavior:

- renders configuration
- bilingual toggle
- responsive menu
- services/projects/cities
- quote form logic
- social links
- animations

## `styles.css`

Website visual design:

- colors
- spacing
- cards
- responsive layout
- typography
- animations

At the top you can change major colors using CSS variables.

---

# Quote form

Current mode:

```js
mode: "demo"
```

The form is visual and functional in the browser, but does not send information anywhere yet.

Later it can be connected to:

- Airtable
- Make
- Formspree
- custom API/backend

The configuration already includes:

```js
endpoint: ""
```

so we can connect it without redesigning the page.

---

# GitHub

Recommended repository:

`mtz-concrete`

Upload:

- `index.html`
- `site-config.js`
- `script.js`
- `styles.css`
- `assets/`
- `README.md`

---

# Vercel

1. Create/import the GitHub repository.
2. Vercel → Add New Project.
3. Import `mtz-concrete`.
4. Framework preset: `Other`.
5. No build command required.
6. Deploy.

---

# Important

This project intentionally uses plain HTML/CSS/JavaScript instead of a complicated framework.

Why?

Because for this website it makes future edits easier:

- no npm required
- no build process required
- no framework dependency
- GitHub edits are simple
- Vercel deploys directly
- easy to move to another host later
