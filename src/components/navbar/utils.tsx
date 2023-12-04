export const scrollToSection = (id: string) => {
  const el = document.getElementById(id) as HTMLElement;

  if (!el) {
    return;
  }
  el.scrollIntoView({ behavior: "smooth" });
};
