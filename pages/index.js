import { useEffect, useState } from 'react'
import {collection, getDocs} from 'firebase/firestore'
import {db} from 'libs/firebase'

function UserProfile({age, fullName, address, ...props}){
    return(
        <ul>
            <li>{fullName}</li>
            <li>{age}</li>
            <li>{address.city}</li>
        </ul>
    )
}

function index(props){
    // Read a single Doc from a collection
    const [users, setUsers] = useState([])

    useEffect(()=>{
        async function getFirebaseDoc(){
            const ref = collection(db, 'users')
            const userSnapshot = await getDocs(ref)

            userSnapshot.forEach(doc=>{
                // object and array non mutating methods of state...
                setUsers(doc.data())
            })
        }
        getFirebaseDoc()
    }, [])
    
    if (users) {
        return <div>Getting a Group of Docs</div>
    }else{
        return <div>Getting a Group of Docs</div>
    }
}

export default index