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
      <button type="button" className="button-style" onClick={clickedImageItem}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
