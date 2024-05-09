import { IServerResponse } from 'models/serverResponse'
import { useCallback, useState } from 'react'
import axiosDefault from 'setup/axios/defaultInstace'
import { parseApiErrors } from 'utils/parseApiErrors'

const useData = <T, R = T>(endpoint: string) => {
  const [data, setData] = useState<R>()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const getData = useCallback(
    async (): Promise<IServerResponse<R>> => {
      try {
        setIsLoading(true)
        setIsError(false)

        const response = await axiosDefault.get(endpoint)

        const responseData = response.data
        setData(responseData)

        return { succeed: true, data: responseData }
      } catch (error) {
        setIsError(true)

        return parseApiErrors(error)
      } finally {
        setIsLoading(false)
      }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [endpoint]
  )

  return { data, isLoading, isError, getData, setData }
}

export default useData
