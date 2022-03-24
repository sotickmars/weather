import React from "react";
import cx from 'classnames'
import graphic from './graphic.module.scss'

const Graphic: React.FC= () =>{

    return(
        <div className={cx(
            graphic['graphic']
        )}>
            GRAPHIC
        </div>
    )
}
export default Graphic;