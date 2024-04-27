import './style.scss'
import { CheckboxProps } from './interface'

const Checkbox = ({ value, onChange, checked, children }: CheckboxProps) => {
  return (
    <label className="checkbox-wrapper">
      <input
        className="checkbox-wrapper__checkbox"
        type="checkbox"
        value={value}
        defaultChecked={checked}
        onChange={onChange}
      />
      <span className="checkbox-wrapper__indicator" />
      <div className="checkbox-wrapper__content">{children}</div>
    </label>
  )
}

export default Checkbox
