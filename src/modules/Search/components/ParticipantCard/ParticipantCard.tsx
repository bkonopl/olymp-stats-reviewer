import { Heading, Box } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { IParticipantMeta } from 'src/types'

export const ParticipantCard: React.FC<IParticipantMeta> = ({ name, id }) => {
  return (
    <NavLink to={`/profile/${id}`}>
      <Box>
        <Heading>{name}</Heading>
      </Box>
    </NavLink>
  )
}
