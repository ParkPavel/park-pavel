import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/carousel.inline" // Add back the import

// Remove useState import
// import { useState } from "preact/hooks" // Import useState

function Carousel({ displayClass, fileData }: QuartzComponentProps) {
  // Get galleries data from frontmatter
  const galleries = (fileData.frontmatter?.portfolioGalleries as { title: string; urls: string[] }[] | undefined) || []

  // Remove state variables
  // const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0) // State for horizontal carousel
  // const [isModalOpen, setIsModalOpen] = useState(false) // State for modal open/close
  // const [currentImageIndex, setCurrentImageIndex] = useState(0) // State for image index in modal

  if (galleries.length === 0) {
    return null
  }

  // We will need to manage the current album and image index in the inline script
  // For now, just display the first album as a placeholder
  const currentAlbum = galleries[0] // Display first album initially


  // The rendering logic below will implement the new design (static HTML structure)
  return (
    <div class={`portfolio-gallery-container ${displayClass ?? ""}`} data-galleries={JSON.stringify(galleries)}> {/* Add data-galleries attribute */}
      {/* Horizontal Album Carousel Navigation */}
      <div class="album-carousel-nav">
        {/* Buttons will be handled by inline script */}
        <button class="album-prev">{"<"}</button>
        <h2>{currentAlbum.title}</h2> {/* Display title of the first album */}
        <button class="album-next">{">"}</button>
      </div>

      {/* Photo Grid */}
      <div class="photo-grid">
        {/* Images for the first album */}
        {currentAlbum.urls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Photo ${index + 1}`}
            data-index={index} // Add data attribute for inline script
            // Remove onClick handler
            // onClick={() => { console.log("Image clicked:", url); openModal(index); }} // Open modal on click with logging
            // onMouseOver={() => console.log("Image hovered:", url)} // Placeholder for hover effect
          />
        ))}
      </div>

      {/* Modal for Full-size Viewing (Static Structure) */}
      {/* Modal will be managed by inline script */}
      <div class="modal-overlay" style={{ display: 'none' }}> {/* Initially hidden */}
        <div class="modal-content">
          <button class="modal-close">&times;</button>
          <img src="" alt="Full size photo" /> {/* Image source will be set by script */}
          <div class="modal-nav">
            <button class="modal-prev">{"<"}</button>
            <button class="modal-next">{">"}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

Carousel.css = `
/* Keep existing CSS */
.portfolio-gallery-container {
  margin: 20px auto; /* Center the gallery and add vertical margin */
  max-width: 1000px; /* Limit max width for large screens */
  padding: 0 20px; /* Add some padding on the sides */
}

.album-carousel-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px; /* Increased margin */
}

.album-carousel-nav h2 {
  margin: 0 30px; /* Increased margin */
  font-size: 1.8em; /* Slightly larger title */
  text-align: center;
  flex-grow: 1;
  color: var(--dark); /* Use site's dark color variable */
}

.album-carousel-nav button {
  background-color: transparent; /* Transparent background */
  border: 1px solid var(--gray); /* Use site's gray color variable for border */
  color: var(--darkgray); /* Use site's dark gray color variable for text */
  padding: 10px 15px; /* Adjust padding */
  cursor: pointer;
  font-size: 1.2em; /* Adjust font size */
  border-radius: 5px; /* Rounded corners */
  transition: all 0.3s ease; /* Smooth transition for hover effects */
}

.album-carousel-nav button:hover {
  background-color: var(--lightgray); /* Use site's light gray color on hover */
  color: var(--dark); /* Use site's dark color on hover */
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Adjust minmax for slightly larger images */
  gap: 15px; /* Increased gap */
}

.photo-grid img {
  width: 100%;
  height: 200px; /* Fixed height for grid items */
  object-fit: cover; /* Ensure images cover the area */
  cursor: pointer;
  border-radius: 5px; /* Rounded corners for images */
  transition: transform 0.3s ease; /* Smooth transition for hover effect */
}

.photo-grid img:hover {
  transform: scale(1.03); /* Slightly enlarge on hover */
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9); /* Darker overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px); /* Add blur effect to background */
}

.modal-content {
  position: relative;
  max-width: 95%; /* Increased max width */
  max-height: 95%; /* Increased max height */
  overflow: hidden; /* Hide overflow, scrolling will be on the image itself or handled by modal nav */
  background-color: transparent; /* Transparent background for content */
  padding: 0; /* Remove padding */
  border-radius: 0; /* Remove border radius */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content img {
  display: block;
  max-width: 100%;
  max-height: 90vh; /* Adjust max height */
  object-fit: contain; /* Contain the image within the bounds */
  margin: 0; /* Remove margin */
}

.modal-close {
  position: absolute;
  top: 20px; /* Adjust position */
  right: 20px; /* Adjust position */
  font-size: 30px; /* Larger close button */
  background: none;
  border: none;
  color: white; /* White color for visibility on dark overlay */
  cursor: pointer;
  z-index: 1010;
  transition: opacity 0.3s ease;
}

.modal-close:hover {
  opacity: 0.7;
}

.modal-nav {
  position: absolute;
  top: 0; /* Position at the top */
  bottom: 0; /* Extend to the bottom */
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center vertically */
  padding: 0 20px; /* Add horizontal padding */
  z-index: 1010;
}

.modal-nav button {
  background-color: rgba(0, 0, 0, 0.5); /* Darker semi-transparent buttons */
  color: white; /* White arrows */
  border: none;
  padding: 15px; /* Adjust padding */
  cursor: pointer;
  font-size: 24px; /* Larger arrows */
  border-radius: 50%; /* Circular buttons */
  transition: background-color 0.3s ease;
}

.modal-nav button:hover {
  background-color: rgba(0, 0, 0, 0.8); /* Darker on hover */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .portfolio-gallery-container {
    padding: 0 10px;
  }

  .album-carousel-nav h2 {
    font-size: 1.5em;
  }

  .album-carousel-nav button {
    padding: 8px 12px;
    font-size: 1em;
  }

  .photo-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); /* Smaller grid items on small screens */
    gap: 8px;
  }

  .photo-grid img {
    height: 100px; /* Smaller fixed height */
  }

  .modal-content {
    max-width: 100%;
    max-height: 100%;
  }

  .modal-content img {
    max-height: 85vh;
  }

  .modal-close {
    top: 10px;
    right: 10px;
    font-size: 24px;
  }

  .modal-nav {
    padding: 0 10px;
  }

  .modal-nav button {
    padding: 10px;
    font-size: 20px;
  }
}
`

// Add back the afterDOMLoaded line
Carousel.afterDOMLoaded = script

export default (() => Carousel) satisfies QuartzComponentConstructor
