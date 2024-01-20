import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../service/api"
import UserList from "../components/users/user-list"

const HomePage = () => {
  const { data: users, isLoading, error  } = useQuery({ queryKey: ['users'], queryFn: getUsers })

  console.log({ users })

  if(isLoading) return <h1>loading...</h1>

  if(error) return <h1>{error.message}</h1>


  return (
    <div>
       {  users?.map((u: any) => <UserList key={u.id} user={u} />) }
    </div>
  )
}

export default HomePage