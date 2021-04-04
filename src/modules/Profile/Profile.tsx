import { Box, Flex, Spinner, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { createClient } from 'src/api'
import { ModuleLayout } from 'src/layouts'
import { IParticipant } from 'src/types'

import { Chart } from './components'
import { IProfileRouteParams } from './types'

export const Profile: React.FC = () => {
  const { id } = useParams<IProfileRouteParams>()
  const [participant, setParticipant] = useState<IParticipant | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const client = createClient()
    void client.getParticipantById(+id).then((data) => {
      setParticipant(data)
      setLoading(false)
    })
  }, [setParticipant, setLoading, id])

  if (loading)
    return (
      <ModuleLayout>
        <Flex alignItems="center" justifyContent="center" mt="300px" width="100%">
          <Spinner height="100px" width="100px" />
        </Flex>
      </ModuleLayout>
    )

  if (!participant) return null

  return (
    <ModuleLayout>
      <Box marginY="40px" textAlign="center">
        <Heading>{participant.name}</Heading>
      </Box>
      <Box className="chart" height="600px" marginLeft="-40px" width="calc(100% + 150px)">
        <Chart data={participant.olympiads} />
      </Box>
    </ModuleLayout>
  )
}
