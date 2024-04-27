import './style.scss'
import { TagsDropdownProps } from './interface'
import SearchIcon from 'assets/icons/search-icon.svg'
import { tagsOptions } from 'utils/consts'
import Checkbox from 'components/atoms/Checkbox'
import { FormEvent } from 'react'
import classNames from 'classnames'

const TagsDropdown = ({
  showDropdown,
  setShowDropdown,
  selectedTags,
  setSelectedTags
}: TagsDropdownProps) => {
  const handleCheckboxChange = (value: string) => {
    const updatedOptions = [...selectedTags]
    if (updatedOptions.includes(value)) {
      updatedOptions.splice(updatedOptions.indexOf(value), 1)
    } else {
      updatedOptions.push(value)
    }
    setSelectedTags(updatedOptions)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSelectedTags(selectedTags)
    setShowDropdown(false)
  }

  return (
    <div className="tags-dropdown">
      <div className="tags-dropdown__search">
        <img src={SearchIcon} />
        <input
          type="text"
          className="tags-dropdown__input"
          placeholder="Wyszukaj grupę lub tag"
          onFocus={() => setShowDropdown(true)}
        />
      </div>
      {showDropdown && (
        <form className="tags-dropdown__options" onSubmit={handleSubmit}>
          {tagsOptions.map((tag, index) => (
            <Checkbox
              value={tag.value}
              key={index}
              checked={selectedTags.includes(tag.value)}
              onChange={() => handleCheckboxChange(tag.value)}>
              <div className="options__wrapper-content">
                <p className="options__wrapper-content__value">{tag.value}</p>
                <p className="options__wrapper-content__amount">{`+${tag.amount}`}</p>
              </div>
            </Checkbox>
          ))}
          <button
            className={classNames('options__submit-btn', {
              'options__submit-btn--disabled': selectedTags.length === 0
            })}
            type="submit"
            disabled={selectedTags.length === 0}>
            Zapisz
          </button>
        </form>
      )}
    </div>
  )
}

export default TagsDropdown
