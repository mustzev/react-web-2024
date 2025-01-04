import { useModal } from 'src/components/modal/modalStore'
import './home.css'

export function Home() {
  const open = useModal(state => state.open)

  function openModal() {
    open(
      <div>
        test
      </div>,
    )
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
