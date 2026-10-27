---
layout: legal
title: "Eliminación de Cuenta"
description: "Cómo eliminar tu cuenta y los datos vinculados en MaoDesign"
lang: es-ES
permalink: /Legal/delete-account-es/
---

# Eliminación de Cuenta en MaoDesign

**Última actualización:** 27 de octubre de 2026

**Versión:** 2.2

## Eliminar desde la aplicación

Si puedes acceder a la cuenta:

1. Abre MaoDesign.
2. Ve a **Perfil**.
3. Toca **Eliminar cuenta**.
4. Lee el aviso y confirma **Eliminar cuenta**.
5. Si Firebase exige autenticación reciente, inicia sesión de nuevo y repite la operación.

Cuando la operación termina correctamente, MaoDesign elimina los marcadores de Firestore incluidos en el flujo, elimina tu identidad Firebase y limpia las credenciales locales de acceso. Si falla algún paso, la eliminación puede quedar incompleta: vuelve a intentarlo o solicita soporte por correo electrónico. Un mensaje de error no confirma que la eliminación se haya completado.

## Solicitar por correo electrónico

Si no puedes usar el flujo de la aplicación, escribe a [saviomacedo.dev@gmail.com](mailto:saviomacedo.dev@gmail.com) e incluye:

- asunto **Eliminación de cuenta MaoDesign**;
- dirección de la cuenta Google utilizada con MaoDesign;
- una breve confirmación de que deseas eliminar la cuenta permanentemente.

No envíes contraseña, token, documento de identidad ni datos de pago. Podemos responder a la misma dirección para verificar que la solicitud pertenece al titular. Confirmaremos la recepción y tramitaremos la solicitud dentro de los plazos legales aplicables, informando de la finalización o los motivos de cualquier conservación o imposibilidad de atenderla.

## Datos eliminados

- identidad e identificador de la cuenta Firebase;
- nombre, correo electrónico y foto conservados en el perfil Firebase de MaoDesign;
- marcadores de uso almacenados en `users/{uid}/aha_markers` en Firestore;
- credenciales locales de la sesión MaoDesign.

## Datos conservados o tratados por separado

- **Archivos de bordado, miniaturas, favoritos, recientes y preferencias locales:** permanecen en el dispositivo porque no forman parte de la cuenta en la nube. Borrar los datos de la aplicación o desinstalarla puede eliminar el contenido privado; los archivos exportados a otros destinos deben gestionarse en esos destinos.
- **Informes de fallos, Analytics y publicidad ya tratados:** eliminar la cuenta Firebase no borra automáticamente todos los datos ya tratados por Crashlytics, Analytics o proveedores publicitarios. Para Firebase Analytics, la configuración verificada para esta edición es de 2 meses para datos de eventos y 14 meses para datos a nivel de usuario, con el reinicio por actividad activado para la retención a nivel de usuario. Esta configuración no establece la conservación de informes agregados ni de otros servicios. Las solicitudes de eliminación y oposición se evalúan según la posibilidad de vincular los datos al titular, la legislación aplicable y las retenciones pertinentes; cuando corresponda, solicitaremos medidas a los proveedores. Referirse a sus políticas no elimina los derechos del titular.
- **Compras e historial de pagos:** Google Play conserva sus propios registros conforme a sus obligaciones legales. Los datos de soporte que conserva MaoDesign se tratan por separado y solo durante el tiempo necesario para su finalidad, una obligación legal o el ejercicio de derechos; si es necesario conservarlos, se informará el motivo.

## Suscripción Premium

**Eliminar la cuenta no cancela la suscripción Premium.** Para evitar nuevos cobros, cancélala por separado en **Google Play > Pagos y suscripciones > Suscripciones > MaoDesign**.

En una cancelación ordinaria, el acceso continúa hasta el final del período ya pagado y la suscripción no se renueva; no hay reembolso automático. Esto preserva el derecho legal de desistimiento y otros supuestos de reembolso. Para solicitar una revisión del reembolso, contacta con soporte o Google Play; la eliminación de la cuenta no tiene que esperar a que envíes comentarios sobre la aplicación.

## Más información

- [Política de Privacidad]({{ '/Legal/privacy-policy-es/' | relative_url }})
- [Términos de Uso]({{ '/Legal/terms-of-service-es/' | relative_url }})
- [Centro de Ayuda]({{ '/Legal/help-es/' | relative_url }})

**Responsable:** SAVIO DE PAIVA MACEDO

**Dirección:** R. Eng. Geraldo Magela de Mattos Sanábio, 1000, apto. 201, Recanto da Mata, Juiz de Fora - MG, 36083-802, Brasil

**Contacto:** [saviomacedo.dev@gmail.com](mailto:saviomacedo.dev@gmail.com)
