import { createContext, useContext, useState } from "react"

const WatchListContext = createContext()
export const useWatchList = () => useContext(WatchListContext)

export const WatchListProvider = ({children}) => {
    const [watchList, setWatchList] = useState([])

    



}