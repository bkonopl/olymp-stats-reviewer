import { Box, Flex, Modal, ModalContent, ModalOverlay, ModalProps, Text } from '@chakra-ui/react'
import React from 'react'

interface ICatchModal extends Omit<ModalProps, 'children'> {
  items: { key: string; value: string }[]
}

export const CatchModal: React.FC<ICatchModal> = ({ items, ...props }) => {
  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <Box padding="40px">
          {items.map(({ key, value }) => (
            <Flex justifyContent="space-between" key={key} marginY="10px">
              <Text fontWeight="600">{key}</Text>
              <Text>{value}</Text>
            </Flex>
          ))}
        </Box>
      </ModalContent>
    </Modal>
  )
}
