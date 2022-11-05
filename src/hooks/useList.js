import { getList } from "@store/actions"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const useList = () => {
  const dispatch = useDispatch()
  const { loading, data: list } = useSelector(state => state.list)

  useEffect(() => {
    dispatch(getList({ page: 1 }))
  }, [])

  useEffect(() => {
    console.log('list', list)
  }, [list])

  return {
    list,
    loading
  }
}

export default useList