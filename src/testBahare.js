import React, { useEffect, useState } from 'react'

const TestBahare = ({birth, address}) => {
    const [age,setAge] = useState(0)
    useEffect(() => {
        setAge (1402-birth)
        console.log("is rendered while birth changed")
    },[birth])
    useEffect(() => {
        console.log("first time?")
        return () => {
            console.log("az matrix kharej shod")
        }
    },[])
      return (
    <div>
        <span style={{ color: "#fff"}}>Age: {age}</span>
    </div>
  )
}

export const Ali = () => {
    const [birth, setBirth] = useState(1377);
    return (
        <section style={{ marginTop: "10rem"}}>
            {birth < 1383 ? <TestBahare birth = {birth} address="Tehran" /> : <p style={{color:'white'}}>hi</p>}
            <button onClick={() => { setBirth(prev => prev  + 1)}}>Add Birth</button>
        </section>
    )
}