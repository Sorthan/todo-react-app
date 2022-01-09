import qs from "qs"
import { useMemo } from "react"
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom"

export const useRouter = <TQuery extends any = any>() => {
  const params = useParams()
  const location = useLocation()
  const history = useHistory()
  const match = useRouteMatch()
  const query = useMemo(() => {
    return {
      ...qs.parse(location.search.slice(1)),
      ...params,
    } as TQuery
  }, [location.search, params])

  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      goBack: history.goBack,
      pathname: location.pathname,
      query,
      match,
      location,
    }
  }, [history.push, history.replace, history.goBack, location, query, match])
}