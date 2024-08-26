import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params=new useParams()
  return (
    <div>
      heyyyy I'm {params.username}
    </div>
  )
}

export default User
