# IISE KU Chapter website

A responsive static website for the Khalifa University IISE Student Chapter.

## Open it

Open `index.html` in a browser. No installation or build step is required. All images and interactive features are included locally. Google Fonts is optional; the site uses fallback fonts without an internet connection.

## Publish it

Upload the contents of this folder to any static website host. Keep `index.html`, `styles.css`, `app.js`, `sources.html`, and the `assets` folder together at the site root. This website has no server, database, passwords, or application submissions to configure.

In a static hosting dashboard, leave the build command empty and select the folder containing `index.html` as the publish directory. The ZIP contains the ready-to-serve files at its root.

## Update it

- `index.html`: page copy, chapter leadership, event dates and joining links.
- `styles.css`: colors, fonts, layout and responsive styles.
- `app.js`: event filtering, ESMA guide gallery, quiz and mobile navigation.
- `sources.html`: public source attribution and photo credits.
- `assets/`: optimized photographs, chapter-supplied topic guides and logos.

Find `data-end` on each upcoming event card to change its expiration date. The value is the day after the event ends, in `YYYY-MM-DD` format. Dates use Abu Dhabi time. Expired cards change to a past-event label; revise their descriptions when you add a recap.

## Editorial notes for the chapter owner

The site uses selected material from Website (2).zip. It intentionally does not publish the original archive, attendee lists, student identifiers, personal phone numbers, receipts, financial worksheets, university approval forms, or redeemable voucher artwork.

The 2026–2027 lead names follow the supplied kickoff deck. The deck notes that names and roles may be corrected; check spellings and appointments before your next announcement. No private contact details or inferred photo identities are used.

Club Fair is listed for 23 September 2026 from the chapter planning context, with time and location pending. The KNDL collaboration is acknowledged without exposing voucher assets or advertising unconfirmed redemption terms. KU confirms CIE53 for 20–23 October 2026; the chapter's proposed speakers and activities are not presented as confirmed.

The requested 2025–2026 course-sequence link is retained as a year-specific reference. Its page could not be independently retrieved in this session. The current KU department page provides a second official academic route. Google Forms and Telegram destinations match the supplied links; no form was submitted and no group was joined during testing.

Sources for awards and academic background are linked on the public credits page. Event photographs are from the supplied photo collection; the AUS images are identified as AUS, not KU campus photography. Images have been resized and exported without original EXIF metadata.

## Checks completed

- JavaScript syntax validated.
- Local page links, anchors and asset paths checked.
- Desktop and mobile layout inspected in a browser.
- Event filters, quiz feedback, mobile navigation and image dialog tested.
- Image dialog Escape behavior and return focus checked.
- Membership URLs checked against the supplied destinations.
- External links use `noopener noreferrer` when opening a new tab.

## Hosting status

The local website is complete. A live deployment was attempted, but the Sites service returned "Sites is not yet enabled for this workspace." No live public website was created. Use your preferred static host with this package.

## September 16 update

Added a full gallery with 83 public images, including event photographs from the archive and slides, ESMA guides, the KNDL promotional poster and the keychain design. Six exact photo duplicates are omitted. Receipt images and redeemable voucher artwork remain excluded. Added gallery filters, progressive loading and keyboard navigation in the image viewer. Updated the team, freshman participation guidance and KU annual membership renewal information per chapter leadership. Added official header logos, social icons, membership benefits, and the Ideas / Questions form.
