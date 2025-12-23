import React from 'react'

// import { useParams } from 'next/navigation'
// const UserDetails = () => {
//   const id = useParams().id as string

const UserDetails = async ({ params }: ({ params: Promise<{ id: string }> })) => {
  const { id } = await params;
  // Dummy user data
  const users: Record<string, { name: string; email: string; age: number | string; role: string }> = {
    '1': { name: 'John Doe', email: 'john@example.com', age: 30, role: 'Admin' },
    '2': { name: 'Jane Smith', email: 'jane@example.com', age: 25, role: 'User' },
    '3': { name: 'Bob Johnson', email: 'bob@example.com', age: 35, role: 'Moderator' },
  }

  const user = users[id] || { name: 'Unknown User', email: 'N/A', age: 'N/A', role: 'N/A' }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <div className="bg-amber-100 shadow-md rounded-lg p-6 text-black w-fit">
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
    </div>
  )
}

export default UserDetails