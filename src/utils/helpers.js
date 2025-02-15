const generateDeviceId = () => {
  let deviceId = localStorage.getItem("guestbook_device_id");
  if (!deviceId) {
    deviceId = Math.random().toString(36).substring(2, 15);
    localStorage.setItem("guestbook_device_id", deviceId);
  }
  return deviceId;
};

const generateAnonymousUsername = () => {
  const randomString = Math.random().toString(36).substring(2, 8);
  return `anonym-message#${randomString}`;
};

const formatDate = (timestamp) => {
  return new Date(timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export { generateDeviceId, generateAnonymousUsername, formatDate };
