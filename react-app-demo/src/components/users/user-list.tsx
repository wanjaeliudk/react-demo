
const UserList = ({ user }: { user: any }) => {
  return (
    <div className="mb-3">
        <span>{user.id}</span>
        <p>{user.username}</p>
        <p>{user.email}</p>
    </div>
  )
}

export default UserList