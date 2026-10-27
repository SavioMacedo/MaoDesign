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

El responsable del tratamiento de datos personales de MaoDesign es **SAVIO DE PAIVA MACEDO**. Dirección: R. Eng. Geraldo Magela de Mattos Sanábio, 1000, apto. 201, Recanto da Mata, Juiz de Fora - MG, 36083-802, Brasil. Contacto: [saviomacedo718+maodesign@gmail.com](mailto:saviomacedo718+maodesign@gmail.com).

## 1. Resumen

- Las funciones principales pueden usarse sin cuenta.
- Los archivos de bordado, miniaturas, favoritos, archivos recientes y preferencias permanecen en el dispositivo y no se envían a un servidor propio de MaoDesign.
- El acceso con Google es opcional y usa Firebase Authentication.
- Los informes técnicos de fallos tienen un control independiente y están activados de forma predeterminada. La medición de uso es opcional y puede activarse o desactivarse en Configuración.
- Los usuarios Free ven anuncios contextuales, sin personalización con ninguna de las dos opciones de medición. Premium elimina los anuncios.
- En **Configuración > Medición de uso**, las opciones son **Solo esencial** y **Permitir medición**. Un valor legado **Completo** se normaliza a **Permitir medición**.
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

Para usuarios autenticados, Firebase Firestore puede conservar marcadores en `users/{uid}/aha_markers`, con el tipo de evento, la fecha y hora del servidor y metadatos técnicos. Evitan avisos repetidos e indican la finalización de flujos relevantes.

## 4. Informes de fallos y control independiente

Firebase Crashlytics recibe diagnósticos para mantener la seguridad y la estabilidad. Según el fallo, pueden incluir la versión de la aplicación, el modelo y estado técnico del dispositivo, la versión de Android, identificadores técnicos de instalación, la traza de ejecución, el mensaje de error y el contexto técnico. Los mensajes generados por operaciones con archivos pueden incluir nombres o rutas locales; por eso, no afirmamos que todos los informes sean anónimos o estén libres de esa información. MaoDesign no solicita ni adjunta intencionalmente el contenido de los archivos a los informes. Las compilaciones Debug no envían informes a Crashlytics.

Este tratamiento es independiente de la medición de uso y de la publicidad contextual. **Enviar informes de errores** está activado de forma predeterminada y puede desactivarse en Configuración. Desactivarlo no requiere cambiar la opción de medición; cambiar esa opción no modifica por sí solo el control de los informes de errores. Para bloquear por completo el SDK puede ser necesario volver a abrir la aplicación.

La base adoptada para los diagnósticos es el interés legítimo en la seguridad y la estabilidad, sujeto a la necesidad, la proporcionalidad, las expectativas del titular y las salvaguardas aplicables. El responsable debe mantener documentada esta evaluación. Puedes oponerte al tratamiento y solicitar aclaraciones mediante el contacto indicado en esta política.

## 5. Analytics opcional

En **Configuración > Medición de uso**, elige **Solo esencial** para mantener desactivada la medición de uso o **Permitir medición** para autorizar la recopilación opcional de Firebase Analytics. Cuando se permite la medición, Firebase Analytics puede recibir eventos de uso, pantallas visitadas, resultados de operaciones, versión de la aplicación, idioma y propiedades técnicas, como la cantidad de archivos, el formato preferido y el nivel de suscripción. Este tratamiento se basa en el consentimiento y la recopilación permanece deshabilitada hasta que una elección explícita la autorice. Puedes revocar tu elección en Configuración.

Si una versión anterior guardó el valor **Completo**, se normaliza a **Permitir medición**. Esto no representa consentimiento para la personalización publicitaria.

MaoDesign **no establece el identificador de la cuenta Firebase como identificador de usuario en Analytics**. El SDK puede usar identificadores propios de la instalación o instancia de la aplicación. Esto no significa que toda la información técnica sea anónima.

Con **Solo esencial**, la medición de Firebase Analytics está deshabilitada. Esto no impide los diagnósticos autorizados mediante el control separado ni los anuncios contextuales; el tratamiento de datos publicitarios por parte de los proveedores no depende de la opción de medición.

Los ajustes vigentes de la cuenta de Analytics también permiten a Google usar datos para mejorar productos y servicios, contribuir a estimaciones y perspectivas de negocio, prestar asistencia técnica y hacer recomendaciones para la empresa. Al compartir datos con sus propios productos y servicios, Google actúa como responsable independiente conforme a sus [términos de protección de datos entre responsables del tratamiento](https://support.google.com/analytics/answer/9012600?hl=es). Estos usos no autorizan a MaoDesign a personalizar anuncios. Desactivar la medición en la aplicación impide nuevos envíos opcionales desde la aplicación, pero no elimina automáticamente el historial que los proveedores ya hayan recibido.

## 6. Publicidad contextual

Los usuarios del plan gratuito pueden ver anuncios contextuales de **Unity LevelPlay/IronSource** y redes asociadas. La integración incluye **AdQuality**, un componente de calidad y medición de anuncios. MaoDesign no usa la opción de medición para personalizar anuncios ni solicita consentimiento para esa finalidad. Para mostrar anuncios contextuales, medir el rendimiento y proteger el servicio frente al fraude o el abuso, los proveedores pueden tratar direcciones IP, información técnica del dispositivo, identificadores de instalación, visualizaciones, clics e información sobre impresiones e ingresos publicitarios. Las categorías y señales tratadas pueden variar según el SDK, la plataforma, la red y la configuración. Antes de inicializar los SDK, MaoDesign configura las restricciones de privacidad disponibles, incluida la limitación del uso de identificadores del dispositivo por Unity y la desactivación de la recopilación del identificador publicitario por Firebase Analytics. Estas restricciones no significan que no haya ningún identificador ni almacenamiento o acceso por parte de los SDK. La ausencia de personalización no elimina las autorizaciones exigidas por la legislación para almacenar información en el dispositivo o acceder a ella. Premium elimina los anuncios.

## 7. Compras y suscripciones

**Google Play Billing** procesa los pagos y el historial de compras. MaoDesign recibe el producto, el estado y un token técnico de compra para activar y restaurar Premium, pero no el número completo de la tarjeta. Eliminar la cuenta MaoDesign no cancela una suscripción; cancélala por separado en **Google Play > Pagos y suscripciones > Suscripciones**.

Al atender compras, cancelaciones y reembolsos, podemos tratar el nombre y el correo electrónico utilizados para contactarnos, el número de pedido GPA, la fecha, el importe y los datos mínimos de confirmación. La finalidad es localizar la transacción, atender la solicitud, cumplir obligaciones legales o ejercer derechos. No pedimos tu contraseña ni el número completo de la tarjeta. Una descripción opcional de tus expectativas y dificultades se usa para orientar mejoras y no es una condición para atender la solicitud.

## 8. Proveedores y transferencias

MaoDesign no vende datos personales. Los datos pueden ser tratados por:

- **Google/Firebase:** autenticación y Firestore conforme a las condiciones aplicables de Google Cloud, y Crashlytics conforme a las condiciones específicas de Firebase;
- **Google Analytics:** medición opcional sujeta a sus propios términos de tratamiento; los usos adicionales descritos en la sección 5 se rigen por las condiciones correspondientes;
- **Google Play:** distribución, compras, suscripciones y evaluación en la aplicación;
- **Google/Gmail:** recepción y almacenamiento de mensajes de soporte;
- **Unity LevelPlay/IronSource, AdQuality y redes asociadas:** publicidad y medición en el plan Free. Unity puede actuar como responsable independiente para sus propias finalidades descritas en sus condiciones y política.

Firestore está configurado en la región de São Paulo, Brasil (`southamerica-east1`); Firebase Authentication se procesa en Estados Unidos. La región de una base de datos no significa que todos los servicios, el soporte y los subencargados traten datos solo en Brasil. Los demás proveedores también pueden usar infraestructura en otros países.

Las transferencias internacionales deben respetar la base jurídica y el mecanismo aplicables a cada servicio y destino. Los instrumentos no tienen un alcance único: el [Cloud DPA](https://cloud.google.com/terms/data-processing-addendum), los [términos de tratamiento de datos de Firebase](https://firebase.google.com/terms/data-processing-terms/), los [términos de Analytics](https://business.safety.google/adsprocessorterms/) y el [DPA de Unity](https://unity.com/legal/unity-data-processing-addendum-dpa) se refieren a servicios y funciones diferentes. El acuerdo de Analytics no sustituye a los demás, y no se presume que un buzón de Gmail esté cubierto por el DPA de Workspace. Mediante el contacto indicado en esta política, puedes solicitar información sobre los destinatarios, países y salvaguardas pertinentes. El uso de un proveedor no elimina la responsabilidad de MaoDesign por el tratamiento que realiza o determina. Consulta también [privacidad y seguridad de Firebase](https://firebase.google.com/support/privacy), la [Política de Privacidad de Google](https://policies.google.com/privacy) y la [Política de Privacidad de Unity](https://unity.com/legal/game-player-and-app-user-privacy-policy).

El uso adicional de los **Datos de Servicio de Firebase** para análisis, recomendaciones y mejora de servicios de Google que no son Firebase permanece habilitado. Esta categoría se genera al prestar y administrar Firebase, es distinta de los datos del cliente enviados por la aplicación y se rige por los términos y la política de Google.

## 9. Conservación y eliminación

| Categoría | Conservación y criterio de finalización |
| --- | --- |
| Contenido privado y preferencias locales | Hasta que los elimines, borres los datos de la aplicación o la desinstales. Los archivos exportados permanecen en el destino que elegiste. |
| Identidad Firebase y marcadores vinculados | Hasta su eliminación o el fin de la finalidad. Según Firebase, las direcciones IP se conservan durante algunas semanas; los demás datos de autenticación se eliminan en un plazo de hasta 180 días después de presentar la solicitud de eliminación al proveedor. |
| Datos de soporte y compra tratados por soporte | Durante el tiempo necesario para resolver la solicitud, cumplir obligaciones legales y ejercer derechos. El responsable revisa mensualmente los casos de soporte cerrados para eliminar o anonimizar los datos que ya no sean necesarios. Toda conservación excepcional debe tener un motivo y un criterio de finalización documentados. |
| Firebase Analytics | Configuración verificada para esta edición: 2 meses para datos de eventos y 14 meses para datos a nivel de usuario, con el reinicio por actividad activado para el período a nivel de usuario. Esto describe solo la configuración de Analytics y no establece la conservación de informes agregados ni de otros servicios. |
| Firebase Crashlytics | El proveedor indica que transcurren 90 días antes de iniciar la eliminación de diagnósticos e identificadores de los sistemas activos y las copias de seguridad; esto no es un plazo máximo de eliminación. |
| Publicidad contextual y AdQuality | Según la finalidad, las obligaciones y los criterios aplicables a los datos tratados por los proveedores, descritos en sus políticas y disponibles previa solicitud. No se ha confirmado un plazo único para todas las redes. Las solicitudes de eliminación y oposición también se evalúan en relación con los destinatarios. |
| Registros de pago de Google Play | Google Play los conserva conforme a sus propias obligaciones. Son distintos de los datos de soporte que conserva MaoDesign. |

Esta política no adopta un plazo único de conservación para categorías con finalidades diferentes. Puedes solicitar los criterios y la información sobre el tratamiento aplicable a tu caso. Se explicará el motivo de la conservación exigida por ley o necesaria para ejercer derechos.

El flujo de la aplicación elimina los marcadores Firestore incluidos y después elimina la identidad Firebase; los fallos pueden dejar pasos incompletos. Tras eliminarse la identidad, la aplicación intenta limpiar las credenciales locales, pero esta limpieza puede fallar incluso cuando la aplicación indica que la eliminación se completó. Los archivos y favoritos locales se conservan. Firebase puede exigir un acceso reciente. Si hay un error o dudas sobre algún paso, vuelve a intentarlo o solicita soporte.

Este flujo no confirma la eliminación de todo el historial ya tratado por Analytics, Crashlytics o los proveedores publicitarios. Desactivar la recopilación afecta a los envíos futuros y no equivale a eliminar datos remotos. Las solicitudes relativas a identificadores técnicos dependen de que se puedan localizar los registros con los datos mínimos pertinentes; no exigimos crear una cuenta para ejercer derechos. Cuando no sea posible localizar o eliminar un dato, explicaremos la limitación y las medidas correspondientes. Consulta los [detalles de eliminación de cuenta]({{ '/Legal/delete-account-es/' | relative_url }}).

## 10. Derechos y opciones

Puedes usar la aplicación sin iniciar sesión, cambiar el nivel de recopilación, controlar por separado los informes de errores, cerrar sesión y eliminar la cuenta. Al escribir a **saviomacedo718+maodesign@gmail.com**, puedes solicitar confirmación del tratamiento, acceso, corrección, información sobre el uso compartido, revocación del consentimiento, oposición y, cuando corresponda, portabilidad, anonimización, bloqueo o eliminación.

Podemos confirmar tu identidad con los datos mínimos necesarios antes de atender solicitudes vinculadas a una cuenta. El soporte es gratuito y observa los plazos y límites legales. Si no es posible atender una solicitud de inmediato, informaremos los motivos y la medida que corresponda. También puedes acudir a la Autoridad Nacional de Protección de Datos de Brasil y a los organismos de defensa del consumidor.

## 11. Público, seguridad y cambios

MaoDesign está dirigido a personas de 16 años o más. Google Play indica los grupos de público 16–17 y 18+. Su clasificación de contenido **Todos** (**Livre**) es independiente de esta indicación por edad. La aplicación no está específicamente dirigida a personas menores de 16 años. Para usuarios de 16 y 17 años, las personas responsables deben supervisar las cuentas Google y las compras conforme a las reglas aplicables. Usamos HTTPS de los SDK, reglas de Firestore por usuario y controles de consentimiento, sin afirmar garantías más allá de las que realmente ofrecen la plataforma y los proveedores.

Esta política puede cambiar cuando cambien las funciones, los proveedores o las leyes. Los cambios relevantes pueden requerir una nueva elección de consentimiento.
