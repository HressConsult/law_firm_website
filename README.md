# assets/

Place your image files in this folder and reference them in index.html.

## Recommended images

| File                  | Used in                          | Suggested size     |
|-----------------------|----------------------------------|--------------------|
| hero.jpg              | Hero section (right panel)       | 900 × 1100 px      |
| office.jpg            | Home intro split (left image)    | 800 × 1067 px      |
| attorney-[name].jpg   | Team cards (one per attorney)    | 400 × 533 px       |
| favicon.ico / .png    | Browser tab icon                 | 32 × 32 px         |

## How to swap in images

In `index.html`, replace placeholder divs like:

```html
<div class="hero-photo-placeholder"> … </div>
```

with:

```html
<img src="assets/hero.jpg" alt="Hartwell & Partners office" />
```

And in team cards (rendered by `js/main.js`), update each team member object to include a `photo` property, then update the template string in `render()` to use `<img src="assets/${t.photo}" alt="${t.name}" />` instead of the initials placeholder.
