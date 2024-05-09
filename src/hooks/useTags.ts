import useData from 'hooks/useData'
import { ITag } from 'models/tag'
import { ENDPOINTS } from 'utils/consts'
import { mockedTags } from 'utils/consts'

const useTags = () => {
  const { data: tags, isError, getData: getTags, ...rest } = useData<ITag[]>(ENDPOINTS.tags)

  return { tags, mockedTags, isError, getTags, ...rest }
}

export default useTags
