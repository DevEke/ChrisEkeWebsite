// utils/scrollToSection.ts

export const scrollToSection = (
  id: string,
  headerOffset = 80
) => {
  const element = document.getElementById(id);

  if (!element) return;

  const top =
    element.getBoundingClientRect().top +
    window.scrollY -
    headerOffset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};
