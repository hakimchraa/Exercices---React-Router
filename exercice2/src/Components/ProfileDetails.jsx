import React from 'react'

export default function ProfileDetails(users) {
  return (
    <div>
        <h1>{users.name}</h1>
        <p>{users.email}</p>
        <img src={users.avatar} alt="avatar" />

    </div>
  )
}


