---
layout: legal
title: "Privacy Policy"
description: "How MaoDesign handles data in the Android app"
lang: en-US
permalink: /Legal/privacy-policy-en/
---

# MaoDesign Privacy Policy

**Last updated:** July 23, 2026

**Version:** 2.0

**Applies to:** MaoDesign for Android, version 18 and later

MaoDesign is operated by **Savio Macedo**. Contact: [saviomacedo.dev@gmail.com](mailto:saviomacedo.dev@gmail.com).

## 1. Summary

- Core features can be used without an account.
- Embroidery files, thumbnails, favorites, recent files, and preferences remain on the device and are not uploaded to a server operated by MaoDesign.
- Google sign-in is optional and uses Firebase Authentication.
- Technical crash reports are the Essential level. Firebase Analytics and ad personalization depend on the choice made in the app.
- Change the choice under **Settings > Data Collection Level**.
- Delete an account under **Profile > Delete account** or through the [public deletion page]({{ '/Legal/delete-account-en/' | relative_url }}).

## 2. Local data

The app may keep files and thumbnails, technical file metadata, favorites, recent history, language and display preferences, hint/review/consent state, and local subscription state including a technical Google Play purchase token. This data operates the editor and preserves preferences.

Android cloud backup and device transfer of MaoDesign private data are disabled. Uninstalling the app or clearing app data may erase this content. When sharing or exporting, you choose the external app that receives the file.

## 3. Google account and Firebase

When you choose **Sign in with Google**, Google Credential Manager and Firebase Authentication process a Firebase identifier, name, email, photo, and technical session tokens. MaoDesign does not receive or store your Google password.

For signed-in users, Firebase Firestore may hold markers under `users/{uid}/aha_markers`, including the moment type, server timestamp, and technical metadata. They prevent repeated prompts and record completion of relevant flows.

## 4. Essential crash reports

Firebase Crashlytics receives diagnostics used for security and stability. Depending on the failure, data may include app version, device model and technical state, Android version, stack trace, error message, and operation context. MaoDesign does not intentionally attach embroidery file content. Debug builds do not send reports to Crashlytics.

## 5. Optional Analytics

If you choose **Analytics** or **Full**, Firebase Analytics may receive usage events, screens, operation outcomes, version, language, and technical properties. A Firebase identifier may be associated when signed in. Analytics stays disabled until an explicit choice.

## 6. Optional advertising

Free users may see ads from **Unity LevelPlay/IronSource** and partner networks. Providers may process advertising ID, IP address, device characteristics, approximate region, and ad interactions. MaoDesign grants ad data and personalization consent only at the **Full** level and requests limited treatment at other levels when supported. Premium removes ads.

## 7. Purchases and subscriptions

**Google Play Billing** processes payments and purchase history. MaoDesign receives product, status, and a technical purchase token to unlock and restore Premium, but not the full card number. Deleting a MaoDesign account does not cancel a subscription; cancel separately under **Google Play > Payments & subscriptions > Subscriptions**.

## 8. Providers and international processing

MaoDesign does not sell personal data. Data may be processed by Google/Firebase for authentication, Firestore, Crashlytics, and Analytics; Google Play for distribution, purchases, subscriptions, and in-app review; and Unity LevelPlay/IronSource and partner networks for free-user advertising. Providers may process data internationally and apply their own retention, safeguards, and legal duties.

## 9. Retention and deletion

Local data remains until removed, app data is cleared, or the app is uninstalled. Firebase identity and linked markers remain while the account exists. Crashlytics, Analytics, advertising, and purchase data follow provider retention and legal requirements.

In-app deletion removes Firestore markers, deletes the Firebase identity, and clears local sign-in credentials. Local files and favorites are preserved. Firebase may require recent sign-in. See the [deletion details]({{ '/Legal/delete-account-en/' | relative_url }}).

## 10. Rights, children, and security

You may use the app without signing in, change collection level, sign out, and delete the account. Send access, correction, objection, or deletion requests to **saviomacedo.dev@gmail.com**; identity verification may be required.

MaoDesign is not specifically directed to children. Guardians should supervise Google accounts and purchases. We use provider HTTPS, per-user Firestore rules, and consent controls without claiming guarantees beyond those actually provided.

This policy may change when features, providers, or laws change. Material changes may require a new consent choice.
