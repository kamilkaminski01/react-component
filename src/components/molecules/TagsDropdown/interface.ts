import { Dispatch, SetStateAction } from 'react'

export interface TagsDropdownProps {
  showDropdown: boolean
  setShowDropdown: Dispatch<SetStateAction<boolean>>
  selectedTags: string[]
  setSelectedTags: (tags: string[]) => void
}
