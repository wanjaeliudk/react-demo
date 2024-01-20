import { Link } from "react-router-dom"

const AlbumList = ({ album }: { album: any }) => {
  return (
    <Link to={`/albums/${album.id}`} className="flex space-x-1 hover:underline">
        <span>{album.id}</span>
        <p className="mb-3">{album.title} </p>
    </Link>
  )
}

export default AlbumList