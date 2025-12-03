import React, { useEffect, useState } from 'react'

function useLocalStorage(key,intialValue) {
    const [value,setValue]=useState(()=>{
        const item=localStorage.getItem(key)
        if(!item)
            return intialValue;
        try{
            return JSON.parse(item)
        }
        catch(err){
            console.log("Item cannot be parse")
            return intialValue
        }
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])

    return [value,setValue]
}   

export default useLocalStorage
