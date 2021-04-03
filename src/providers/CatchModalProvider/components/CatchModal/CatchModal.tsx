import { Modal, ModalContent, ModalOverlay, ModalProps } from '@chakra-ui/react'
import React from 'react'

interface ICatchModal extends Omit<ModalProps, 'children'> {
  items: { key: string; value: string }[]
}

export const CatchModal: React.FC<ICatchModal> = ({ items, ...props }) => {
  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>{items[0].key}</ModalContent>
    </Modal>
  )
}
