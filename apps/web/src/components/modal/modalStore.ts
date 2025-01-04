import { ReactNode } from 'react'
import { create } from 'zustand'

type Modal = {
  content: ReactNode
  zIndex: number
}

type ModalState = {
  modals: Modal[]
  open: (content: ReactNode) => void
  close: () => void
}

const initialZIndex = 1000
const incrementZIndex = 100

export const useModal = create<ModalState>((set, get) => ({
  modals: [],
  open: (content) => {
    const modals = get().modals
    let zIndex = initialZIndex
    const lastModal = modals.at(-1)
    if (lastModal !== undefined) {
      zIndex = lastModal.zIndex + incrementZIndex
    }
    set({
      modals: [...get().modals, {
        content,
        zIndex,
      }],
    })
  },
  close: () => { },
}))
