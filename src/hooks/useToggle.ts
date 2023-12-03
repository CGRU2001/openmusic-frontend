import { useState } from "react"

const useToggle = (defaultValue?: boolean): [boolean, {
    on: () => void,
    off: () => void,
    toggle: () => void
}] => {
    const [state, setState] = useState(defaultValue || false)

    return [state, {
        on: () => setState(true),
        off: () => setState(false),
        toggle: () => setState(!state)
    }]
}


export default useToggle