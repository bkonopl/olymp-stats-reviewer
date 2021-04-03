import { useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'

import { CatchModal } from './components'

interface IValues {}

interface IActions {
  showItems: (items: { key: string; value: string }[]) => void
}

type ICatchModal = IValues & IActions

const CatchModalContext = React.createContext<IActions & IValues>({} as ICatchModal)

export const CatchModalProvider: React.FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false)
  const [items, setItems] = useState<{ key: string; value: string }[]>([])
  const { onClose } = useDisclosure()

  const showItems = (items: { key: string; value: string }[]) => {
    setItems(items)
    setOpen(true)
  }

  return (
    <>
      <CatchModal isOpen={isOpen} items={items} onClose={onClose} />
      <CatchModalContext.Provider value={{ showItems }}>{children}</CatchModalContext.Provider>
    </>
  )
}
