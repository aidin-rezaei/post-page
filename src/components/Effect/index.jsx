'use client'
import { Darkmode } from "@/features/Redux/counter/counterSlice";
import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './style.css'

const Effect = () => {
    const select = useRef(null);
    const lightModeBTN = useSelector((state) => state.counter.value)
    useEffect(function onFirstMount() {
        // document.getElementsByClassName("lightModeBTN")[0].addEventListener('click', (e) => {
        let bodyRect = document.body.getBoundingClientRect(),
            top = lightModeBTN[1] - bodyRect.top - window.scrollY,
            left = lightModeBTN[2] - bodyRect.left - window.scrollX,
            circle = document.createElement('div'),
            top2 = (circle.offsetTop + select.current.parentElement.offsetTop),
            left2 = (circle.offsetLeft + select.current.parentElement.offsetLeft)
        circle.style.top = `-${top2}px`;
        circle.style.left = `-${left2}px`;
        circle.style.marginTop = `${top}px`;
        circle.style.marginLeft = `${left}px`;
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
        // })
    }, [lightModeBTN]);

    return (
        <div className={`EffectLightMode w-[100vw] h-[100vh] overflow-hidden fixed -z-10`} ref={select}>
        </div>
    );
}

export default Effect;