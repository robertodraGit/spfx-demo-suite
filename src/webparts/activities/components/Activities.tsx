import * as React from "react";
import {FC} from "react";
import {IActivitiesProps} from './IActivitiesProps';
import {DefaultButton, PrimaryButton} from '@fluentui/react';
import {DonutChart, IChartProps} from '@fluentui/react-charting';


const Activities: FC<IActivitiesProps> = (props) => {
    const chartData = [
        {legend: 'first', data: 40, color: "#000"},
        {legend: 'second', data: 20, color: "#222"},
        {legend: 'third', data: 30, color: "#444"},
        {legend: 'fourth', data: 10, color: "#666"},
    ];

    const data: IChartProps = {
        chartTitle: 'Donut chart example',
        chartData: chartData,
    };

    return (
        <div className="ms-Grid" dir="ltr">
            <DefaultButton text="siuuuuuuuuu"/>
            <PrimaryButton text="sium"/>
            <DonutChart chartLabel="sium" data={data} innerRadius={55} />
        </div>
    );
};

export default Activities;