import { ASCIIMapPointType } from '@/utility/map-waypoints';
import { Component } from 'solid-js';

interface props {
    point: ASCIIMapPointType;
}

const ASCIIMapPoint: Component<props> = (props) => {
    const pointHasDestinations = props.point.char === 'o';
    // soooo cool, can call tooltipData inline and it fires once,
    // no need for memoization cuz we are not re-rendering react stlye!!!
    const tooltipData = () => {
        if (pointHasDestinations) {
            const waypoints = props.point.waypoints;
            return waypoints.length === 1
                ? `${waypoints[0].type} : ${waypoints[0].symbol}`
                : `${waypoints.length} Waypoints`;
        }
        return '';
    };

    const onWaypointClick = () => {
        console.log('clicked', props.point);
    };

    if (props.point.char === '\n') {
        return <br />;
    }

    return (
        <div class={pointHasDestinations ? 'tooltip' : 'null-tooltip'} data-tip={tooltipData()}>
            <span class={pointHasDestinations ? 'text-blue-500' : ''} onClick={onWaypointClick}>
                {props.point.char}
            </span>
        </div>
    );
};

export default ASCIIMapPoint;
