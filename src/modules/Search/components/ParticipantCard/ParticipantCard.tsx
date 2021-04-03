import { Text, Flex, Box } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { IParticipantMeta } from 'src/types'

export const ParticipantCard: React.FC<IParticipantMeta> = ({ name, id }) => {
  return (
    <NavLink to={`/profile/${id}`}>
      <Box paddingY="20px">
        <Flex
          background="blue.900"
          borderRadius="10px"
          boxShadow="box-shadow: 0 0 10px rgba(0,0,0,0.5)"
          padding="20px"
        >
          <img
            height="20"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Belarus_%281918%2C_1991%E2%80%931995%29.svg/1200px-Flag_of_Belarus_%281918%2C_1991%E2%80%931995%29.svg.png"
            width="60"
          />
          <Text fontSize="3xl" fontWeight="600" ml="15px">
            {name}
          </Text>
        </Flex>
      </Box>
    </NavLink>
  )
}
