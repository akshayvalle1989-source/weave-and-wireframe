# Grama Lekha civic portal

## Goal
Build a polished, working frontend prototype from the uploaded PRD and Stitch design package. Preserve the supplied “Mauryan Civic Monumentalism” identity while making the seven primary sections easy to navigate on desktop and mobile.

## Pages
- **Home:** live Gram Sabha callout, accountability loop, Panchayat financial snapshot, agenda items, upcoming assemblies, and documentary evidence.
- **Panchayat:** Panchayat profile, funds and works ledger, scheme progress, and recent official decisions.
- **Gram Sabha:** current assembly details, attendance, meeting order, agenda evidence, and minutes access.
- **Social Audit:** six-stage audit pipeline, filterable findings, evidence vault, and issue status tracking.
- **Vote:** meeting-code entry, attendance confirmation, active agenda evidence, and one-choice Support/Oppose/Abstain flow.
- **Results:** plain-language meeting summary, vote breakdowns, citizen feedback themes, disclaimer, and action tracker.
- **Help & Feedback:** report form, help topics, contact guidance, and successful submission feedback.

## Shared experience
- Recreate the uploaded indigo, terracotta, brass, and parchment visual system with Merriweather and Plus Jakarta Sans.
- Add a responsive shared header, working route tabs, Panchayat selector, language switch, notifications panel, and mobile menu.
- Use the supplied/generated village documentary imagery as real evidence media with accessible captions.
- Make filters, tabs, accordions, agenda selection, voting, dialog views, and downloads work locally without requiring an account.
- Give every page unique search and social-sharing metadata.

## Verification
- Check every navigation target and major button.
- Test the full meeting-code and voting journey.
- Check desktop and mobile layouts for clipping, overlap, and readability.
- Confirm the preview loads without build, console, or runtime errors.

## Technical details
- TanStack Start file routes with reusable React components and semantic Tailwind design tokens.
- Client-side demo state for prototype interactions; no persistent accounts or official government data connection in this phase.
- Browser-generated downloadable meeting minutes text file for the working export demonstration.
