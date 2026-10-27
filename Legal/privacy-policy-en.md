---
layout: legal
title: "Privacy Policy"
description: "How MaoDesign handles data in the Android app"
lang: en-US
permalink: /Legal/privacy-policy-en/
---

# MaoDesign Privacy Policy

**Last updated:** October 27, 2026

**Version:** 2.2

**Applies to:** MaoDesign for Android, starting with the release that implements the collection and advertising controls described in this policy

The controller of personal data for MaoDesign is **SAVIO DE PAIVA MACEDO**. Address: R. Eng. Geraldo Magela de Mattos Sanábio, 1000, apto. 201, Recanto da Mata, Juiz de Fora - MG, 36083-802, Brazil. Contact: [saviomacedo.dev@gmail.com](mailto:saviomacedo.dev@gmail.com).

## 1. Summary

- Core features can be used without an account.
- Embroidery files, thumbnails, favorites, recent files, and preferences remain on the device and are not sent to a server operated by MaoDesign.
- Google sign-in is optional and uses Firebase Authentication.
- Technical crash reports have an independent control and are on by default. Usage measurement is optional and can be turned on or off in Settings.
- Free users see contextual ads, which are not personalized with either measurement option. Premium removes ads.
- Under **Settings > Usage measurement**, choose **Essential only** or **Allow measurement**. A legacy **Full** value is normalized to **Allow measurement**.
- You can delete your account under **Profile > Delete account** or through the [public account deletion page]({{ '/Legal/delete-account-en/' | relative_url }}).

## 2. Local data

The app may keep the following data on your device:

- files you select or create, thumbnails, and technical metadata;
- favorites and recent-file history;
- language, display mode, hoop, and other preferences;
- hint, review, and consent state;
- subscription state and a technical purchase token provided by Google Play.

This data operates the editor and preserves preferences. Android automatic backup and transfer of private app data are disabled. Uninstalling the app or clearing its data may erase private app content; files exported to other destinations remain subject to management by those destinations. When you share or export a file, you choose the external app that receives it.

## 3. Google account and Firebase

When you choose **Sign in with Google**, Google Credential Manager and Firebase Authentication process a Firebase identifier, name, email, photo, and technical session tokens. MaoDesign does not receive or store your Google password.

For authenticated users, Firebase Firestore may keep markers under `users/{uid}/aha_markers`, including the moment type, server date and time, and technical metadata. These markers avoid repeated prompts and indicate completion of relevant flows.

## 4. Crash reports and independent control

Firebase Crashlytics receives diagnostics to maintain security and stability. Depending on the failure, they may include app version, device model and technical state, Android version, stack trace, error message, and technical context. MaoDesign does not intentionally add file content to reports. Debug builds do not send reports to Crashlytics.

This processing is separate from usage measurement and contextual advertising. **Send error reports** is on by default and can be turned off in Settings. Turning it off does not require changing the measurement option; changing that option does not by itself change the crash report control. Fully blocking the SDK may require reopening the app.

The basis used for diagnostics is legitimate interest in security and stability, subject to necessity, proportionality, the data subject's expectations, and applicable safeguards. The operator must keep this assessment documented. You may object to the processing and ask questions through the contact in this policy.

## 5. Optional Analytics

Under **Settings > Usage measurement**, choose **Essential only** to keep usage measurement off or **Allow measurement** to authorize optional collection through Firebase Analytics. When measurement is allowed, Firebase Analytics may receive usage events, screens accessed, operation outcomes, app version, language, and technical properties such as file counts, preferred format, and subscription level. This processing is based on consent, and collection stays disabled until you make an explicit choice authorizing it. You can withdraw your choice in Settings.

If an earlier version saved the **Full** value, it is normalized to **Allow measurement**. This does not represent consent to personalized advertising.

MaoDesign **does not set the Firebase account identifier as the user ID in Analytics**. The SDK may use its own identifiers for the app installation or instance. This does not mean all technical information is anonymous.

With **Essential only**, Firebase Analytics measurement is disabled. This does not prevent diagnostics authorized by the separate control or contextual ads; provider data processing for ads does not depend on the measurement option.

## 6. Contextual advertising

Free users may see contextual ads from **Unity LevelPlay/IronSource** and partner networks. MaoDesign does not use the measurement option to personalize ads or request consent for that purpose. To deliver contextual ads, measure technical performance, and protect the service against fraud or abuse, providers may process IP addresses, technical device information and characteristics, and ad delivery and interaction data such as views and clicks. The categories and signals processed may vary by SDK, platform, network, and payload. MaoDesign configures the privacy options available in the SDKs before initializing them, including a signal to limit Unity's use of device identifiers and disabling advertising-ID collection in Firebase Analytics. These options do not guarantee that no identifiers are processed across all SDKs, operating systems, partners, or payloads. Premium removes ads.

## 7. Purchases and subscriptions

**Google Play Billing** processes payments and purchase history. MaoDesign receives the product, status, and a technical purchase token to unlock and restore Premium, but not the full card number. Deleting your MaoDesign account does not cancel a subscription; cancel it separately under **Google Play > Payments & subscriptions > Subscriptions**.

When handling purchases, cancellations, and refunds, we may process the name and email used to contact us, the GPA order number, date, amount, and minimum confirmation information. The purposes are to locate the transaction, handle the request, meet legal obligations, or exercise rights. We do not ask for your password or full card number. An optional account of your expectations and difficulties is used to guide improvements and is not a condition for handling your request.

## 8. Providers and transfers

MaoDesign does not sell personal data. Data may be processed by:

- **Google/Firebase:** authentication, Firestore, Crashlytics, and Analytics;
- **Google Play:** distribution, purchases, subscriptions, and in-app review;
- **Unity LevelPlay/IronSource and partner networks:** contextual ads for Free users.

These providers may process data in other countries. International transfers must follow mechanisms permitted by applicable law and relevant contractual instruments. Using a provider does not remove MaoDesign's responsibilities for processing it carries out or determines. Provider information is available in [Firebase privacy and security](https://firebase.google.com/support/privacy), [Google Privacy Policy](https://policies.google.com/privacy), and [Unity Privacy Policy](https://unity.com/legal/privacy-policy).

## 9. Retention and deletion

| Category | Retention and end-of-purpose criterion |
| --- | --- |
| Private content and local preferences | Until you remove them, clear app data, or uninstall the app. Exported files remain at the destination you chose. |
| Firebase identity and linked markers | While needed for the account and related flows; completed deletion removes the identity and markers covered by the flow. |
| Support and purchase data handled by support | For as long as needed to resolve the request, meet legal obligations, and exercise rights. When those purposes end, data should be deleted or anonymized where appropriate. |
| Firebase Analytics | Verified settings for this edition: 2 months for event data and 14 months for user-level data, with reset on activity enabled for the user-level period. This describes Analytics settings only and does not set retention for aggregated reports or other services. |
| Crash diagnostics and contextual advertising | According to the purpose, settings, and retention actually applicable to each service. Deletion and objection requests are also assessed in relation to providers; merely referring to their policies does not remove data subject rights. |
| Google Play payment records | Retained by Google Play under its own obligations. These are separate from support data retained by MaoDesign. |

This policy does not set one retention period for categories with different purposes. You may ask for the criteria and information about processing that applies to your case. Any retention required by law or for exercising rights will be explained with the reason.

When account deletion through the app completes, the Firestore markers covered by the flow are removed, the Firebase identity is deleted, and local credentials are cleared. Local files and favorites are preserved. Firebase may require recent sign-in. If a step fails, do not assume all steps are complete: try again or contact support. This flow does not confirm deletion of all data already processed by Crashlytics, Analytics, or advertising providers. You can use the same channel to make requests about other associated data; where applicable, we will assess requests in relation to providers. See the [account deletion details]({{ '/Legal/delete-account-en/' | relative_url }}).

## 10. Rights and choices

You can use the app without signing in, change the collection level, control crash reports separately, sign out, and delete your account. By contacting **saviomacedo.dev@gmail.com**, you may request confirmation of processing, access, correction, information about sharing, withdrawal of consent, objection, and, where applicable, portability, anonymization, blocking, or deletion.

We may confirm your identity using the minimum information needed before handling requests linked to an account. Support is free and follows legal deadlines and limits. If we cannot fulfill a request immediately, we will explain the reasons and appropriate next steps. You may also contact Brazil's National Data Protection Authority and consumer protection bodies.

## 11. Audience, security, and changes

MaoDesign is intended for people aged 16 and older. Google Play lists audience groups 16–17 and 18+. Its **Everyone** content rating is separate from this age-based designation. The app is not specifically directed to people under 16. For users aged 16–17, guardians should supervise Google accounts and purchases under applicable rules. We use HTTPS provided by the SDKs, per-user Firestore rules, and consent controls, without claiming guarantees beyond those actually provided by the platform and providers.

This policy may change when features, providers, or laws change. Material changes may require a new consent choice.
