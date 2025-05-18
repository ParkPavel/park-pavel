import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function ProfilePhoto({ displayClass }: QuartzComponentProps) {
  const profilePhotoUrl = "/myfiles/Profilephoto.jpg"; // Use new local path in myfiles
  // Remove aboutPageUrl
  // const aboutPageUrl = "/Обо мне/";

  return (
    <div class={`profile-photo-container ${displayClass ?? ""}`}>
      {/* Use img tag directly */}
      <img src={profilePhotoUrl} alt="Profile Photo" class="profile-photo"/>
    </div>
  );
}

ProfilePhoto.css = `
.profile-photo-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.profile-photo {
  display: block; /* Ensure image is a block element */
  width: 150px; /* Set a fixed width */
  height: 150px; /* Set a fixed height */
  border-radius: 50%; /* Make the image round */
  object-fit: cover; /* Ensure the image covers the area without distortion */
  border: 3px solid var(--secondary); /* Add a border using a theme color */
  transition: transform 0.3s ease-in-out; /* Smooth transition for hover/click */
  cursor: pointer; /* Indicate interactivity */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
  /* Remove temporary background color */
  /* background-color: red; /* Temporary background color for testing */
}

.profile-photo:hover {
  transform: scale(1.1); /* Enlarge slightly on hover */
}

`

export default (() => ProfilePhoto) satisfies QuartzComponentConstructor;
