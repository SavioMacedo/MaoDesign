---
layout: legal
title: "Política de Privacidad"
description: "Cómo MaoDesign trata los datos en la aplicación Android"
lang: es-ES
permalink: /Legal/privacy-policy-es/
---

# Política de Privacidad de MaoDesign

**Última actualización:** 27 de octubre de 2026

**Versión:** 2.2

**Aplicable a:** MaoDesign para Android, desde la versión que implemente los controles de recopilación y publicidad descritos en esta política

El responsable del tratamiento de datos personales de MaoDesign es **SAVIO DE PAIVA MACEDO**. Dirección: R. Eng. Geraldo Magela de Mattos Sanábio, 1000, apto. 201, Recanto da Mata, Juiz de Fora - MG, 36083-802, Brasil. Contacto: [saviomacedo.dev@gmail.com](mailto:saviomacedo.dev@gmail.com).

## 1. Resumen

- Las funciones principales pueden usarse sin cuenta.
- Los archivos de bordado, miniaturas, favoritos, recientes y preferencias permanecen en el dispositivo y no se envían a un servidor propio de MaoDesign.
- El acceso con Google es opcional y usa Firebase Authentication.
- Los informes técnicos de fallos tienen un control independiente y están activados de forma predeterminada. La medición de uso es opcional y puede activarse o desactivarse en Configuración.
- Los usuarios Free ven anuncios contextuales, no personalizados con ninguna de las dos opciones de medición. Premium elimina los anuncios.
- En **Configuración > Medición de uso**, puedes elegir **Solo esencial** o **Permitir medición**. Un valor legado **Completo** se normaliza a **Permitir medición**.
- Puedes eliminar la cuenta en **Perfil > Eliminar cuenta** o mediante la [página pública de eliminación de cuenta]({{ '/Legal/delete-account-es/' | relative_url }}).

## 2. Datos locales

La aplicación puede conservar en el dispositivo:

- los archivos que eliges o creas, miniaturas y metadatos técnicos;
- favoritos e historial de archivos recientes;
- idioma, modo de visualización, bastidor y otras preferencias;
- estado de consejos, evaluación y consentimiento;
- estado de la suscripción y token técnico de compra proporcionado por Google Play.

Estos datos permiten usar el editor y conservar las preferencias. La copia de seguridad automática de Android y la transferencia de datos privados de la aplicación están deshabilitadas. Desinstalar la aplicación o borrar sus datos puede eliminar su contenido privado; los archivos exportados a otros destinos siguen sujetos a la gestión de esos destinos. Al compartir o exportar, eliges la aplicación externa que recibe el archivo.

## 3. Cuenta Google y Firebase

Al elegir **Entrar con Google**, Google Credential Manager y Firebase Authentication procesan un identificador Firebase, nombre, correo electrónico, foto y tokens técnicos de sesión. MaoDesign no recibe ni almacena tu contraseña de Google.

Para usuarios autenticados, Firebase Firestore puede conservar marcadores en `users/{uid}/aha_markers`, con el tipo de momento, la fecha y hora del servidor y metadatos técnicos. Evitan avisos repetidos e indican la finalización de flujos relevantes.

## 4. Informes de fallos y control independiente

Firebase Crashlytics recibe diagnósticos para mantener la seguridad y la estabilidad. Según el fallo, pueden incluir la versión de la aplicación, el modelo y estado técnico del dispositivo, la versión de Android, la traza de ejecución, el mensaje de error y el contexto técnico. MaoDesign no añade intencionalmente el contenido de los archivos a los informes. Las compilaciones Debug no envían informes a Crashlytics.

Este tratamiento es independiente de la medición de uso y de la publicidad contextual. **Enviar informes de errores** está activado de forma predeterminada y puede desactivarse en Configuración. Desactivarlo no requiere cambiar la opción de medición; cambiar esa opción no modifica por sí solo el control de los informes de errores. Para bloquear por completo el SDK puede ser necesario volver a abrir la aplicación.

La base utilizada para los diagnósticos es el interés legítimo en la seguridad y estabilidad, sujeto a la necesidad, proporcionalidad, expectativas del titular y salvaguardas aplicables. El responsable debe mantener documentada esta evaluación. Puedes oponerte al tratamiento y pedir aclaraciones mediante el contacto indicado en esta política.

## 5. Analytics opcional

En **Configuración > Medición de uso**, elige **Solo esencial** para mantener desactivada la medición de uso o **Permitir medición** para autorizar la recopilación opcional de Firebase Analytics. Cuando se permite la medición, Firebase Analytics puede recibir eventos de uso, pantallas visitadas, resultados de operaciones, versión de la aplicación, idioma y propiedades técnicas, como la cantidad de archivos, el formato preferido y el nivel de suscripción. Este tratamiento se basa en el consentimiento y la recopilación permanece deshabilitada hasta que una elección explícita la autorice. Puedes revocar tu elección en Configuración.

Si una versión anterior guardó el valor **Completo**, se normaliza a **Permitir medición**. Esto no representa consentimiento para la personalización publicitaria.

MaoDesign **no establece el identificador de la cuenta Firebase como identificador de usuario en Analytics**. El SDK puede usar identificadores propios de la instalación o instancia de la aplicación. Esto no significa que toda la información técnica sea anónima.

Con **Solo esencial**, la medición de Firebase Analytics está deshabilitada. Esto no impide los diagnósticos autorizados mediante el control separado ni los anuncios contextuales; el tratamiento de datos publicitarios por parte de los proveedores no depende de la opción de medición.

## 6. Publicidad contextual

Los usuarios del plan gratuito pueden ver anuncios contextuales de **Unity LevelPlay/IronSource** y redes asociadas. MaoDesign no usa la opción de medición para personalizar anuncios ni solicita consentimiento para esa finalidad. Para mostrar anuncios contextuales, medir su rendimiento técnico y proteger el servicio frente al fraude o el abuso, los proveedores pueden tratar direcciones IP, información y características técnicas del dispositivo y datos sobre la entrega e interacción con anuncios, como visualizaciones y clics. Las categorías y señales tratadas pueden variar según el SDK, la plataforma, la red y el payload. MaoDesign configura las opciones de privacidad disponibles en los SDK antes de inicializarlos, incluida una señal para limitar el uso del identificador del dispositivo por Unity y la desactivación de la recopilación del identificador publicitario en Firebase Analytics. Estas opciones no garantizan que no se traten identificadores en todos los SDK, sistemas operativos, socios o payloads. Premium elimina los anuncios.

## 7. Compras y suscripciones

**Google Play Billing** procesa los pagos y el historial de compras. MaoDesign recibe el producto, el estado y un token técnico de compra para activar y restaurar Premium, pero no el número completo de la tarjeta. Eliminar la cuenta MaoDesign no cancela una suscripción; cancélala por separado en **Google Play > Pagos y suscripciones > Suscripciones**.

Al atender compras, cancelaciones y reembolsos, podemos tratar el nombre y correo electrónico utilizados para contactarnos, el número de pedido GPA, la fecha, el importe y los datos mínimos de confirmación. La finalidad es localizar la transacción, atender la solicitud, cumplir obligaciones legales o ejercer derechos. No pedimos tu contraseña ni el número completo de la tarjeta. Un relato opcional de tus expectativas y dificultades se usa para orientar mejoras y no es una condición para atender la solicitud.

## 8. Proveedores y transferencias

MaoDesign no vende datos personales. Los datos pueden ser tratados por:

- **Google/Firebase:** autenticación, Firestore, Crashlytics y Analytics;
- **Google Play:** distribución, compras, suscripciones y evaluación en la aplicación;
- **Unity LevelPlay/IronSource y redes asociadas:** anuncios contextuales para usuarios del plan gratuito.

Estos proveedores pueden tratar datos en otros países. Las transferencias internacionales deben seguir los mecanismos admitidos por la legislación aplicable y los instrumentos contractuales pertinentes. El uso de un proveedor no elimina las responsabilidades de MaoDesign por el tratamiento que realiza o determina. Puedes consultar información de los proveedores en [privacidad y seguridad de Firebase](https://firebase.google.com/support/privacy), [Política de Privacidad de Google](https://policies.google.com/privacy) y [Política de Privacidad de Unity](https://unity.com/legal/privacy-policy).

## 9. Conservación y eliminación

| Categoría | Conservación y criterio de finalización |
| --- | --- |
| Contenido privado y preferencias locales | Hasta que los elimines, borres los datos de la aplicación o la desinstales. Los archivos exportados permanecen en el destino que elegiste. |
| Identidad Firebase y marcadores vinculados | Mientras sean necesarios para la cuenta y los flujos relacionados; al completar la eliminación se eliminan la identidad y los marcadores incluidos en el flujo. |
| Datos de soporte y compra tratados por soporte | Durante el tiempo necesario para resolver la solicitud, cumplir obligaciones legales y ejercer derechos. Cuando esas finalidades terminen, los datos deben eliminarse o anonimizarse cuando corresponda. |
| Firebase Analytics | Configuración verificada para esta edición: 2 meses para datos de eventos y 14 meses para datos a nivel de usuario, con el reinicio por actividad activado para el período a nivel de usuario. Esto describe solo la configuración de Analytics y no establece la conservación de informes agregados ni de otros servicios. |
| Diagnósticos y publicidad contextual | Según la finalidad, la configuración y la conservación que se aplique efectivamente a cada servicio. Las solicitudes de eliminación y oposición también se evalúan en relación con los proveedores; la simple referencia a sus políticas no elimina los derechos del titular. |
| Registros de pago de Google Play | Google Play los conserva conforme a sus propias obligaciones. Son distintos de los datos de soporte que conserva MaoDesign. |

Esta política no establece un plazo único de conservación para categorías con finalidades diferentes. Puedes solicitar los criterios y la información sobre el tratamiento aplicable a tu caso. Si se conservan datos por una obligación legal o para ejercer derechos, se informará el motivo correspondiente.

Cuando se completa la eliminación de la cuenta desde la aplicación, se eliminan los marcadores Firestore incluidos en el flujo, se elimina la identidad Firebase y se limpian las credenciales locales. Los archivos y favoritos locales se conservan. Firebase puede exigir un acceso reciente. Si falla algún paso, no des por hecho que todo terminó: vuelve a intentarlo o contacta con soporte. Este flujo no confirma la eliminación de todos los datos ya tratados por Crashlytics, Analytics o los proveedores publicitarios. Puedes usar el mismo canal para solicitar información sobre otros datos asociados; cuando corresponda, evaluaremos las solicitudes en relación con los proveedores. Consulta los [detalles de eliminación de cuenta]({{ '/Legal/delete-account-es/' | relative_url }}).

## 10. Derechos y opciones

Puedes usar la aplicación sin iniciar sesión, cambiar el nivel de recopilación, controlar por separado los informes de errores, cerrar sesión y eliminar la cuenta. Al escribir a **saviomacedo.dev@gmail.com**, puedes solicitar confirmación del tratamiento, acceso, corrección, información sobre el uso compartido, revocación del consentimiento, oposición y, cuando corresponda, portabilidad, anonimización, bloqueo o eliminación.

Podemos confirmar tu identidad con los datos mínimos necesarios antes de atender solicitudes vinculadas a una cuenta. El soporte es gratuito y observa los plazos y límites legales. Si no es posible atender una solicitud de inmediato, informaremos los motivos y la medida que corresponda. También puedes acudir a la Autoridad Nacional de Protección de Datos de Brasil y a los organismos de defensa del consumidor.

## 11. Público, seguridad y cambios

MaoDesign está dirigido a personas de 16 años o más. Google Play indica los grupos de público 16–17 y 18+. Su clasificación de contenido **Todos** es independiente de esta indicación por edad. La aplicación no está específicamente dirigida a personas menores de 16 años. Para usuarios de 16 y 17 años, las personas responsables deben supervisar las cuentas Google y las compras conforme a las reglas aplicables. Usamos HTTPS de los SDK, reglas de Firestore por usuario y controles de consentimiento, sin afirmar garantías más allá de las que realmente ofrecen la plataforma y los proveedores.

Esta política puede cambiar cuando cambien las funciones, los proveedores o las leyes. Los cambios relevantes pueden requerir una nueva elección de consentimiento.
