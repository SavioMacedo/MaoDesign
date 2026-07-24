---
layout: legal
title: "Eliminación de Cuenta"
description: "Cómo eliminar tu cuenta y los datos vinculados en MaoDesign"
lang: es-ES
permalink: /Legal/delete-account-es/
---

# Eliminación de Cuenta en MaoDesign

**Última actualización:** 23 de julio de 2026  
**Versión:** 2.0

## Eliminar desde la aplicación

Si puedes acceder a la cuenta:

1. Abre MaoDesign.
2. Ve a **Perfil**.
3. Toca **Eliminar cuenta**.
4. Lee el aviso y confirma **Eliminar cuenta**.
5. Si Firebase exige una autenticación reciente, inicia sesión de nuevo y repite la operación.

Cuando la operación termina, MaoDesign elimina los marcadores de Firestore vinculados a tu identificador, elimina tu identidad de Firebase y limpia las credenciales locales de acceso.

## Solicitar por correo electrónico

Si no puedes usar el flujo de la aplicación, escribe a [saviomacedo.dev@gmail.com](mailto:saviomacedo.dev@gmail.com) e incluye:

- asunto **Eliminación de cuenta MaoDesign**;
- dirección de la cuenta Google utilizada con MaoDesign;
- una breve confirmación de que deseas eliminar la cuenta permanentemente.

No envíes contraseña, token, documento de identidad ni datos de pago. Podemos responder a la misma dirección para verificar que la solicitud pertenece al titular. La solicitud se atenderá tan pronto como sea razonablemente posible y conforme a la legislación aplicable.

## Datos eliminados

- identidad e identificador de cuenta Firebase;
- nombre, correo electrónico y foto del perfil Firebase de MaoDesign;
- marcadores de uso almacenados en `users/{uid}/aha_markers` en Firestore;
- credenciales locales de la sesión MaoDesign.

## Datos conservados o tratados por separado

- **Archivos de bordado, miniaturas, favoritos, recientes y preferencias locales:** permanecen en el dispositivo porque no son datos de la cuenta en la nube. Puedes eliminarlos borrando los datos de la aplicación o desinstalándola.
- **Informes de fallos, Analytics y publicidad ya procesados:** siguen las políticas, plazos y obligaciones legales de cada proveedor.
- **Compras e historial de pagos:** permanecen bajo responsabilidad de Google Play.

## Suscripción Premium

**Eliminar la cuenta no cancela Premium.** Para evitar futuros cargos, cancela la suscripción por separado en **Google Play > Pagos y suscripciones > Suscripciones > MaoDesign**.

## Más información

- [Política de Privacidad]({{ '/Legal/privacy-policy-es/' | relative_url }})
- [Términos de Uso]({{ '/Legal/terms-of-service-es/' | relative_url }})
- [Centro de Ayuda]({{ '/Legal/help-es/' | relative_url }})

**Contacto:** [saviomacedo.dev@gmail.com](mailto:saviomacedo.dev@gmail.com)
