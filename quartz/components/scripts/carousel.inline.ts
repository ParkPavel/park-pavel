(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
      const wrapper = carousel.querySelector('.carousel-wrapper') as HTMLElement | null;
      const content = carousel.querySelector('.carousel-content');
      const prevButton = carousel.querySelector('.carousel-button.prev');
      const nextButton = carousel.querySelector('.carousel-button.next');
      const headerElement = carousel.querySelector('.carousel-header') as HTMLElement | null; // Get header element
      const titleElement = headerElement?.querySelector('.carousel-title') as HTMLElement | null; // Select title relative to header
      let currentIndex = 0;

      if (!wrapper || !content || !prevButton || !nextButton || !titleElement || !headerElement) {
        console.error("Carousel elements not found for a carousel instance");
        return;
      }

      const titles = JSON.parse(headerElement.dataset.titles || '[]'); // Get titles from data attribute on header

      const updateCarousel = (idx: number, titlesArr: string[], titleEl: HTMLElement | null) => {
        const itemWidth = content.querySelector('.carousel-item')?.clientWidth || 0;
        if (wrapper) {
          wrapper.style.transform = 'translateX(' + (-idx * itemWidth) + 'px)';
        }

        // Update title
        if (titleEl && titlesArr.length > idx) {
          titleEl.textContent = titlesArr[idx];
        }

        // Cyclic navigation logic - buttons are always enabled
        if (prevButton) (prevButton as HTMLButtonElement).disabled = false;
        if (nextButton) (nextButton as HTMLButtonElement).disabled = false;
      };

      if (prevButton) {
        prevButton.addEventListener('click', () => {
          currentIndex = (currentIndex === 0) ? content.children.length - 1 : currentIndex - 1;
          updateCarousel(currentIndex, titles, titleElement);
        });
      }

      if (nextButton) {
        nextButton.addEventListener('click', () => {
          currentIndex = (currentIndex === content.children.length - 1) ? 0 : currentIndex + 1;
          updateCarousel(currentIndex, titles, titleElement);
        });
      }

      // Update on resize
      window.addEventListener('resize', () => updateCarousel(currentIndex, titles, titleElement));

      // Initial update
      updateCarousel(currentIndex, titles, titleElement);
    });
  });
})();
