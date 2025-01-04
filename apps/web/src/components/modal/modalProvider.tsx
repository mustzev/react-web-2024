import { useKeyPress } from 'src/utils/hooks/useKeyPress'
import './modalProvider.css'
import { useModal } from './modalStore'

export function ModalProvider() {
  const modals = useModal(state => state.modals)

  useKeyPress('Escape', () => { })

  return modals.map(modal => (
    <div className="modal-background" style={{ zIndex: modal.zIndex }}>
      <div className="modal" style={{ zIndex: modal.zIndex + 1 }}>
        {modal.content}
      </div>
    </div>
  ))
}
