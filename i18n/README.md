# i18n System - F-100D Manual

## Structure

```
f-100d-manual/
    i18n/
        en.json          - English reference (source of truth)
        fr.json          - French translations (complete)
    scripts/
        translate.py     - Script to generate .{lang}.md files
    mkdocs.yml           - mkdocs-static-i18n plugin configured
```

## Quick Start

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Generate translated FR files
python scripts/translate.py --lang fr

# 3. Start the documentation server
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

### Step 2 - Generate the translated files

```bash
python scripts/translate.py --lang de
```

This generates a `page.de.md` file for each `page.md` in `src/`.

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
mkdocs serve
```

## Useful Commands

```bash
# List available languages
python scripts/translate.py --list

# Check key parity (audit)
python scripts/translate.py --lang fr --audit

# Force regeneration (overwrite existing)
python scripts/translate.py --lang fr --force

# Dry run (no files written)
python scripts/translate.py --lang fr --dry-run
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

All other pages display a stub with a note indicating the page is not yet translated
(fallback to English version).

## Key Naming Rules

JSON keys follow the `namespace.section.element` convention:

- Valid: `nav.home`, `nav.engine`, `nav.emergency_procedures`
- Valid: `ui.note`, `ui.warning`
- Valid: `index.disclaimer_heading`
- Invalid: `Nav_Home`, `navHome` (do not use camelCase or uppercase)
