import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getAlbumById } from "../service/api"
import AlbumList from "../components/albums/album-list"

const AlbumDetailsPage = () => {
  const params = useParams()

  let id = params.id ? parseInt(params.id) : 0

  const { data: album, error, isLoading } = useQuery({
    queryKey: ["album-details", { id }] as [string, { id: number }],
    queryFn: ({ queryKey }) => getAlbumById(queryKey[1].id),
  });


  if(isLoading) return <h1>loading...</h1>

  if(error) return <h1>{error.message}</h1>

  if(!album || album === undefined) return <h1> No data found! </h1>

  return  <AlbumList album={album} /> 
  
}

export default AlbumDetailsPage