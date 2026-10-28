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

The controller of personal data for MaoDesign is **SAVIO DE PAIVA MACEDO**. Address: R. Eng. Geraldo Magela de Mattos Sanábio, 1000, apto. 201, Recanto da Mata, Juiz de Fora - MG, 36083-802, Brazil. Contact: [saviomacedo718+maodesign@gmail.com](mailto:saviomacedo718+maodesign@gmail.com).

## 1. Summary

- Core features can be used without an account.
- Embroidery files, thumbnails, favorites, recent files, and preferences remain on the device and are not sent to a server operated by MaoDesign.
- Google sign-in is optional and uses Firebase Authentication.
- Technical crash reports have an independent control and are on by default. Usage measurement is optional and can be turned on or off in Settings.
- Free users see contextual ads, without personalization under either measurement option. Premium removes ads.
- Under **Settings > Usage measurement**, the options are **Essential only** and **Allow measurement**. A legacy **Full** value is normalized to **Allow measurement**.
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

For authenticated users, Firebase Firestore may keep markers under `users/{uid}/aha_markers`, including the event type, server date and time, and technical metadata. These markers avoid repeated prompts and indicate completion of relevant flows.

## 4. Crash reports and independent control

Firebase Crashlytics receives diagnostics to maintain security and stability. Depending on the failure, they may include app version, device model and technical state, Android version, technical installation identifiers, stack trace, error message, and technical context. Messages produced by file operations may include local names or paths; therefore, we do not claim that every report is anonymous or free of this information. MaoDesign does not intentionally request or attach file contents to reports. Debug builds do not send reports to Crashlytics.

This processing is separate from usage measurement and contextual advertising. **Send error reports** is on by default and can be turned off in Settings. Turning it off does not require changing the measurement option; changing that option does not by itself change the crash report control. Fully blocking the SDK may require reopening the app.

The basis adopted for diagnostics is legitimate interest in security and stability, subject to necessity, proportionality, the data subject's expectations, and applicable safeguards. The controller must keep this assessment documented. You may object to the processing and ask questions through the contact in this policy.

## 5. Optional Analytics

Under **Settings > Usage measurement**, choose **Essential only** to keep usage measurement off or **Allow measurement** to authorize optional collection through Firebase Analytics. When measurement is allowed, Firebase Analytics may receive usage events, screens accessed, operation outcomes, app version, language, and technical properties such as file counts, preferred format, and subscription level. This processing is based on consent, and collection stays disabled until you make an explicit choice authorizing it. You can withdraw your choice in Settings.

If an earlier version saved the **Full** value, it is normalized to **Allow measurement**. This does not represent consent to personalized advertising.

MaoDesign **does not set the Firebase account identifier as the user ID in Analytics**. The SDK may use its own identifiers for the app installation or instance. This does not mean all technical information is anonymous.

With **Essential only**, Firebase Analytics measurement is disabled. This does not prevent diagnostics authorized by the separate control or contextual ads; providers' data processing for ads does not depend on the measurement option.

The current Analytics account settings also allow Google to use data to improve products and services, contribute to business estimates and insights, provide technical support, and make recommendations for the business. For sharing with its own products and services, Google acts as an independent controller under its [controller-to-controller data protection terms](https://support.google.com/analytics/answer/9012600?hl=en). These uses do not authorize MaoDesign to personalize ads. Turning off measurement in the app prevents new optional submissions from the app but does not automatically delete history already received by providers.

## 6. Contextual advertising

Free users may see contextual ads from **Unity LevelPlay/IronSource**, including the **AdQuality** component for ad quality and measurement, and partner networks. MaoDesign does not use the measurement option to personalize ads or request consent for that purpose. To deliver contextual ads, measure performance, and protect the service against fraud or abuse, providers may process IP addresses, technical device information, installation identifiers, views, clicks, and ad impression and revenue information. The categories and signals processed may vary by SDK, platform, network, and configuration. Before initialization, MaoDesign configures available privacy restrictions, including limiting Unity's use of device identifiers and disabling advertising-ID collection by Firebase Analytics. These restrictions do not mean that all identifiers or SDK storage/access are absent. The absence of personalization does not remove authorizations required by law for storing information on or accessing information on the device. Premium removes ads.

## 7. Purchases and subscriptions

**Google Play Billing** processes payments and purchase history. MaoDesign receives the product, status, and a technical purchase token to unlock and restore Premium, but not the full card number. Deleting your MaoDesign account does not cancel a subscription; cancel it separately under **Google Play > Payments & subscriptions > Subscriptions**.

When handling purchases, cancellations, and refunds, we may process the name and email used to contact us, the GPA order number, date, amount, and minimum confirmation information. The purposes are to locate the transaction, handle the request, meet legal obligations, or exercise rights. We do not ask for your password or full card number. An optional description of your expectations and difficulties is used to guide improvements and is not a condition for handling your request.

## 8. Providers and transfers

MaoDesign does not sell personal data. Data may be processed by:

- **Google/Firebase:** authentication and Firestore under applicable Google Cloud terms, and Crashlytics under Firebase-specific terms;
- **Google Analytics:** optional measurement under its own processing terms; the additional uses described in section 5 follow their corresponding terms;
- **Google Play:** distribution, purchases, subscriptions, and in-app review;
- **Google/Gmail:** receipt and storage of support messages;
- **Unity LevelPlay/IronSource, AdQuality, and partner networks:** advertising and its measurement for the Free plan. Unity may act as an independent controller for its own purposes described in its terms and policy.

Firestore is configured in the São Paulo, Brazil region (`southamerica-east1`); Firebase Authentication is processed in the United States. A database region does not mean that all services, support, and subprocessors process data only in Brazil. Other providers may also use infrastructure in other countries.

International transfers must use the legal basis and mechanism applicable to each service and destination. The instruments do not have a single, universal scope: the [Cloud DPA](https://cloud.google.com/terms/data-processing-addendum), [Firebase data processing terms](https://firebase.google.com/terms/data-processing-terms/), [Analytics terms](https://business.safety.google/adsprocessorterms/), and [Unity DPA](https://unity.com/legal/unity-data-processing-addendum-dpa) cover different services and roles. The Analytics agreement does not replace the others, and a Gmail mailbox is not presumed to be covered by the Workspace DPA. Through the contact in this policy, you can request information about relevant recipients, countries, and safeguards. Using a provider does not remove MaoDesign's responsibility for processing it carries out or determines. See also [Firebase privacy and security](https://firebase.google.com/support/privacy), the [Google Privacy Policy](https://policies.google.com/privacy), and [Unity's privacy policy](https://unity.com/legal/game-player-and-app-user-privacy-policy).

Additional use of **Firebase Service Data** for analytics, recommendations, and improvement of non-Firebase Google services remains enabled. This category is generated through the provision and administration of Firebase, is distinct from customer data sent by the app, and is governed by Google's terms and policy.

## 9. Retention and deletion

| Category | Retention and end-of-purpose criterion |
| --- | --- |
| Private content and local preferences | Until you remove them, clear app data, or uninstall the app. Exported files remain at the destination you chose. |
| Firebase identity and linked markers | Until deletion or the end of the purpose. According to Firebase, IP addresses are kept for a few weeks; other authentication data is removed within 180 days after a deletion request is submitted to the provider. |
| Support and purchase data handled through support | For as long as needed to resolve the request, meet legal obligations, and exercise rights. The controller reviews closed support cases monthly to delete or anonymize data that is no longer necessary. Any exceptional retention must have a recorded reason and end criterion. |
| Firebase Analytics | Verified settings for this edition: 2 months for event data and 14 months for user-level data, with reset on activity enabled for the user-level period. This describes Analytics settings only and does not set retention for aggregated reports or other services. |
| Firebase Crashlytics | The provider states that 90 days pass before it starts removing diagnostics and identifiers from active systems and backups; this is not a maximum deletion period. |
| Contextual advertising and AdQuality | According to the purposes, obligations, and criteria applicable to data processed by providers, as described in their policies and available upon request. No single period has been confirmed for all networks. Deletion and objection requests are also assessed in relation to recipients. |
| Google Play payment records | Retained by Google Play under its own obligations. These are separate from support data retained by MaoDesign. |

This policy does not adopt one retention period for categories with different purposes. You may request the criteria and information about the processing applicable to your case. Retention required by law or for exercising rights will be explained with the relevant reason.

The app's flow removes the covered Firestore markers and then deletes the Firebase identity; failures may leave steps incomplete. After the identity is deleted, the app tries to clear local credentials, but this cleanup may fail even when the app reports that deletion is complete. Local files and favorites are preserved. Firebase may require recent sign-in. If there is an error or doubt about a step, try again or contact support.

This flow does not confirm deletion of all history already processed by Analytics, Crashlytics, or advertising providers. Turning off collection affects future submissions and is not the same as deleting remote data. Requests concerning technical identifiers depend on whether records can be located using the relevant minimum information; you do not need to create an account just to exercise your rights. If it is not possible to locate or delete data, we will explain the limitation and appropriate measures. See the [account deletion details]({{ '/Legal/delete-account-en/' | relative_url }}).

## 10. Rights and choices

You can use the app without signing in, change the collection level, control crash reports separately, sign out, and delete your account. By contacting **saviomacedo718+maodesign@gmail.com**, you may request confirmation of processing, access, correction, information about sharing, withdrawal of consent, objection, and, where applicable, portability, anonymization, blocking, or deletion.

We may confirm your identity using the minimum information needed before handling requests linked to an account. Support is free and follows legal deadlines and limits. If we cannot fulfill a request immediately, we will explain the reasons and appropriate next steps. You may also contact Brazil's National Data Protection Authority and consumer protection bodies.

## 11. Audience, security, and changes

MaoDesign is intended for people aged 16 and older. Google Play lists audience groups 16–17 and 18+. Its **Everyone** (**Livre**) content rating is separate from this age-based designation. The app is not specifically directed to people under 16. For users aged 16–17, guardians should supervise Google accounts and purchases under applicable rules. We use HTTPS provided by the SDKs, per-user Firestore rules, and consent controls, without claiming guarantees beyond those actually provided by the platform and providers.

This policy may change when features, providers, or laws change. Material changes may require a new consent choice.
