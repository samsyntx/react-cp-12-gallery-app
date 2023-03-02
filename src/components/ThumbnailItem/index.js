import './index.css'

const ThumbnailItem = props => {
  const {imageDetail, changeDisplayImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetail

  const clickedImageItem = () => {
    changeDisplayImage(id)
  }

  return (
    <li className="thumbnail-item">
      <img
        onClick={clickedImageItem}
        src={thumbnailUrl}
        alt={thumbnailAltText}
      />
    </li>
  )
}

export default ThumbnailItem
