import React from "react";
import cx from 'classnames';
import { ResponsiveContainer, AreaChart, Legend, XAxis, YAxis, Area, Tooltip, CartesianGrid } from 'recharts'
import CloudnessDay from '../../CloudnessDay/CloudnessDay'
import graphic from './graphic.module.scss'

type IPropsGraphic = {
    dataWhether: any,
    index?: number
}

const Graphic: React.FC<IPropsGraphic> = ({ dataWhether }) => {

    const data: any = []

    const checkHoursData = (obj: any) => {
        obj.map((items: any) => {
            data.push({
                hours: items.hour,
                temp: items.temp,
                tempFeels: items.feels_like,
            })
        })
    }

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

    checkHoursData(dataWhether.forecasts[0].hours)

    return (
        <div className={cx(
            graphic['graphic']
        )}>
            <p className={cx(
                graphic['graphic__title']
            )}>График погоды на сутки:</p>
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
                        tickLine={false}
                        tickCount={5}
                    />
                    <Tooltip content={<CustomTooltip active={null} payload={null} label={null} />} />
                    <CartesianGrid opacity={0.5} vertical={false} />
                </AreaChart>
            </ResponsiveContainer >
            <CloudnessDay obj={dataWhether.forecasts[0].hours} />
        </div>
    )
}
export default Graphic;