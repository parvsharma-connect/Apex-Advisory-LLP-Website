# Launch notes

This is a website preview, not a verified professional practice website. The GitHub Pages build is static and disables the enquiry form; visitors are directed to the displayed email address. The local and Vercel builds use a server-side MailerSend integration for `parv.sharmaa@outlook.com`. The website does not keep an enquiry database. Cookie settings use a first-party `apex_cookie_consent` cookie and a one-year browser-storage fallback to remember the visitor's choice. No session ID, authentication, analytics or advertising cookies are configured. Do not collect sensitive client records here.

## GitHub Pages

- The GitHub Pages workflow builds the site at `/Apex-Advisory-LLP-Website/` and publishes the static `dist` output.
- GitHub Pages cannot run the MailerSend API route, so the public Pages build intentionally does not accept enquiry submissions. Use a serverless host such as Vercel to enable the form.
- Repository source visibility and website visibility are separate. This repository must be public on the current GitHub plan; the published Pages site is also public.

## Enquiry email setup

- The contact form posts to `/api/enquiry`. Vite development and preview servers handle this endpoint locally; `api/enquiry.ts` provides the matching Vercel serverless route.
- Create a MailerSend API token limited to email sending. Keep it server-side as `MAILERSEND_API_TOKEN`; never add it to frontend `VITE_` variables or commit it.
- Verify a sending domain in MailerSend and set `MAILERSEND_FROM_EMAIL` to an address on that domain. MailerSend requires the sender domain to be verified. Set `ENQUIRY_TO_EMAIL` to the monitored recipient inbox (defaults to the contact email above).
- MailerSend's API is asynchronous. A successful HTTP response means the provider accepted the message; check the MailerSend activity log for delivery or suppression events before treating a message as delivered.
- For local use, copy `.env.example` to `.env.local`, fill the MailerSend settings, restart `npm run dev` or `npm run preview`, and test a submission. For Vercel, add the same variables as server-side environment variables and redeploy.
- Until the API key and verified sender are configured, the form returns a clear configuration error and directs visitors to the displayed contact email. Do not claim delivery until the provider accepts the message.
- MailerSend processes submitted name, business email, category and message to deliver the email. Review its current data-processing terms, set access and retention practices, and disclose them before collecting real client enquiries.

## Confirm before launch

- Verify the LLP's exact legal name, registration details, address, monitored privacy contact, business contact information and locations.
- Confirm services, jurisdictions, qualifications, regulatory permissions and who will deliver each service.
- Review all service descriptions, articles, biographies, testimonials, examples and industry content. Remove anything unverified; replace draft copy with approved content.
- Review Privacy, Terms and Professional Disclaimer for the actual firm, hosting, communications, applicable law and current requirements.
- If the practice offers CA services, have website and advertising copy reviewed against applicable ICAI requirements. ICAI states the Revised 13th Code of Ethics applies from 1 April 2026, except provision (xxxi), effective 11 December 2025; verify the exact current provisions for this firm on the [ICAI announcement](https://icai.org/post/revised-code-of-ethics-13th-edition).
- Verify current Indian tax, GST, LLP and DPDP statements against official sources. The [MeitY Gazette notification for the DPDP Rules, 2025](https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf) gives staged commencement dates; verify the Act commencement notifications and applicable provisions again on the actual launch date.
- If enabling enquiry delivery, use server-side validation, spam controls, restricted access, an approved mail or form processor, documented retention/deletion and incident handling. Collect only necessary data; do not add a public upload field for PAN, Aadhaar, bank records, returns, invoices or client documents. An acknowledgement checkbox alone is not automatically valid legal consent.
- Document what data the form collects, purpose, recipients/processors, retention, access and a monitored privacy contact. Update the Privacy Policy before enabling delivery.
- The current site loads Google Fonts and Unsplash images from third-party domains. Review their privacy terms or host approved assets locally and adjust CSP if the asset sources change. No analytics, advertising trackers, embedded maps or chat widgets are configured.
- Set `SITE_URL` to the production origin during build and verify canonical URLs, sitemap and robots directives.
- On the selected hosting provider, configure HTTP-to-HTTPS redirection, a valid TLS certificate, DNS/domain MFA and the headers in `public/_headers`. That file is recognized by some static hosts, not all. Verify the deployed response headers and CSP in browser developer tools; remove or adjust any source the site no longer needs. Enable HSTS only after HTTPS is reliably enforced; add subdomains only if all of them support HTTPS.
- Check mobile layouts, keyboard operation, labels, contrast, all links, 404 behavior, CSP violations, security headers, metadata and form behavior on the deployed host.
- Document the deployment owner, domain access, backup and maintenance process.

No client records, credentials, private files or authenticated workflows belong in this public frontend. Secure document exchange, client logins, access control and audit logs require a trusted backend or managed service; this static site does not provide them.
