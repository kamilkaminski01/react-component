import './style.scss'
import ReactSelect from 'react-select'
import makeAnimated from 'react-select/animated'
import { selectOptions } from 'utils/consts'

const animatedComponents = makeAnimated()

const Select = () => {
  return (
    <ReactSelect
      className="select"
      components={animatedComponents}
      options={selectOptions}
      closeMenuOnSelect={false}
      isMulti
      classNamePrefix={'select'}
      noOptionsMessage={() => 'Brak opcji'}
      placeholder={'Wyszukaj grupę lub tag'}
    />
  )
}

export default Select
