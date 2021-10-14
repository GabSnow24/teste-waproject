import React from "react";
import { menuIcon, XIcon } from "../icons/icons";

export default function Modal({ children }: any) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            
            <button className="right-2 bottom-2 fixed bg-blue-700 text-white font-bold p-5 rounded-full shadow outline-zero mr-10 mb-10 ease-linear transition-all duration-150 hover:text-blue-700 transform hover:scale-110 z-40"
                type="button"
                onClick={() => setShowModal(true)}>

                {menuIcon}

            </button>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overscroll-contain fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg relative flex flex-col w-full bg-gray-200 outline-none focus:outline-none">
                            
                                <div className="relative p-6 flex-auto">
                                    {children}
                                </div>
                                
                            </div>
                            <div className="flex pr-10 pl-10 justify-center rounded-b mb-4">
                                        <button
                                            onClick={() => setShowModal(false)}
                                            className="flex items-center justify-center h-12 w-12 rounded-full border border-red-500 text-red-600 ease-linear transition-all duration-300 transform hover:scale-110 z-40"
                                        >
                                            {XIcon}
                                        </button>
                                    </div>        
                        </div>
                    
                    </div>
                    
                    <div className="fixed inset-0 z-40 bg-gray-200"></div>
                    
                </>
            ) : null}
        </>
    );
}