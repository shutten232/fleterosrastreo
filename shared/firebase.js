export function getConfig(){
  if(!window.FIREBASE_CONFIG || window.FIREBASE_CONFIG.apiKey === "REEMPLAZAR"){
    throw new Error("FIREBASE_CONFIG_MISSING");
  }
  if(!window.FIREBASE_CONFIG.databaseURL || window.FIREBASE_CONFIG.databaseURL === "REEMPLAZAR"){
    throw new Error("DATABASE_URL_MISSING");
  }
  return window.FIREBASE_CONFIG;
}
