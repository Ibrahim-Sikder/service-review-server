import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Food Delivery` ;
    },[title])
}
export default useTitle;