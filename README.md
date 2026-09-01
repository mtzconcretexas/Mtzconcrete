# MTZ Concrete — Original Style Rebuild

This version was rebuilt directly from the supplied screenshots of the original MTZ Concrete site.

## Main editable file

Use:

`site-config.js`

for most future changes.

You can edit:

- phone
- email
- English / Spanish text
- services
- process steps
- service cities
- social links
- show/hide sections
- form options

## Project images

Images are in:

`assets/images/`

Current files:

- `mtz-hero.jpg`
- `mtz-project-gallery.jpg`

These were taken from the original MTZ screenshots supplied for the rebuild.

## Social links

Social cards are visual-only until URLs are entered.

In `site-config.js`:

```js
{ number: "01", icon: "people", name: "FACEBOOK", url: "" }
```

Paste a URL:

```js
url: "https://facebook.com/..."
```

## Add/remove a city

Inside:

```js
serviceArea: {
  cities: [
```

Add or remove city lines.

## Form

The form is currently:

```js
mode: "demo"
```

Later it can be connected to Make, Airtable, Formspree, or another backend.

## Replace the current GitHub website

Upload these files to the SAME GitHub repository, replacing the old versions:

- `index.html`
- `site-config.js`
- `script.js`
- `styles.css`
- `README.md`
- `assets/`

Once committed to the production branch, Cloudflare should redeploy automatically.

## No framework required

This project is plain HTML/CSS/JavaScript.

No npm.
No build command.
No framework lock-in.
Easy to edit in GitHub.
