(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.portfolio-gallery-container') as HTMLElement | null; // Cast to HTMLElement

    if (!galleryContainer) {
      console.error("Gallery container not found.");
      return;
    }

    const albumPrevButton = galleryContainer.querySelector('.album-prev') as HTMLButtonElement | null; // Cast to HTMLButtonElement
    const albumNextButton = galleryContainer.querySelector('.album-next') as HTMLButtonElement | null; // Cast to HTMLButtonElement
    const albumTitleElement = galleryContainer.querySelector('.album-carousel-nav h2') as HTMLElement | null; // Cast to HTMLElement
    const photoGridElement = galleryContainer.querySelector('.photo-grid') as HTMLElement | null; // Cast to HTMLElement
    const modalOverlay = document.querySelector('.modal-overlay') as HTMLElement | null; // Cast to HTMLElement
    const modalContent = document.querySelector('.modal-content') as HTMLElement | null; // Cast to HTMLElement
    const modalCloseButton = modalContent?.querySelector('.modal-close') as HTMLButtonElement | null; // Cast to HTMLButtonElement
    const modalImageElement = modalContent?.querySelector('img') as HTMLImageElement | null; // Cast to HTMLImageElement
    const modalPrevButton = modalContent?.querySelector('.modal-prev') as HTMLButtonElement | null; // Cast to HTMLButtonElement
    const modalNextButton = modalContent?.querySelector('.modal-next') as HTMLButtonElement | null; // Cast to HTMLButtonElement


    if (!albumPrevButton || !albumNextButton || !albumTitleElement || !photoGridElement || !modalOverlay || !modalContent || !modalCloseButton || !modalImageElement || !modalPrevButton || !modalNextButton) {
        console.error("One or more gallery elements not found.");
        return;
    }

    const galleries: { title: string; urls: string[] }[] = JSON.parse(galleryContainer.dataset.galleries || '[]'); // Add type annotation
    let currentAlbumIndex = 0;
    let currentImageIndex = 0;

    const renderPhotos = (albumIndex: number) => { // Add type annotation
        photoGridElement.innerHTML = ''; // Clear current photos
        const album = galleries[albumIndex];
        album.urls.forEach((url: string, index: number) => { // Add type annotations
            const img = document.createElement('img');
            img.src = url;
            img.alt = `Photo ${index + 1}`;
            img.dataset.index = index.toString(); // dataset values are strings
            img.addEventListener('click', () => openModal(index));
            photoGridElement.appendChild(img);
        });
    };

    const updateAlbumDisplay = (albumIndex: number) => { // Add type annotation
        const album = galleries[albumIndex];
        albumTitleElement.textContent = album.title;
        renderPhotos(albumIndex);
    };

    const openModal = (imageIndex: number) => { // Add type annotation
        currentImageIndex = imageIndex;
        const imageUrl = galleries[currentAlbumIndex].urls[currentImageIndex];
        modalImageElement.src = imageUrl;
        modalOverlay.style.display = 'flex'; // Show modal
    };

    const closeModal = () => {
        modalOverlay.style.display = 'none'; // Hide modal
    };

    const navigateModal = (direction: "prev" | "next") => { // Add type annotation
        const albumUrls = galleries[currentAlbumIndex].urls;
        if (direction === 'prev') {
            currentImageIndex = (currentImageIndex === 0) ? albumUrls.length - 1 : currentImageIndex - 1;
        } else {
            currentImageIndex = (currentImageIndex === albumUrls.length - 1) ? 0 : currentImageIndex + 1;
        }
        modalImageElement.src = albumUrls[currentImageIndex];
    };

    // Event Listeners
    albumPrevButton.addEventListener('click', () => {
        currentAlbumIndex = (currentAlbumIndex === 0) ? galleries.length - 1 : currentAlbumIndex - 1;
        updateAlbumDisplay(currentAlbumIndex);
    });

    albumNextButton.addEventListener('click', () => {
        currentAlbumIndex = (currentAlbumIndex === galleries.length - 1) ? 0 : currentAlbumIndex + 1;
        updateAlbumDisplay(currentAlbumIndex);
    });

    modalCloseButton.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal); // Close modal when clicking overlay
    modalContent.addEventListener('click', (e: Event) => e.stopPropagation()); // Prevent modal closing when clicking content

    modalPrevButton.addEventListener('click', () => navigateModal('prev'));
    modalNextButton.addEventListener('click', () => navigateModal('next'));


    // Initial render
    if (galleries.length > 0) {
        updateAlbumDisplay(currentAlbumIndex);
    }
  });
})();
