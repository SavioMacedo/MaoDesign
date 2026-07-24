---
layout: legal
title: "Política de Privacidad"
description: "Cómo MaoDesign trata los datos en la aplicación Android"
lang: es-ES
permalink: /Legal/privacy-policy-es/
---

# Política de Privacidad de MaoDesign

**Última actualización:** 23 de julio de 2026

**Versión:** 2.0

**Aplicable a:** MaoDesign para Android, versión 18 y posteriores

El responsable de MaoDesign es **Savio Macedo**. Contacto: [saviomacedo.dev@gmail.com](mailto:saviomacedo.dev@gmail.com).

## 1. Resumen

- Las funciones principales pueden usarse sin cuenta.
- Archivos de bordado, miniaturas, favoritos, recientes y preferencias permanecen en el dispositivo y no se envían a un servidor propio.
- El acceso con Google es opcional y usa Firebase Authentication.
- Los informes técnicos de fallos forman el nivel Esencial. Firebase Analytics y la personalización publicitaria dependen de la elección realizada en la aplicación.
- La elección puede cambiarse en **Configuración > Nivel de Recopilación de Datos**.
- La cuenta puede eliminarse en **Perfil > Eliminar cuenta** o mediante la [página pública de eliminación]({{ '/Legal/delete-account-es/' | relative_url }}).

## 2. Datos locales

La aplicación puede conservar archivos y miniaturas, metadatos técnicos, favoritos, historial reciente, idioma y visualización, estado de consejos/evaluación/consentimiento y estado local de la suscripción, incluido un token técnico de compra de Google Play.

La copia de seguridad en la nube y la transferencia de datos privados de MaoDesign por Android están deshabilitadas. Desinstalar o borrar los datos puede eliminar este contenido. Al compartir o exportar, eliges la aplicación externa que recibe el archivo.

## 3. Cuenta Google y Firebase

Al elegir **Entrar con Google**, Google Credential Manager y Firebase Authentication procesan identificador Firebase, nombre, correo, foto y tokens técnicos de sesión. MaoDesign no recibe ni almacena tu contraseña Google.

Para usuarios autenticados, Firebase Firestore puede mantener marcadores en `users/{uid}/aha_markers` con tipo de momento, fecha/hora del servidor y metadatos técnicos. Evitan avisos repetidos y registran la finalización de flujos relevantes.

## 4. Informes de fallos esenciales

Firebase Crashlytics recibe diagnósticos para seguridad y estabilidad. Según el fallo, pueden incluir versión, modelo y estado técnico del dispositivo, versión Android, traza, mensaje de error y contexto de operación. MaoDesign no adjunta intencionalmente el contenido de los bordados. Las compilaciones Debug no envían informes a Crashlytics.

## 5. Analytics opcional

Si eliges **Analytics** o **Completo**, Firebase Analytics puede recibir eventos de uso, pantallas, resultados, versión, idioma y propiedades técnicas. El identificador Firebase puede asociarse cuando hay sesión iniciada. Analytics permanece deshabilitado hasta una elección explícita.

## 6. Publicidad opcional

Usuarios gratuitos pueden ver anuncios de **Unity LevelPlay/IronSource** y redes asociadas. Los proveedores pueden procesar identificador publicitario, IP, características del dispositivo, región aproximada e interacciones. MaoDesign concede consentimiento para datos y personalización solo en el nivel **Completo** y solicita tratamiento limitado en otros niveles cuando es compatible. Premium elimina anuncios.

## 7. Compras y suscripciones

**Google Play Billing** procesa pagos e historial. MaoDesign recibe producto, estado y token técnico para activar/restaurar Premium, pero no el número completo de tarjeta. Eliminar la cuenta MaoDesign no cancela la suscripción; cancélala por separado en **Google Play > Pagos y suscripciones > Suscripciones**.

## 8. Proveedores y tratamiento internacional

MaoDesign no vende datos personales. Google/Firebase procesa autenticación, Firestore, Crashlytics y Analytics; Google Play procesa distribución, compras, suscripciones y evaluación; Unity LevelPlay/IronSource y redes asociadas procesan publicidad gratuita. Pueden tratar datos internacionalmente y aplican sus propios plazos, medidas y obligaciones.

## 9. Conservación y eliminación

Los datos locales permanecen hasta eliminarlos, borrar los datos de la aplicación o desinstalarla. La identidad Firebase y marcadores permanecen mientras exista la cuenta. Crashlytics, Analytics, publicidad y compras siguen los plazos y obligaciones de cada proveedor.

La eliminación desde la aplicación borra marcadores Firestore, elimina la identidad Firebase y limpia credenciales locales. Los archivos y favoritos locales se conservan. Firebase puede exigir acceso reciente. Consulta los [detalles de eliminación]({{ '/Legal/delete-account-es/' | relative_url }}).

## 10. Derechos, menores y seguridad

Puedes usar la app sin cuenta, cambiar el nivel de recopilación, cerrar sesión y eliminar la cuenta. Envía solicitudes de acceso, corrección, oposición o eliminación a **saviomacedo.dev@gmail.com**; puede requerirse verificación de identidad.

MaoDesign no está dirigido específicamente a menores. Los responsables deben supervisar cuentas Google y compras. Usamos HTTPS de proveedores, reglas Firestore por usuario y controles de consentimiento sin prometer garantías adicionales.

Esta política puede cambiar cuando cambien funciones, proveedores o leyes. Los cambios materiales pueden exigir una nueva elección de consentimiento.
