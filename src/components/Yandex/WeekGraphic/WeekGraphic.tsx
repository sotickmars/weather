import React from 'react'
import cx from 'classnames'
import { ResponsiveContainer, AreaChart, Legend, XAxis, YAxis, Area, Tooltip, CartesianGrid } from 'recharts'
import weekGraphic from './weekGraphic.module.scss'
import graphic from '../InfoBlockDay/Graphic/graphic.module.scss'

type IPropsGraphic = {
    objWeek: any,
}
const WeekGraphic: React.FC<IPropsGraphic> = ({ objWeek }) => {

    const data: any = []

    const checkHoursData = (obj: any) => {
        obj.map((items: any, index: number) => {
            data.push({
                hours: index,
                temp: items.temp,
                tempFeels: items.feels_like,
            })
        })
    }

    checkHoursData(objWeek.hours)



    const CustomTooltip = ({ active, payload, label }: {
        active: any,
        payload: any,
        label: any
    }) => {
        if (active) {
            return (
                <div className={cx(
                    graphic['tooltip']
                )}>
                    <ul className={cx(
                        graphic['tooltip__wrapper']
                    )}>
                        <li>
                            <p>Температура С°:</p><p>{payload[1].value}</p>
                        </li>
                        <li>
                            <p>Ощущаемая С°:</p><p>{payload[0].value}</p>
                        </li>
                        <li>
                            <p>Время:</p><p>{label}</p>
                        </li>
                    </ul>
                </div>
            )
        }
        return null
    }

    return (
        <div className={cx(
            weekGraphic['week-graphic']
        )}>
            {
                objWeek.hours.length !== 0 ? (
                    <ResponsiveContainer width='100%' height={200}>
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
                                    <stop offset='0%' stopColor="#fdc200" stopOpacity={0.9} />
                                    <stop offset='100%' stopColor="#fdc200" stopOpacity={0.0} />
                                </linearGradient>
                                <linearGradient id='tempFeels' x1='0' y1='0' x2='0' y2='1'>
                                    <stop offset='0%' stopColor="#e57d00" stopOpacity={0.0} />
                                    <stop offset='100%' stopColor="#e57d00" stopOpacity={0.0} />
                                </linearGradient>
                            </defs>
                            <Area dataKey={'tempFeels'} type="monotone" stroke="#e57d00" fill="url(#tempFeels)" />
                            <Area dataKey={'temp'} type="monotone" stroke="#fdc200" fill="url(#color)" />
                            <XAxis dataKey={'hours'} />
                            <YAxis
                                // dataKey={'temp'}
                                // axisLine={false}
                                tickLine={false}
                                tickCount={5}
                            />
                            <Tooltip content={<CustomTooltip active={null} payload={null} label={null} />} />
                            <CartesianGrid opacity={0.5} vertical={false} />
                        </AreaChart>
                    </ResponsiveContainer >
                ):(
                    <p>НЕТ ДАННЫХ СИМАКОВ</p>
                )
                }
            
        </div>
    )

}
export default WeekGraphic