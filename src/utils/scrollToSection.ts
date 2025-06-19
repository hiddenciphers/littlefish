// src/utils/scrollToSection.ts
export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "center", // 👈 this centers the element in the viewport
    });
  }
};
