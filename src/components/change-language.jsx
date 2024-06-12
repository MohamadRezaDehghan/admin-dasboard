import usFlag from "@assets/images/en.png"
import faFalg from "@assets/images/fa.png"
import { useEffect, useRef, useState } from "react"
import { useAppContext } from "../context/app/app-context"

const ChangeLanguage = () =>{
const [show , setShow] = useState(false)

const ref = useRef()

const {language , changeLanguage}= useAppContext()

useEffect(() => {
    const checkIfClickOutSide = e =>{
        if(show && ref.current && !ref.current.contains(e.target)){
            setShow(false)
        }
    }

    document.addEventListener('mousedown', checkIfClickOutSide)

    return ()=>{
        document.removeEventListener('mousedown', checkIfClickOutSide)
    }

}, [show])


return (
    <div className="dropdown">
        <a  className="nav-flag dopdown-toggle" onClick={()=>setShow(true)}>
            <img src={language === "fa" ? faFalg : usFlag} alt="english" />
        </a>
        <div ref={ref} className={`dropdown-menu dropdown-menu-end  ${show ? 'show' : undefined}`} >
            <a  className="dropdown-item fw-bolder d-flex align-items-center gap-2" style={{textAlign: language === 'fa' ? 'right':'left'}} onClick={() => changeLanguage('fa')}>
                <img width='20' className="ms-2" src={faFalg} alt="farsi" />
                <span className="align-middle">فارسی</span>
            </a>
            <a   className="dropdown-item fw-bolder d-flex align-items-center gap-2"  style={{textAlign: language === 'fa' ? 'right':'left'}} onClick={() =>changeLanguage('en')}>
            <img width='20' className="ms-2" src={usFlag} alt="english" />
            <span className="align-middle">english</span>
        </a>
        </div> 

    </div>
)
}

export default ChangeLanguage;