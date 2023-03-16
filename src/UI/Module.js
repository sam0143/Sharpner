import { Fragment } from "react"
import { createPortal } from "react-dom"

const Module =(props)=>{

    const ModelOverlay=(props)=>{
        return(
            <div>{props.children}</div>
        )
    }

    const portalElement = document.getElementById('overlays');
    return(
        <Fragment>
            {
                createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)
            }
        </Fragment>
    )
}

export default Module