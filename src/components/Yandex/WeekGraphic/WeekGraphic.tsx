import React, { useState } from "react";
import cx from 'classnames'
import weekGraphic from './weekGraphic.module.scss'

type IPropsWeekGraphic = {
    objWeekDay:any
    indexWeek:number
}

const WeekGraphic: React.FC<IPropsWeekGraphic> = ({ objWeekDay, indexWeek }) =>{
   
    const getTemp = () =>{
        
            const temp = {
                maxTemp: objWeekDay[indexWeek].parts.day.temp_max,
                minTemp: objWeekDay[indexWeek].parts.day.temp_min,
            }
            return temp
        
    }
    
return (
    <div className={cx(
        weekGraphic['week-graphic']
    )}>
        {getTemp()?.maxTemp}
        {getTemp()?.minTemp}
    </div>
)
}

export default WeekGraphic