# How Rich Am I? — Global Wealth Calculator

A single-page web app that shows where your income sits on the global wealth spectrum, adjusted for purchasing power and household size.

Live demo: *(deploy and add URL here)*

---

## Features

- **PPP-adjusted ranking** — uses Purchasing Power Parity, not the forex rate, for a fair cross-country comparison
- **Real World Bank data** — percentile lookup against 99 income thresholds from World Bank PIP 2024
- **Household equivalization** — OECD square root scale accounts for adults and children
- **5 languages** — English, Español, Français, 中文, Bahasa Melayu (persisted via `localStorage`)
- **5 currencies** — USD, MYR, GBP, EUR, SGD (currency and country dropdowns stay in sync)
- **Animated results** — gauge bar, fade-in panel, stat cards
- **Explainer panels** — collapsible "How is this calculated?" and "What is an International Dollar?" sections
- **No frameworks, no build step** — plain HTML, CSS, and vanilla JavaScript

---

## How the Calculation Works

### 1 · Household Adjustment (OECD Square Root Scale)

```
Equivalized Income = Annual Income / √(adults + children)
```

A couple needs less than 2× a single person's income to maintain the same living standard.

### 2 · PPP Conversion to International Dollars

```
International Dollars (I$) = Equivalized Income / PPP Rate
```

PPP rates reflect what your money actually buys locally, not the bank exchange rate.

| Currency | PPP Rate (2026 est.) |
|----------|----------------------|
| USD      | 1.22                 |
| MYR      | 1.76                 |
| GBP      | 0.92                 |
| EUR      | 0.89                 |
| SGD      | 1.26                 |

> PPP rates are 2024 World Bank actuals projected to 2026 via IMF CPI estimates (+2.5%/yr for US/MY/UK, +2.0%/yr for EU/SG).

### 3 · Global Percentile Lookup

Your I$ income is matched against 99 daily income thresholds from the **World Bank PIP 2024** survey (covering ~8 billion people):

- **Within table**: linear interpolation between known percentile thresholds
- **Above 99th percentile**: log-linear extrapolation from the slope of the last interval

---

## Data Sources

| Data | Source |
|------|--------|
| Global income percentiles | [World Bank PIP 2024](https://pip.worldbank.org/) via [OWID notebooks](https://github.com/owid/notebooks/tree/main/PabloArriagada/global_distribution_giving_what_we_can) |
| PPP conversion factors | World Bank WDI (`wdi_ppp.csv`), projected to 2026 |
| Methodology reference | [Giving What We Can](https://www.givingwhatwecan.org/how-rich-am-i) |

> **Note:** World Bank PIP 2025 survey data does not yet exist. The most recent income distribution data available is 2024. The OWID version tag `2025-10-09` refers to the September 2025 PIP *release*, which still contains 2024 income survey results.

---

## File Structure

```
HowRichAmI/
├── index.html   # Markup — all visible text uses data-i18n attributes
├── styles.css   # All styles (CSS custom properties, responsive, animations)
└── app.js       # Translations, PPP data, PIP lookup table, calculation logic, i18n
```

No dependencies, no package manager, no build step required.

---

## Running Locally

Just open `index.html` in any modern browser — no server needed.

```bash
# Optional: serve with any static file server
npx serve .
# or
python -m http.server 8080
```

---

## Supported Languages

| Code | Language       |
|------|----------------|
| `en` | English        |
| `es` | Español        |
| `fr` | Français       |
| `zh` | 中文 (Simplified)|
| `ms` | Bahasa Melayu  |

Language preference is saved to `localStorage` and restored on next visit. All result text re-renders on language switch without re-triggering animations.

---

## License

MIT
