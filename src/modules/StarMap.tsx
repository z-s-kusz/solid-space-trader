import Window from '@/ui-elements/Window';
import { Component, For, createEffect, createSignal } from 'solid-js';
import { getSpaceTraders } from '@/data/space-trader-api';
import { useGlobalState } from '@/state/GlobalState';
import mapWayPoints, { ASCIIMapPointType } from '@/utility/map-waypoints';
import ASCIIMapPoint from '@/components/ASCIIMapPoint';
import LoadingSpinner from '@/ui-elements/LoadingSpinner';

const StarMap: Component = () => {
    const [loading, setLoading] = createSignal(false);
    const [system, setSystem] = createSignal<any>({});
    const [ASCIIMapPoints, setASCIIMapPoints] = createSignal<ASCIIMapPointType[]>([]);
    const { user, activeShip } = useGlobalState();

    createEffect(() => {
        if (activeShip().symbol) {
            getShipSystem(activeShip().nav.systemSymbol);
        }
    });

    createEffect(() => {
        if (system().symbol) {
            const gridPoints = mapWayPoints(system().waypoints);
            setASCIIMapPoints(gridPoints);
        }
    });

    const shipDisplay = () => {
        return activeShip().symbol ? `${activeShip().symbol}'s Sector:` : 'Select Ship to View Map';
    };

    const getShipSystem = (systemSymbol: string) => {
        setLoading(true);
        const url = 'systems/' + systemSymbol;
        getSpaceTraders(url, user().authToken)
            .then((response) => {
                setSystem(response.data.data);
            })
            .catch((error) => {
                console.log('err fetching system for map data', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    setASCIIMapPoints(mapWayPoints([]));

    return (
        <Window>
            <h1>Star Map:</h1>
            <h1>{shipDisplay()}</h1>
            <LoadingSpinner show={loading()} />

            <For each={ASCIIMapPoints()}>
                {(point) => {
                    return <ASCIIMapPoint point={point} />;
                }}
            </For>
        </Window>
    );
};

export default StarMap;
