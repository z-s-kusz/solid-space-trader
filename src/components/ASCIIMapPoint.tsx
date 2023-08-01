import { ASCIIMapPointType } from '@/utility/map-waypoints';
import { Component } from 'solid-js';

interface props {
    point: ASCIIMapPointType;
}

const ASCIIMapPoint: Component<props> = (props) => {
    if (props.point.char === '\n') {
        return <br />;
    }

    return (
        <span class={props.point.char ? 'text-blue-500' : ''}>
            {props.point.char}
        </span>
    );
};

export default ASCIIMapPoint;
