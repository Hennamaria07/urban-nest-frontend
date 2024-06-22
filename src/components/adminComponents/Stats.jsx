import React from 'react'
import { Card } from '../ui/card'

const Stats = ({ data, title}) => {
    return (
        data &&
        <Card className="grid gap-4 p-5 place-items-center border-[#DA4444] border-2 hover:scale-105 transition-all delay-150 ease-in-out dark:bg-[#DA4444]">
            <div className="uppercase font-semibold">{title}</div>
            <div className="text-2xl font-semibold">{data}</div>
        </Card>
    )
}

export default Stats
