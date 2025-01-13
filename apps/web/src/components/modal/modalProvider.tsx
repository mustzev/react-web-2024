import { useKeyPress } from 'src/utils/hooks/useKeyPress'
import './modalProvider.css'
import { useModal } from './modalStore'

export function ModalProvider() {
  const { modals, closeTheLatest } = useModal(state => state)

  useKeyPress('Escape', closeTheLatest)

  return modals.map(modal => (
    <div className="modal-background" style={{ zIndex: modal.zIndex }}>
      <div className="modal" style={{ zIndex: modal.zIndex + 1 }}>
        {modal.content}
      </div>
    </div>
  ))
}
