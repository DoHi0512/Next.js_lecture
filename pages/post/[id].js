import React, { Component, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home(){
    const router = useRouter();
    const {id = 0} = router.query;
    useEffect(()=>{
        if(!/^[0-9]$/.test(id) || id === undefined){
            router.replace('/');
        }
    },[id])
    return <div>ID : {id}</div>
}