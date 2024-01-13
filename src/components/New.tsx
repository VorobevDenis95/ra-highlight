import React from "react"

interface PropsNew {
    children?: React.ReactNode;
}

const New = ({children}: PropsNew) => {
    return(
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {children}
        </div>
    )

}

export default New;