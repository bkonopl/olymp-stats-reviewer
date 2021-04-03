import React, { useContext, useState } from 'react'

import { CatchModal } from './components'

interface IValues {}

interface IActions {
  showItems: (items: { key: string; value: string }[]) => void
}

type ICatchModalContext = IValues & IActions

const CatchModalContext = React.createContext<IActions & IValues>({} as ICatchModalContext)

export const useCatchModal = (): ICatchModalContext => {
  const context = useContext(CatchModalContext)
  if (!context) throw new Error('[useCatchModal] Outside the provider')
  return context
}

export const CatchModalProvider: React.FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false)
  const [items, setItems] = useState<{ key: string; value: string }[]>([])
  const onClose = () => setOpen(false)

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
