// prefs.js

// Pagina de Inicio
pref("browser.startup.homepage", "http://xombra.com");

// Activar y desactivar Plugin (Flash y Java) 
// Es bueno desactivarlo en equipos con menos de 512 RAM | 
// Además le da un poco mas de seguridad sin importar el tamaño de 
// RAM que se posea

pref("plugin.state.flash", 0);
pref("plugin.state.java", 0);

// autocompletado
user_pref("browser.urlbar.autofill", true);

// animación al descargar:
// Opcion recomendada desactivarlo en equipos con menos de 1GB RAM

pref("browser.download.animateNotifications" ,false);

// Activar por default la navegación privada

pref("browser.privatebrowsing.autostart", true);

// Activar por default Borrar todo el historial el usuario tendra todas las opciones tildadas:

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

// Para limpiar cuando se cierre el navegador:

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

// Rechazar pop-up

pref("privacy.popups.policy", 1);
pref("dom.disable_open_during_load", true);
pref("browser.popups.showPopupBlocker", true);

// Evitar que almacene y/o recuerde data de formularios:

pref("signon.rememberSignons", false);
pref("signon.autofillForms", false);
pref("services.sync.prefs.sync.signon.rememberSignons",false)

// Dar un toque más de seguridad (evita posibles malware... aunque no definitivo)

pref("browser.safebrowsing.malware.enabled",true);
pref("browser.safebrowsing.enabled",true);

// Maxima de DNS cache

pref("network.dnsCacheEntries",400);

// Número máximo de segundos para almacenar en caché las entradas DNS.

pref("network.dnsCacheExpiration",240);
pref("network.dnsCacheExpirationGracePeriod",240);

// Habilita el cache

pref("network.http.use-cache",true);

// habilitar el link prefetching

pref("network.prefetch-next",true);

// No permitir el tracking

pref("geo.enabled", false);
pref("privacy.donottrackheader.enabled",true);
pref("privacy.trackingprotection.enabled",true);
pref("privacy.donottrackheader.value", 1);

// Evitar envio de info hacia Mozilla
pref("datareporting.healthreport.service.firstRun", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("toolkit.telemetry.enabled", false);


// Evitar que Iceweaserl muestre los PDF

pref("PDFjs.disable",true);
user_pref("plugin.disable_full_page_plugin_for_types", "application/pdf");

// Hacemos que el navegador autodetecte configuracion de la redes

pref("network.proxy.type",5);

// Buscador por default 

pref("browser.search.defaultenginename","DuckDuckGo");
user_pref("browser.search.selectedEngine","DuckDuckGo");
pref("keyword.URL","https://duckduckgo.com/?t=lm&q=");
pref("browser.search.hiddenOneOffs","Yahoo,Bing,Diccionario RAE,eBay,Twitter");

// Abre una nueva ventana en la busqueda
user_pref("browser.search.openintab", true);

//Determina la forma en que se aceptaran las cookies en dos solo acepta sesion actual

user_pref("network.cookie.lifetimePolicy",2);

// Mejora en Velocidad de peticion

pref("network.http.pipelining",true);
pref("network.http.proxy.pipelining",true);
pref("network.http.pipelining.maxrequests",32);

// Mejora Seguridad

pref("network.http.pipelining.ssl",true);
pref("network.http.proxy.pipelining",true);

// se evita filtrar tu verdadera dirección IP

pref("media.peerconnection.enabled", false);
pref("media.peerconnection.use_document_iceservers", false);

// Desactivar Pocket

pref("browser.pocket.api", "");
pref("browser.pocket.enabled", false);
pref("browser.pocket.site", "");
pref("browser.pocket.useLocaleList", false);

// Desactivar WebGL (Riesgo de seguridad
// https://security.stackexchange.com/questions/13799/is-webgl-a-security-concern

pref("webgl.disabled", true);

// Evitar el envio de referer

pref("network.http.referer.trimmingPolicy", 1);
pref("network.http.referer.XOriginPolicy", 1);
pref("network.http.sendRefererHeader", 2);

// deshabilitar completamente Hello

pref("loop.enabled", false);

// Deshabilitad por obsoleto
// https://community.qualys.com/blogs/securitylabs/2013/03/19/rc4-in-tls-is-broken-now-what
//https://community.qualys.com/thread/14655
 
pref("security.ssl3.dhe_rsa_aes_128_sha", false);
pref("security.ssl3.dhe_rsa_aes_256_sha", true);

// Mostrar siempre http: en la barra de direcciones
user_pref("browser.urlbar.trimURLs", false);

// para evitar saltos de los videos Flash en Youtube y otros
pref("browser.sessionstore.interval", 20000);

// Menos uso de recursos
user_pref("browser.tabs.animate", false);
user_pref("browser.preferences.animateFadeIn", false);
user_pref("reader.parse-on-load.enabled", false);
user_pref("reader.parse-on-load.force-enabled", false);

// Si posee 4 GB de RAM o mas habilitar
// pref("gfx.xrender.enabled",true);
// pref("layers.acceleration.force-enabled",true);

// Si Posee menos de 4GB deshabilitar
// pref("gfx.xrender.enabled",false);
// pref("layers.acceleration.force-enabled",false);

// Agregados Sep 2016

// This attribute contains one or more URIs send a POST request to when the user clicks the link. -> track visitors clicks.

pref('browser.send_pings', false);

// Deshablita Cache  

pref('browser.cache.disk.enable', false);
pref('browser.cache.disk_cache_ssl', false);
pref('browser.cache.offline.enable', false);

// deshabilita la ram caché para ahorrar carga de imagenes

pref('browser.cache.memory.enable', false);

// evita la precarga de web pages, ahorrando ancho de banda

pref('beacon.enabled', false);

// Inhabilita redirección geográfica

pref('geo.wifi.logging.enabled', false);
pref('browser.search.geoip.url', '');
pref('browser.search.geoSpecificDefaults', false);
pref('browser.search.geoSpecificDefaults.url', '');
pref('geo.wifi.logging.enabled', '');


// deshabilita la carga de webs patrocinadoras de Mozilla

pref('browser.newtabpage.directory.ping', '');
pref('browser.newtabpage.directory.source', '');

// Impedir sea determinado el pais de origen

pref('browser.search.countryCode', '');
pref('browser.search.region', '');

// genera ruído en en tu ubicación geográfica

pref('intl.accept_languages;en-US', 'en;q=0.5');

// habilita la página en blanco para ahorrar procesos en segundo plano

pref('browser.newtab.url', 'about:blank');

// quitar a los developers posibilidad de control sobre menú al hacer clic derecho

pref('dom.event.clipboardevents.enabled', false);

// deshabilitar sincronizacion (Sync Services)

pref('services.sync.enabled', false);
pref('services.sync.sendVersionInf', false);
// Disable "Social Media Integration"

pref('social.remote-install.enabled', false);
pref('social.toast-notifications.enabled', false);
pref('social.directories', '');
pref('social.whitelist', '');

// "SOCKS Remote DNS"

pref('network.proxy.socks_remote_dns', true);

// Disable "Camera Face Detection"

pref('camera.control.face_detection.enabled', false);

// Disable "Device Statistics"

pref('device.sensors.enabled', false);

// Disable "Remote WiFi Scan"

pref('devtools.remote.wifi.scan', false);

// Disable Search Suggestion

pref('browser.search.suggest.enabled', false);

// 
pref('browser.formfill.enable', false);

// Criptografia

pref('security.OCSP.enabled', '1');
pref('security.OCSP.require', 'true');
pref('services.sync.prefs.sync.security.OCSP.require', 'true');



