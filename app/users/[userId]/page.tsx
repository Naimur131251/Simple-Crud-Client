const UserDetailPage = async ({
  params,
}: {
  params: Promise<{ userId: string }>
}) => {
  const { userId } = await params

  const res = await fetch(`http://localhost:5000/users/${userId}`);
  
  if (!res.ok) {
    return <div>User not found or Server Error</div>
  }

  const user = await res.json();

  return (
    <div>
      <h2>User Details: {userId}</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default UserDetailPage
