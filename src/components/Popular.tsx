import React from "react"

interface PropsPopular {
    children?: React.ReactNode;
}

const Popular = ({children}: PropsPopular) => {
    return(
        <div className="wrap-item wrap-item-popular">
        <span className="label">Popular</span>
        {children}
        </div>
    )

}

export default Popular;