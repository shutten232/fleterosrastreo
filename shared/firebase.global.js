(function(){
  function getConfig(){
    const c = window.FIREBASE_CONFIG;
    if(!c || !c.apiKey || c.apiKey === "REEMPLAZAR") throw new Error("FIREBASE_CONFIG_MISSING");
    if(!c.databaseURL || c.databaseURL === "REEMPLAZAR") throw new Error("DATABASE_URL_MISSING");
    return c;
  }
  window.ArrivedFirebase = { getConfig };
})();