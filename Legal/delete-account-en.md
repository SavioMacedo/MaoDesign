---
layout: legal
title: "Account Deletion"
description: "How to delete your MaoDesign account and linked data"
lang: en-US
permalink: /Legal/delete-account-en/
---

# Account Deletion in MaoDesign

**Last updated:** October 27, 2026

**Version:** 2.2

The updated data collection and advertising controls described in the Privacy Policy apply starting with the MaoDesign version that implements them. Until then, data collection and advertising follow the controls available in the installed version.

## Delete through the app

If you can sign in to the account:

1. Open MaoDesign.
2. Go to **Profile**.
3. Tap **Delete account**.
4. Read the notice and confirm **Delete account**.
5. If Firebase requires recent authentication, sign in again and repeat the operation.

When the operation completes successfully, MaoDesign removes the Firestore markers covered by the flow and deletes your Firebase identity. It then attempts to clear local sign-in credentials; this step can fail without preventing the app from reporting deletion as complete. If removing the markers or deleting the identity fails, deletion may be incomplete: try again or contact support. An error message does not confirm that deletion is complete.

## Request by email

If you cannot use the in-app flow, email [saviomacedo718+maodesign@gmail.com](mailto:saviomacedo718+maodesign@gmail.com) with:

- subject **MaoDesign account deletion**;
- the Google account address used with MaoDesign;
- a brief confirmation that you want the account permanently deleted.

Do not send a password, token, identity document, or payment data. We may reply to the same address to verify that the request belongs to the account holder. We will confirm receipt and handle the request within applicable legal deadlines, informing you of completion or the reasons for any retention or inability to fulfill it.

## Data deleted

- Firebase identity and account identifier;
- name, email, and photo held in the MaoDesign Firebase profile;
- usage markers stored under `users/{uid}/aha_markers` in Firestore;
- local MaoDesign session credentials, which the app attempts to clear but may not successfully remove.

## Data preserved or handled separately

- **Embroidery files, thumbnails, favorites, recent files, and local preferences:** remain on the device because they are not part of the cloud account. Clearing app data or uninstalling the app may remove private app content; exported files for other destinations must be managed at those destinations.
- **Crash reports, Analytics, and advertising already processed:** deleting the Firebase account does not automatically erase all data already processed by Crashlytics, Analytics, or advertising providers. For Firebase Analytics, the settings verified for this edition are 2 months for event data and 14 months for user-level data, with reset on activity enabled for the user-level period. These settings do not establish retention for aggregated reports or other services. Deletion and objection requests are assessed according to the possible link to the data subject, applicable law, and relevant retention; where applicable, we will request action from providers. Referring to provider policies does not remove data subject rights.
- **Purchases and payment history:** Google Play keeps its own records under its legal obligations. Support data held by MaoDesign is handled separately and kept only as long as needed for its purpose, a legal obligation, or the exercise of rights; the reason will be provided if data must be retained.

## Premium subscription

**Deleting the account does not cancel the Premium subscription.** To prevent new charges, cancel it separately under **Google Play > Payments & subscriptions > Subscriptions > MaoDesign**.

With an ordinary cancellation, access continues until the end of the period already paid for and the subscription will not renew; no refund is automatic. This preserves legal rights to withdraw and other cases for reimbursement. To request a refund review, contact support or Google Play; account deletion does not need to wait until you send app feedback.

## More information

- [Privacy Policy]({{ '/Legal/privacy-policy-en/' | relative_url }})
- [Terms of Use]({{ '/Legal/terms-of-service-en/' | relative_url }})
- [Help Center]({{ '/Legal/help-en/' | relative_url }})

**Responsible party:** SAVIO DE PAIVA MACEDO

**Address:** R. Eng. Geraldo Magela de Mattos Sanábio, 1000, apto. 201, Recanto da Mata, Juiz de Fora - MG, 36083-802, Brazil

**Contact:** [saviomacedo718+maodesign@gmail.com](mailto:saviomacedo718+maodesign@gmail.com)
