---
layout: legal
title: "Account Deletion"
description: "How to delete your MaoDesign account and linked data"
lang: en-US
permalink: /Legal/delete-account-en/
---

# Account Deletion in MaoDesign

**Last updated:** July 23, 2026  
**Version:** 2.0

## Delete through the app

If you can sign in to the account:

1. Open MaoDesign.
2. Go to **Profile**.
3. Tap **Delete account**.
4. Read the notice and confirm **Delete account**.
5. If Firebase requires recent authentication, sign in again and repeat the operation.

When the operation completes, MaoDesign removes Firestore markers linked to your identifier, deletes your Firebase identity, and clears local sign-in credentials.

## Request by email

If you cannot use the in-app flow, email [saviomacedo.dev@gmail.com](mailto:saviomacedo.dev@gmail.com) with:

- subject **MaoDesign account deletion**;
- the Google account address used with MaoDesign;
- a short confirmation that you want the account permanently deleted.

Do not send a password, token, identity document, or payment data. We may reply to the same address to verify that the request belongs to the account holder. The request will be handled as soon as reasonably possible and as required by applicable law.

## Data deleted

- Firebase identity and account identifier;
- name, email, and photo held in the MaoDesign Firebase profile;
- usage markers stored under `users/{uid}/aha_markers` in Firestore;
- local MaoDesign session credentials.

## Data retained or handled separately

- **Embroidery files, thumbnails, favorites, recent files, and local preferences:** remain on the device because they are not cloud account data. Remove them by clearing app data or uninstalling the app.
- **Crash reports, Analytics, and advertising data already processed:** follow each provider's policies, retention periods, and legal obligations.
- **Purchases and payment history:** remain under Google Play's responsibility.

## Premium subscription

**Deleting the account does not cancel Premium.** To prevent future charges, cancel separately in **Google Play > Payments & subscriptions > Subscriptions > MaoDesign**.

## More information

- [Privacy Policy]({{ '/Legal/privacy-policy-en/' | relative_url }})
- [Terms of Use]({{ '/Legal/terms-of-service-en/' | relative_url }})
- [Help Center]({{ '/Legal/help-en/' | relative_url }})

**Contact:** [saviomacedo.dev@gmail.com](mailto:saviomacedo.dev@gmail.com)
