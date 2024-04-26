import './style.scss'
import CloseIcon from 'assets/icons/close-icon.svg'

const SelectForm = () => {
  return (
    <div className="select-form">
      <div className="select-form__header">
        <h3>Tagi</h3>
        <img src={CloseIcon} className="select-form__header-close" />
      </div>
    </div>
  )
}

export default SelectForm
