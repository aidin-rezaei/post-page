'use client'

import { useSelector } from "react-redux";

const Theme = ({ children }) => {
    const lightModeBTN = useSelector((state) => state.counter.value)

    return (
        <div  data-mode={lightModeBTN[0]?'dark':'light'}>
            {children}
        </div>
    );
}

export default Theme;