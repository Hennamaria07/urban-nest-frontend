import React, { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const AreaGraph = ({data}) => {
    const gradientOffset = () => {
        const dataMax = Math.max(...data.map((i) => i.uv));
        const dataMin = Math.min(...data.map((i) => i.uv));

        if (dataMax <= 0) {
            return 0;
        }
        if (dataMin >= 0) {
            return 1;
        }

        return dataMax / (dataMax - dataMin);
    };
    const off = useMemo(() => gradientOffset(), []);

    return (
        <AreaChart
        width={500}
        height={300}
        data={data}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <defs>
                <linearGradient id="splitColor" x1="0" y1={0} x2="0" y2={1}>
                    <stop offset={off} stopColor="green" stopOpacity={1} />
                    <stop offset={off} stopColor="red" stopOpacity={1} />
                </linearGradient>
            </defs>
            <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
        </AreaChart>
    );
};

export default AreaGraph;