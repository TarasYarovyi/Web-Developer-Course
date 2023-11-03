function extractDomain(email) {
  const atIndex = email.indexOf("@");
  if (atIndex === -1) return null;
  const domain = email.substring(atIndex + 1);
  return domain;
}
