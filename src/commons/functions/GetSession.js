function getWithExpiry(key) {
  const recordarSesion = localStorage.getItem("recordarSesion");
  const recordar = JSON.parse(recordarSesion);
  if (recordar != null) {
    if (!recordar.recordar) {
      const itemStr = localStorage.getItem(key);
      const tiempoExpira = localStorage.getItem("expiraSesion");
      // if the item doesn't exist, return null
      if (!itemStr || !tiempoExpira) {
        return null;
      }
      const item = JSON.parse(itemStr);
      const tiempo = JSON.parse(tiempoExpira);
      const now = new Date();
      // compare the expiry time of the item with the current time
      if (now.getTime() > tiempo.expira) {
        // If the item is expired, delete the item from storage
        // and return null
        localStorage.removeItem("tokenIda");
        window.location.reload();
        window.location.href = "";
        return null;
      }
      return item;
    }
  }
}

export default getWithExpiry;
