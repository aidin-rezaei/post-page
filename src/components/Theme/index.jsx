'use client'

import { useSelector } from "react-redux";

const Theme = ({ children }) => {
    const lightModeBTN = useSelector((state) => state.counter.value)
console.log(lightModeBTN);
    return (
        <div className="h-[100%]"  data-mode={lightModeBTN[0]?'dark':'light'}>
            {children}
        </div>
    );
}

export default Theme;