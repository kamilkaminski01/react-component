import './style.scss'
import CloseIcon from 'assets/icons/close-icon.svg'
import AiSection from 'components/atoms/AiSection'
import InfoSection from 'components/atoms/InfoSection'
import TagsDropdown from 'components/molecules/TagsDropdown'
import RemoveIcon from 'assets/icons/remove-icon.svg'
import { useState } from 'react'

const TagForm = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const handleSelectedTags = (tags: string[]) => {
    setSelectedTags(tags)
  }

  const removeTag = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="tag-form">
      <div className="tag-form__header">
        <h3>Tagi</h3>
        <img src={CloseIcon} className="tag-form__header-close" />
      </div>
      <TagsDropdown
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        selectedTags={selectedTags}
        setSelectedTags={handleSelectedTags}
      />
      {!showDropdown && (
        <>
          {selectedTags.length > 0 && (
            <div className="tags-form__selected-tags">
              {selectedTags.map((tag, index) => (
                <div className="selected-tag" key={index} onClick={() => removeTag(tag)}>
                  {tag}
                  <img src={RemoveIcon} />
                </div>
              ))}
            </div>
          )}
          <AiSection />
          <InfoSection tagsAmount={selectedTags.length} />
        </>
      )}
    </div>
  )
}

export default TagForm
