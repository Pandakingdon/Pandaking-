# Satyam Traders website

This is a responsive, static enquiry website prepared from the details supplied in the conversation.

## Files
- `index.html` — page content, SEO metadata and business structured data
- `styles.css` — responsive styling
- `script.js` — category search/filter, enquiry modal, WhatsApp message, navigation
- `manifest.json` and `sw.js` — basic installability/offline shell

## Before publishing
1. Verify the exact public-facing address. The earlier typed address (Shop No. 1, Bangaon–Mahishi Road) differs from the supplied Maps listing (106, Mahishi Road / Satyam Traders 2). The site currently uses the Maps listing address and supplied Maps link.
2. Test both phone numbers and WhatsApp on a phone.
3. Replace generic category photos with the shop's own product photographs when available.
4. Add a favicon and PWA icons if you want a polished installable app experience.
5. The enquiry form opens WhatsApp; it does not store submissions or send email. Email can be added later with a verified form service.
6. Google Sign-In is intentionally not included: this is a public enquiry site and customer login is unnecessary unless there is a real account feature to support.

## Free publishing option: GitHub + Cloudflare Pages
1. Create/sign in to a GitHub account.
2. Create a public repository named `satyam-traders`.
3. Upload the files in this folder to the repository root (not the ZIP itself).
4. In Cloudflare, open Workers & Pages → Create → Pages → Connect to Git.
5. Select the repository. Use no build command and set the output directory to `/`.
6. Deploy. Cloudflare provides a free `*.pages.dev` address.
7. For later edits, edit the relevant file in GitHub or a browser coding workspace and commit/save. Cloudflare automatically rebuilds and updates the same live address.

Free-plan limits and provider terms can change. No paid domain or backend is required for this static enquiry website. A custom domain, if desired, costs extra; use the free subdomain to keep the setup free.

## Tablet workflow
Use Chrome on Android to open GitHub. The GitHub website's file editor can make small edits. For larger edits, a browser IDE that connects to GitHub can be more convenient. Never paste private passwords or API secrets into public website code.
