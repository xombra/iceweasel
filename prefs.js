// prefs.js
// No es necesario usar todas estas configuraciones, elige las más adecuadas
// a tus necesidades. Licencia CC BY SA.

// Pagina de Inicio
pref("browser.startup.homepage", "http://ejemplo.com");

// Activar y desactivar Plugin (Flash y Java) 
// Es bueno desactivarlo en equipos con menos de 512 RAM | 
// Además le da un poco mas de seguridad sin importar el tamaño de 
// RAM que se posea

pref("plugin.state.flash", 0);
pref("plugin.state.java", 0);

// El buscador solicita el código de tu pais, elige dejarlo en blanco o ignoralo
pref("browser.search.countryCode", "");

// El buscador es más preciso si tu región es especificada, dejalo en blanco o por default
pref("browser.search.region", "");

// autocompletado, evita rellenar casillas con información sensible
user_pref("browser.urlbar.autofill", true);

// Deshabilita el JS de manera general, usarios avanzados que no necesiten JS.
pref("javascript.enabled"), false);

// Deshabilita el analisis de los sensores, sitios web pueden leerlos.
pref("device.sensors.enabled", false);

// Opción para leer el estado de la batería, los sitios web pueden hacerlo...
pref("dom.battery.enabled", false);

// Deshabilita la detección de rostros de la cámara, pueden espiarte por ahí...
pref("camera.control.face_detection.enabled)", false);

// animación al descargar, el icono de descarga animado se deshabilita
// Opcion recomendada desactivarlo en equipos con menos de 512 RAM

pref("browser.download.animateNotifications" ,false);

// Activar por default la navegación privada. OJO: No es 100% privada.

pref("browser.privatebrowsing.autostart", true);

// Activar por default Borrar todo el historial el usuario tendra todas las opciones tildadas:
// Esta opción borra: cache, historial descargas, cookies, datos de formulario, contraseñas
// sesiones abiertas, configuracion del sitio e historial de navegación.

pref("privacy.cpd.cache", true);
pref("privacy.cpd.downloads", true);
pref("privacy.cpd.cookies", true);
pref("privacy.cpd.formdata", true);
pref("privacy.cpd.offlineApps", true);
pref("privacy.cpd.passwords", true);
pref("privacy.cpd.siteSettings", true);
pref("privacy.cpd.sessions", true);
pref("privacy.cpd.siteSettings", true);
pref("privacy.cpd.history", true);

// Para limpiar cuando se cierre el navegador, elimina todo este contenido al cerrar o reiniciar:

pref("privacy.clearOnShutdown.cache", true);
pref("privacy.clearOnShutdown.cookies",true);
pref("privacy.clearOnShutdown.downloads",true);
pref("privacy.clearOnShutdown.formdata",true);
pref("privacy.clearOnShutdown.history",true);
pref("privacy.clearOnShutdown.offlineApps",true);
pref("privacy.clearOnShutdown.passwords",true);
pref("privacy.clearOnShutdown.sessions", true);
pref("privacy.clearOnShutdown.siteSettings",true);
pref("privacy.sanitize.sanitizeOnShutdown",true);

// Rechazar pop-up, evita abrirlos, normalmente es publicidad molesta:

pref("privacy.popups.policy", 1);
pref("dom.disable_open_during_load", true);
pref("dom.event.clipboardevents.enabled", false);
pref("dom.event.contextmenu.enabled", false);
pref("browser.popups.showPopupBlocker", true);

// Evitar que almacene y/o recuerde data de formularios:

pref("signon.rememberSignons", false);
pref("signon.autofillForms", false);
pref("services.sync.prefs.sync.signon.rememberSignons",false)

// Dar un toque más de seguridad (evita posibles malware... aunque no definitivo)

pref("browser.safebrowsing.malware.enabled",true);
pref("browser.safebrowsing.enabled",true);
pref("browser.send_pings", false);
pref("browser.cache.disk.enable", false);
pref("browser.cache.disk_cache_ssl", false);
pref("browser.cache.offline.enable", false);

// Maxima de DNS cache

pref("network.dnsCacheEntries",100);
pref("network.websocket.enabled", false);

// Número máximo de segundos para almacenar en caché las entradas DNS.

pref("network.dnsCacheExpiration",240);
pref("network.dnsCacheExpirationGracePeriod",240);

// Habilita el cache

pref("network.http.use-cache",true);

// habilitar el link prefetching

pref("network.prefetch-next",true);

// Carga especulativa de sitios web, más rápido pero inseguro
pref("network.http.speculative-parallel-limit",0);

// Evitar los ads de Mozilla en página de inicio de Firefox, ideal para conexiones lentas:
pref("browser.aboutHomeSnippets.updateUrl", "");

// Los metadatos de tus extensiones son enviados a Mozilla, verifica que está en FALSE
pref("extensions.getAddons.cache.enabled", false);

// Evita enviar datos y reportes a Mozilla, sea información de tu hardware,
// user agent, reportes de salud y telemetria.
pref("browser.selfsupport.url", "");

// No permitir el tracking, los sitios vigilan tu geolocalizacion, evitalo usando:

pref("geo.enabled", false);
pref("geo.wifi.logging.enabled", false);
pref("privacy.donottrackheader.enabled",true);
pref("privacy.trackingprotection.enabled",true);
pref("privacy.donottrackheader.value", 1);

// Evitar que Iceweaserl muestre los PDF, a veces tienen contenido dañino o malware

pref("PDFjs.disable",true);
user_pref("plugin.disable_full_page_plugin_for_types", "application/pdf");

// Hacemos que el navegador autodetecte configuracion de la redes

pref("network.proxy.type",5);

// Buscador por default, puedes optar por DuckDuckGo o StartPage,
// la ultima linea borra las opciones de Yahoo, Bing, etc.

pref("browser.search.defaultenginename","DuckDuckGo");
user_pref("browser.search.selectedEngine","DuckDuckGo");
pref("keyword.URL","https://duckduckgo.com/?t=lm&q=");
pref("browser.search.hiddenOneOffs","Yahoo,Bing,Diccionario RAE,eBay,Twitter");

// Abre una nueva ventana en la busqueda
user_pref("browser.search.openintab", true);

//Determina la forma en que se aceptaran las cookies en dos solo acepta sesion actual

user_pref("network.cookie.lifetimePolicy",2);

// Mejora en Velocidad de petición, si no sabes qué significa, solo ignorar:

pref("network.http.pipelining",true);
pref("network.http.proxy.pipelining",true);
pref("network.http.pipelining.maxrequests",32);

// Mejora Seguridad, usando SSL

pref("network.http.pipelining.ssl",true);
pref("network.http.proxy.pipelining",true);

// se evita filtrar tu verdadera dirección IP de alguna manera...

pref("media.peerconnection.enabled", false);
pref("media.peerconnection.use_document_iceservers", false);

// Desactivar Pocket, un servicio irrelevante de Mozilla Firefox

pref("browser.pocket.api", "");
pref("browser.pocket.enabled", false);
pref("browser.pocket.site", "");
pref("browser.pocket.useLocaleList", false);


// Desactivar WebGL Riesgo de seguridad
// https://security.stackexchange.com/questions/13799/is-webgl-a-security-concern

pref("webgl.disabled", true);

// Evitar el envio de referer

pref("network.http.referer.trimmingPolicy", 1);
pref("network.http.referer.XOriginPolicy", 1);
pref("network.http.sendRefererHeader", 0);
pref("network.http.sendSecureXSiteReferrer", false);

// deshabilitar completamente Hello, otro servicio irrelevante de Mozilla Firefox

pref("loop.enabled", false);

// Deshabilitad por obsoleto varias opciones de cripto: 
// https://community.qualys.com/blogs/securitylabs/2013/03/19/rc4-in-tls-is-broken-now-what
//https://community.qualys.com/thread/14655
 
pref("security.ssl3.dhe_rsa_aes_128_sha", false);
pref("security.ssl3.dhe_rsa_aes_256_sha", true);

// Mostrar siempre http: en la barra de direcciones
user_pref("browser.urlbar.trimURLs", false);
pref("browser.formfill.enable", false);

// Borra enlaces a Mozilla, que pueden espiarte...
user_pref("browser.aboutHomeSnippets.updateUrl", "")
user_pref("breakpad.reportURL", "");
user_pref("breakpad.reportURL", "");
user_pref("toolkit.telemetry.server", "");
user_pref("social.shareDirectory", "");