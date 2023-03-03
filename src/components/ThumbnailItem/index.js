import './index.css'

const ThumbnailItem = props => {
  const {imageDetail, changeDisplayImage, isActiveImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetail

  const clickedImageItem = () => {
    changeDisplayImage(id)
  }

  const applyActiveCSS = isActiveImage ? `active-image-css` : ''

  return (
    <li className={`thumbnail-item ${applyActiveCSS}`}>
      <img
        onClick={clickedImageItem}
        src={thumbnailUrl}
        alt={thumbnailAltText}
      />
    </li>
  )
}

export default ThumbnailItem
