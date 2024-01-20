import { useQuery } from "@tanstack/react-query"
import { getAlbums } from "../service/api"
import AlbumList from "../components/albums/album-list"

const AlbumPage = () => {
  const { data: albums, isLoading, error  } = useQuery({ queryKey: ['albums'], queryFn: getAlbums })

  console.log(albums)

  if(isLoading) return <h1>loading...</h1>

  if(error) return <h1>{error.message}</h1>


  return (
    <div>
       {  albums?.map((a: any) => <AlbumList key={a.id} album={a} />) }
    </div>
  )
}

export default AlbumPage