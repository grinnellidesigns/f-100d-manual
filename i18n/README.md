# i18n System - F-100D Manual

## Structure

```
f-100d-manual/
    i18n/
        en.json          - English reference (source of truth)
        fr.json          - French translations (complete)
    mkdocs.yml           - mkdocs-static-i18n plugin configured
```

## Quick Start

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Start the documentation server
mkdocs serve
# -> http://127.0.0.1:8000     (EN)
# -> http://127.0.0.1:8000/fr/ (FR)
```

## Adding a New Language

### Step 1 - Create the translation file

```bash
# Copy the English reference
copy i18n\en.json i18n\de.json   # Windows
cp i18n/en.json i18n/de.json     # Linux/Mac
```

Open `i18n/de.json` and **translate all values** (do not change the keys).

Example:
```json
{
  "_meta": {
    "language": "de",
    "language_name": "Deutsch"
  },
  "nav": {
    "home": "Startseite",
    "introduction": "Einfuhrung",
    ...
  }
}
```

### Step 2 - Create translated markdown files

For each page you want to translate, create a file named `filename.<lang_code>.md` in the same directory as the original `filename.md` in `src/`. For example, `src/Engine/engine.de.md`.

Translate the content inside these files.

### Step 3 - Register the language in mkdocs.yml

Under `plugins > i18n > languages`, add:

```yaml
- locale: de
  name: Deutsch
  build: true
  nav_translations:
    Home: Startseite
    Introduction: Einfuhrung
    # ... (use nav values from de.json)
```

### Step 4 - Run

```bash
# Start the documentation server to test
mkdocs serve
```

## JSON File Structure

JSON files are organized by namespace:

| Namespace     | Description                            |
|---------------|----------------------------------------|
| `_meta`       | Language metadata                      |
| `site`        | Site name, language selector           |
| `nav`         | All navigation entries                 |
| `index`       | Home page texts                        |
| `introduction`| Introduction page texts                |
| `definitions` | Definitions page texts                 |
| `credits`     | Credits page texts                     |
| `ui`          | Interface elements (buttons, labels)   |

## Fully Translated Pages (FR)

The following pages have a complete integrated translation:

- `index.md` -> `index.fr.md`
- `Introduction/introduction.md` -> `Introduction/introduction.fr.md`
- `Introduction/definitions.md` -> `Introduction/definitions.fr.md`
- `credits.md` -> `credits.fr.md`

All other pages display the translated headers/stubs or fallback to the English version.

## Key Naming Rules

JSON keys follow the `namespace.section.element` convention:

- Valid: `nav.home`, `nav.engine`, `nav.emergency_procedures`
- Valid: `ui.note`, `ui.warning`
- Valid: `index.disclaimer_heading`
- Invalid: `Nav_Home`, `navHome` (do not use camelCase or uppercase)
