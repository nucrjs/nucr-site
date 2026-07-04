# National UC Realty — Static Site

A self-contained static website (no WordPress, no database). Everything needed
is in this `site` folder.

## Pages

| File | Page |
|---|---|
| index.html | Home (hero, services, county map, 4-phase methodology incl. Cost Estimates) |
| what-we-do.html | What We Do overview |
| site-selection.html | Site Selection (with Cost Estimates phase) |
| site-analysis.html | Site Analysis (6 sample reports) |
| site-construction.html | Site Construction |
| smart-search.html | SmartSearch USA |
| our-database.html | Our Database |
| about-us.html | About Us / team |
| articles.html | Articles (PDF downloads) |
| contact-us.html | Contact form (no phone/email anywhere on this page) |
| privacy-policy.html | Privacy policy |

## Uploading to GoDaddy

**Web Hosting (cPanel):** log in to GoDaddy → My Products → Web Hosting →
cPanel Admin → File Manager → open `public_html` → Upload the *contents* of
this folder (all files plus the `css`, `js`, `images`, `pdfs` folders).
`index.html` must sit directly inside `public_html`.

Alternatively zip this folder, upload the zip to `public_html`, and use
cPanel's Extract, then move the files up a level if they extracted into a
subfolder.

**Note:** GoDaddy "Website Builder" plans cannot host custom HTML — you need a
Web Hosting (cPanel) plan, which you likely already have.

## Contact form — one-time setup (required)

The contact page keeps all email addresses and phone numbers off the site, so
the form uses a third-party relay:

1. Create a free account at https://formspree.io and add a new form.
2. Formspree gives you an endpoint like `https://formspree.io/f/abcdwxyz`.
3. In `contact-us.html`, replace `YOUR_FORM_ID` in the form's `action`
   attribute with your ID.
4. Submissions arrive at the email you registered with Formspree — the address
   is never shown on the site.

Until this is done, the form will show a Formspree error when submitted.

## County map

The interactive "Clinic Counts by County" map on the homepage is powered by
SimpleMaps (`js/mapdata.js` + `js/countymap.js`, copied from the original
site). To update the counts, replace `js/mapdata.js` with a fresh export from
your SimpleMaps account.

## Site-wide conventions

- Phone number everywhere (except the contact page): **(813) 501-7191**
- External links point to **https://www.medcre.com** (never nationalucr.com)
- Colors: brand red `#990300`, gold accent `#FDC502` — defined at the top of
  `css/style.css`
