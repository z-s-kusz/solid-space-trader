import Window from '@/ui-elements/Window';
import { Component, createSignal } from 'solid-js';
import { getSpaceTraders } from '@/data/space-trader-api';
import { useGlobalState } from '@/state/GlobalState';

const StarMap: Component = () => {
    const [loading, setLoading] = createSignal(false);
    const { user } = useGlobalState();

    const getMainShipLocal = () => {
        getSpaceTraders('my/agent', user().authToken)
            .then((response) => {
                console.log('response o map 1st get', response);
            })
            .catch((error) => {
                console.log('err fetching for map data');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // getMainShipLocal();

    const mapString = `
    ------------------------------
    ------------------------------
    ------------------------------
    ------------------------------
    ------------------------------
    ------------------------------
    ------------------------------
    ------------------------------
    `;
    return (
        <Window>
            <h1>Star Map:</h1>
            {loading() && <div>loading...</div>}
            <pre>{mapString}</pre>
        </Window>
    );
};

export default StarMap;
