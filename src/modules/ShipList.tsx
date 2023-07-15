import { getSpaceTraders } from '@/data/space-trader-api';
import { useGlobalState } from '@/state/GlobalState';
import Window from '@/ui-elements/Window';
import { Component, For, createSignal } from 'solid-js';

const ShipList: Component = () => {
    const { user } = useGlobalState();
    const [ships, setShips] = createSignal([]);
    const [loading, setLoading] = createSignal(false);

    const getShipsList = () => {
        setLoading(true);
        getSpaceTraders('my/ships', user().authToken)
            .then((response) => {
                console.log('ships', response.data.data);
                setShips(response.data.data);
            })
            .catch((error) => {
                console.log('err getting my ships', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    getShipsList();

    return (
        <Window>
            {loading() && <p>loading...</p>}
            <h1>Ships:</h1>
            <ul>
                <For each={ships()}>
                    {(ship: any) => (
                        <li class="flex">
                            <p>
                                {ship.registration.name},{' '}
                                {ship.registration.role}
                            </p>
                            <p class="px-8">|</p>
                            <p>
                                {ship.nav.systemSymbol},{' '}
                                {ship.nav.waypointSymbol}
                            </p>
                        </li>
                    )}
                </For>
            </ul>
        </Window>
    );
};

export default ShipList;
