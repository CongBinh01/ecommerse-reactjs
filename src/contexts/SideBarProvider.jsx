import {createContext, useState} from 'react'

export const SideBarContext = createContext()

export const SideBarProvider = ({children}) => {

    //tao state luu gia tri true false cua SideBar
    const [isOpen, setIsOpen] = useState(false);

    return (
        //truyen gia tri isOpen va ham setIsOpen cho cac Component con nhan duoc
        //Paste qua props value
        <SideBarContext.Provider
        value={{isOpen, setIsOpen}}
        >
            {children}
        </SideBarContext.Provider>
    )
}