import './style.scss'
import { TagsDropdownProps } from './interface'
import SearchIcon from 'assets/icons/search-icon.svg'
import { tagsOptions } from 'utils/consts'
import Checkbox from 'components/atoms/Checkbox'
import { FormEvent, useState } from 'react'
import classNames from 'classnames'
import ClearIcon from 'assets/icons/clear-icon.svg'

const TagsDropdown = ({
  showDropdown,
  setShowDropdown,
  selectedTags,
  setSelectedTags
}: TagsDropdownProps) => {
  const [searchQuery, setSearchQuery] = useState('')

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
    setSearchQuery('')
  }

  const filteredTags = tagsOptions.filter((tag) =>
    tag.value.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="tags-dropdown">
      <div className="tags-dropdown__search">
        <img src={SearchIcon} />
        <input
          type="text"
          className="tags-dropdown__input"
          placeholder="Wyszukaj grupę lub tag"
          value={searchQuery}
          onFocus={() => setShowDropdown(true)}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <img
            src={ClearIcon}
            className="tags-dropdown__search--clear"
            onClick={() => setSearchQuery('')}
          />
        )}
      </div>
      {showDropdown && (
        <form className="tags-dropdown__options" onSubmit={handleSubmit}>
          {filteredTags.map((tag, index) => (
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
