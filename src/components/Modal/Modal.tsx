import { TModal } from '../../types'

const Modal = ({children, show, setShow}: TModal) => {
  return (
    <div onClick={() => setShow(!show)} className={`modal ${show ? 'modal_show' : ''}`}>
      {children}
    </div>
  )
}

export default Modal