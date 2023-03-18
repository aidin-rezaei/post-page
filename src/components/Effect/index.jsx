'use client'
import { Darkmode } from "@/features/Redux/counter/counterSlice";
import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './style.css'

const Effect = () => {
    const select = useRef(null);
    const lightModeBTN = useSelector((state) => state.counter.value)
    useEffect(function onFirstMount() {
        let bodyRect = document.body.getBoundingClientRect(),
            base = select.current.getBoundingClientRect(),
            top =  bodyRect.top - base.top,
            left =  bodyRect.left - base.left,
            circle = document.createElement('div'),
            top2 = ( Number(lightModeBTN[1]) + window.scrollY ) + top,
            left2 = (Number(lightModeBTN[2]) + window.scrollX ) + left

        circle.style.marginTop = `${top2}px`;
        circle.style.marginLeft = `${left2}px`;
        if (lightModeBTN[0] === true)
            circle.classList.add('dark')
        else if (lightModeBTN[0] === false)
            circle.classList.add('light')
        const ripple = Array(select.current.querySelectorAll('div'))[0]
        setTimeout(() => {
            ripple.forEach(element => {
                if (element)
                    element.remove()
            });
        }, 1500)
        select.current.appendChild(circle)
    }, [lightModeBTN]);

    return (
        <div className={`EffectLightMode overflow-hidden w-[100%] h-[100%] absolute -z-10`} key={1} ref={select}>
        </div>
    );
}

export default Effect;