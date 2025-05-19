import { QuartzComponent, QuartzComponentConstructor } from "./types"

const ProfilePhoto: QuartzComponent = ({ cfg }) => {
  const baseUrl = cfg.baseUrl?.endsWith("/") ? cfg.baseUrl : `${cfg.baseUrl ?? ""}/`
  const imageUrl = `${baseUrl}static/profilePhoto.jpg`

  return (
    <div className="profile-photo-container">
      <img src={imageUrl} alt="Profile Photo" className="profile-photo"/>
    </div>
  )
}

ProfilePhoto.css = `
.profile-photo-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.profile-photo {
  width: 150px !important;
  height: 150px !important;
  border-radius: 10px; /* Rounded corners */
  object-fit: cover; /* Ensures the image covers the area without distortion */
  transition: transform 0.3s ease; /* Smooth transition for hover effect */
}

.profile-photo:hover {
  transform: scale(1.1); /* Enlarge on hover */
}
`

export default (() => ProfilePhoto) satisfies QuartzComponentConstructor
