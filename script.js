document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
  
    // Detectar el desplazamiento del usuario y mostrar las secciones
    const handleScroll = () => {
      const scrollTop = window.scrollY + window.innerHeight;
  
      // biome-ignore lint/complexity/noForEach: <explanation>
        sections.forEach((section) => {
        if (section.offsetTop < scrollTop - 100) {
          section.classList.add("visible");
        }
      });
    };
  
    // Escucha el evento de scroll
    window.addEventListener("scroll", handleScroll);
  
    // Llamamos una vez para verificar las secciones visibles al cargar
    handleScroll();
  });
  