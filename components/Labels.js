import React from 'react'

const labelsObj = [
    {
        type: 'Income',
        color: 'w-2 h-5 bg-green-700 rounded-full',
        value: '50%'
    },
    {
        type: 'Expense',
        color: 'w-2 h-5 bg-blue-700 rounded-full',
        value: "25%"
    },
    {
        type: 'Savings',
        color: 'w-2 h-5 bg-slate-500 rounded-full',
        value: '25%'
    }
]

function Label({data}) {
    return (
        <div className='flex justify-between pt-5'>
            <div>
                <div className='flex gap-2'>
                    <div className={data.color}></div>
                    <h1>{data.type}</h1>
                </div>
            </div>
            <div className='font-bold'>
                <h1>{data.value}</h1>
            </div>
        </div>
    )
}

export default function Labels() {
    return (
        <div>
            {labelsObj.map((value, index) => <Label key={index} data={value}></Label>)}
        </div>
    )
}