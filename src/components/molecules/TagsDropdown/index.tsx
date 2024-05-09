import './style.scss'
import { TagsDropdownProps } from './interface'
import SearchIcon from 'assets/icons/search-icon.svg'
import Checkbox from 'components/atoms/Checkbox'
import { FormEvent, useState } from 'react'
import classNames from 'classnames'
import ClearIcon from 'assets/icons/clear-icon.svg'
import { ITag } from 'models/tag'
import useTags from 'hooks/useTags'

const TagsDropdown = ({
  showDropdown,
  setShowDropdown,
  selectedTags,
  setSelectedTags
}: TagsDropdownProps) => {
  const { mockedTags } = useTags()
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

  const filteredTags = mockedTags?.filter((tag: ITag) =>
    tag.name.toLowerCase().includes(searchQuery.toLowerCase())
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
          {filteredTags?.map((tag, index) => (
            <Checkbox
              value={tag.name}
              key={index}
              checked={selectedTags.includes(tag.name)}
              onChange={() => handleCheckboxChange(tag.name)}>
              <div className="options__wrapper-content">
                <p className="options__wrapper-content__value">{tag.name}</p>
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
