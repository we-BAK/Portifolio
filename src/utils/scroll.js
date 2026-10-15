export const scrollToId = (targetId, offset = 88) => {
  const element = document.getElementById(targetId);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};
