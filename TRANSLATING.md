# Translation Guide

This guide explains how to add a new language to the F-100D manual.

---

## Prerequisites

- Python 3.8+
- `pip install mkdocs mkdocs-static-i18n`
- A text editor (VS Code recommended)

---

## Adding a New Language (example: Spanish)

### Step 1 - Create translated files

Each page of the manual exists as `filename.md` (English).
To translate, create a file `filename.<language_code>.md` in the same folder.

Example for Spanish (`es`):

```text
src/
    Engine/
        engine.md          <- English original (do not modify)
        engine.es.md       <- your Spanish translation
    Introduction/
        introduction.md
        introduction.es.md <- your Spanish translation
```

> **Rule:** the language code must be a 2-letter ISO 639-1 code:
> `fr` = French, `es` = Spanish, `de` = German, `it` = Italian, `pl` = Polish...

---

### Step 2 - Register the language in `mkdocs.yml`

Open `mkdocs.yml` and find the `plugins.i18n.languages` section.
Add your language to the list:

```yaml
plugins:
  - i18n:
      default_language: en
      languages:
        en:
          name: English
          build: true
        fr:
          name: Francais
          build: true
        es:                    # Add your block here
          name: Espanol
          build: true
          nav_translations:
            Home: Inicio
            Introduction: Introduccion
            Engine: Motor
            Cockpit: Cabina
            Weapons: Armamento
            Procedures: Procedimientos
```

> **`nav_translations`** translates the titles in the left navigation menu.

---

### Step 3 - Add to the language switcher

Still in `mkdocs.yml`, find the `extra.alternate` section and add:

```yaml
extra:
  alternate:
    - name: English
      link: /
      lang: en
    - name: Francais
      link: /fr/
      lang: fr
    - name: Espanol      # Add this
      link: /es/
      lang: es
```

---

### Step 4 - Test locally

```bash
mkdocs serve
```

Then open in your browser:

- `http://127.0.0.1:8000/`    - English
- `http://127.0.0.1:8000/es/` - Your language

---

## Translation File Format

### Rules

| Do                                          | Do not                     |
|---------------------------------------------|----------------------------|
| Translate the text                          | Rename image files         |
| Keep Markdown syntax (`**`, `#`, etc.)      | Change links to images     |
| Keep admonitions (`!!! note`, `!!! warning`)| Remove anchors (`{#id}`)   |
| Translate text inside tables                | Change the table structure |

### Example

**Original** (`engine.md`):

```markdown
# Engine

The F-100D is powered by the Pratt & Whitney J-57 turbojet.

!!! warning
    Do not exceed maximum RPM during startup.
```

**Translation** (`engine.es.md`):

```markdown
# Motor

El F-100D esta propulsado por el turborreactor Pratt & Whitney J-57.

!!! warning
    No exceda las RPM maximas durante el arranque.
```

---

## Files to Translate

All source files are located in `src/`:

```text
src/
    Introduction/
        introduction.md
        instrument-panel.md
        cockpit.md
        ...
    Engine/
        engine.md
    FlightModel/
        ...
    Weapon_System/
        ...
    Procedures/
        Normal/
            startup.md
            takeoff.md
            ...
        Emergency/
            ejection.md
            ...
```

Start with the most important pages (Introduction, Emergency Procedures) and work from there.

---

## Submitting Your Translation

1. Fork the repository on GitHub
2. Create a branch: `git checkout -b translation/es`
3. Add your `.es.md` files
4. Open a Pull Request with the title `[Translation] Espanol`
5. Contact @Aeroshell1 or @08jne01 for review
