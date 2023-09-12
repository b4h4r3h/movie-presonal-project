import React, { useCallback, useEffect, useMemo } from 'react'

const Test = ({ age, name, job }) => {
    const [toggle, setToggle] = useState(true)
    useRef();

    useEffect(() => {
        console.log("mount")

        return () => {
            console.log("unmount")
        }
    }, [])

    useEffect(() => {
        console.log("on change age")
    }, [age])

    useEffect(() => {
        console.log("on change name or age")
    }, [age, name])

    useEffect(() => {
        console.log("on change state or age")
    }, [age, toggle])

    useEffect(() => {
        console.log("update everytime on update component")
    })

    useCallback(() => {

    }, [])

    useMemo(() => {

    }, [])


  return (
    <div>
      {cond === 1 ? <Component age={28} name="bahare" job="programmer" /> : null}
    </div>
  )
}

export default Test
