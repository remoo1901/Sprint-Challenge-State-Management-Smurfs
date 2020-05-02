import React,{useContext} from 'react'
import SmurfsContext from "./contexts/SmurfsContext"

export default function SmurfsForm() {
    const {postRequest} = useContext(SmurfsContext)
    console.log(postRequest)
    return (
        <div>
            <h1>form</h1>
        </div>
    )
}
