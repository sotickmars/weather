import React from "react";
import cx from 'classnames'
import weekGraphic from './weekGraphic.module.scss'

type IPropsWeekGraphic = {
    objWeekDay:any
    checkWeekDayIndex: number | null
}

const WeekGraphic: React.FC<IPropsWeekGraphic> = ({ objWeekDay, checkWeekDayIndex }) =>{
    
    const foo = () =>{
        if (checkWeekDayIndex !== null){
            const temp = {
                maxTemp: objWeekDay[checkWeekDayIndex].parts.day.temp_max,
                minTemp: objWeekDay[checkWeekDayIndex].parts.day.temp_min,
            }
            return temp
        }
    }
    
return (
    <div className={cx(
        weekGraphic['week-graphic']
    )}>
        {foo()?.maxTemp}
        {foo()?.minTemp}
    </div>
)
}

export default WeekGraphic