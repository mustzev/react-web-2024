import { useModal } from 'src/components/modal/modalStore'
import './home.css'

export function Home() {
  const open = useModal(state => state.open)

  function openModal() {
    open(<ModalContent />)
  }

  return (
    <div className="home-page">
      home page
      <p className="red-text">
        red text
      </p>
      <button onClick={openModal}>
        modal
      </button>
      <button>
        notification
      </button>
    </div>
  )
}

function ModalContent() {
  const open = useModal(state => state.open)

  function openModal() {
    open(
      <div style={{ width: 300, height: 300 }}>
        inner modal content
      </div>,
    )
  }

  return (
    <div className="" style={{ width: 500, height: 500 }}>
      <button onClick={openModal}>
        inner modal
      </button>
    </div>
  )
}
