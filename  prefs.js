// prefs.js

// Pagina de Inicio
pref("browser.startup.homepage", "http://xombra.com");

// * Activar y desactivar Plugin (Flash y Java) 
// Es bueno desactivarlo en equipos con menos de 512 RAM | 
//Además le da un poco mas de seguridad sin importar el tamaño de 
// RAM que se posea

pref("plugin.state.flash",0);
pref("plugin.state.java",0);

// animación al descargar:
//Es bueno desactivarlo en equipos con menos de 512 RAM

pref("browser.download.animateNotifications",false);

// Activar por default la navegación privada

pref("browser.privatebrowsing.autostart",true);

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

pref("network.dnsCacheExpiration,240);
pref("network.dnsCacheExpirationGracePeriod,240);

// Habilita el cache

pref("network.http.use-cache,240);

// habilitar el link prefetching

pref("network. prefetch-next",true);

// No permitir el tracking

pref("privacy.donottrackheader.enabled",true);
pref("privacy.trackingprotection.enabled",true);

// Evitar que Iceweaserl muestre los PDF

pref("PDFjs.disable",true);

// Hacemos que el navegador autodetecte configuracion de la redes

pref("network.proxy.type",5);

// Buscador por default 

pref("browser.search.defaultenginename","DuckDuckGo");
pref("browser.search.selectedEngine;DuckDuckGo");
