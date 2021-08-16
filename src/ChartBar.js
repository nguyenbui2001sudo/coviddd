import React from 'react'
import { Bar } from "react-chartjs-2";
const ChartBar =  ({a,chart,covidDay}) => {
    const vietNam = {...a};
    const speadChart = {...chart};
    return (
        <>

            {
                chart.length === 0 ?  
                <Bar
                    data={{
                    labels: [
                        "Tổng Số Ca Trên Cả Nước",
                            "Số Ca Nhiễm Hôm Nay",
                            "Số Ca Nhiễm Hôm Qua",
                            "Số Ca Chữa Khỏi",
                        ],
                        datasets: [
                            {
                            label: "Tổng Số Ca Trên Cả Nước",
                            backgroundColor: [
                                "#3e95cd",
                                "red",
                                "#8e5ea2",
                                "#3cba9f",
                            ],
                            data: [vietNam[2], covidDay.today[1],covidDay.yesterday[1], vietNam[3]]
                        }
                    ]
                    }}
                    option={{
                    title: {
                        display: true,
                        text: "Predicted world population (millions) in 2050"
                    }
                    }}
                /> : 
                <Bar
                    data={{
                    labels: [
                        "Tổng Ca Nhiễm",
                        "Số Ca Nhiễm Mới",
                        "Vắc xin đã tiêm",
                    ],
                    datasets: [
                        {
                        label: "Tổng Ca Nhiễm",
                        backgroundColor: [
                            "#3e95cd",
                            "#8e5ea2",
                            "#3cba9f",
                        ],
                        data: [speadChart[2], speadChart[3], speadChart[4]]
                        }
                    ]
                    }}
                    option={{
                    title: {
                        display: true,
                        text: "Predicted world population (millions) in 2050"
                    }
                    }}
                />

            }
        </>   
    )
}

export default ChartBar
