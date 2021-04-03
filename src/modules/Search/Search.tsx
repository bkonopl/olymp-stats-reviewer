import { Box, Flex, Heading, Input, Spinner } from '@chakra-ui/react'
import { debounce } from 'lodash'
import React, { useCallback, useEffect, useState } from 'react'
import { createClient } from 'src/api'
import { ModuleLayout } from 'src/layouts'
import { IParticipantMeta } from 'src/types'

import { ParticipantCard } from './components'

export const Search: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState<string>('')
  const [focus, setFocus] = useState(false)

  const handleFocus = () => setFocus(true)

  const [participants, setParticipants] = useState<IParticipantMeta[]>([])

  const loadParticipants = useCallback(
    debounce((search) => {
      const client = createClient()
      void client.getParticipants(search).then((data) => {
        setParticipants(data)
        setLoading(false)
      })
    }, 300),
    [],
  )

  useEffect(() => {
    if (focus) {
      setLoading(true)
      setParticipants([])
      loadParticipants(search)
    }
  }, [search, loadParticipants, focus])

  return (
    <ModuleLayout>
      <Box>
        <Box mt={focus ? '40px' : '300px'} transition="1s">
          <Heading as="h1" fontSize={!focus ? '3xl' : 'sm'} mb="20px" transition="1s">
            Find the olymp average fan
          </Heading>
          <Input
            fontSize="xl"
            height="60px"
            value={search}
            onChange={(event) => setSearch(event.target.value ?? '')}
            onFocus={handleFocus}
          />
        </Box>
        {loading && (
          <Flex alignItems="center" justifyContent="center" mt="150px" width="100%">
            <Spinner height="100px" width="100px" />
          </Flex>
        )}
        {participants.map((participant) => (
          <ParticipantCard {...participant} key={participant.id} />
        ))}
      </Box>
    </ModuleLayout>
  )
}
