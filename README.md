# Arrived Fleteros (RTDB) - Mapa Live por Fletero + Regla 30 días

## Qué hace
- Fletero (PWA): 1 botón **LLEGUÉ**.
  - Toma GPS (1 lectura)
  - Guarda:
    - `/live/{fleteroId}` (reemplaza siempre la última ubicación)
    - `/arrivals/{pushId}` (log opcional)
- Panel:
  - Escucha `/live`
  - Mapa con marcadores (1 por fletero)
  - Cada nuevo reporte **reemplaza** el marcador del fletero

## Config Firebase (mínimo)
1) Firebase Console → Authentication → habilitar **Anonymous**.
2) Firebase Console → Realtime Database → crear DB.
3) Realtime Database → Rules → pegar `database.rules.json`.
4) Editar `/shared/firebase-config.js` y pegar tu config + **databaseURL**.

## IMPORTANTE: tu config modular NO trae databaseURL
Tenés que agregarlo. Se ve así:
databaseURL: "https://testeoappflete-default-rtdb.firebaseio.com"

## Deploy recomendado
Firebase Hosting. Abrir:
- /fletero/
- /panel/


## Debug rápido
- GPS requiere HTTPS (Firebase Hosting) o localhost.
- Si no responde nada, abrir consola (F12) y ver errores.


## GitHub Pages
- Publicá el repo en GitHub Pages (Settings → Pages).
- URL queda: https://USUARIO.github.io/REPO/
- IMPORTANTES:
  1) En Firebase Console → Authentication → Settings → Authorized domains:
     agregá:
     - USUARIO.github.io
  2) En `/shared/firebase-config.js` pegá tu `databaseURL` (Realtime Database).
  3) Realtime Database Rules: pegá `database.rules.json`.

Rutas:
- Fletero: /REPO/fletero/index.html
- Panel: /REPO/panel/index.html
