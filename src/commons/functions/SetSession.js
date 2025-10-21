function setWithExpiry(key, value, ttl) {
  const now = new Date();
  const tiempoExpira = {
    expira: now.getTime() + ttl
  };
  localStorage.setItem(key, JSON.stringify(value));
  localStorage.setItem("expiraSesion", JSON.stringify(tiempoExpira));
}

export default setWithExpiry;
