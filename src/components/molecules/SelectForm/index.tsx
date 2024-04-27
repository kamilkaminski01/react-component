import './style.scss'
import CloseIcon from 'assets/icons/close-icon.svg'
import Select from 'components/atoms/Select'
import AiSection from 'components/atoms/AiSection'
import InfoSection from 'components/atoms/InfoSection'

const SelectForm = () => {
  return (
    <div className="select-form">
      <div className="select-form__header">
        <h3>Tagi</h3>
        <img src={CloseIcon} className="select-form__header-close" />
      </div>
      <Select />
      <AiSection />
      <InfoSection tagsAmount={3} />
    </div>
  )
}

export default SelectForm
