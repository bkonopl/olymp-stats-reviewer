import React from 'react'
import { useParams } from 'react-router'

import { IProfileRouteParams } from './types'

export const Profile: React.FC = () => {
  const { id } = useParams<IProfileRouteParams>()
  return <h1>{id}</h1>
}
