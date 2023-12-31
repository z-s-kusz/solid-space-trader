import { getSpaceTraders } from '@/data/space-trader-api';
import { useGlobalState } from '@/state/GlobalState';
import LoadingSpinner from '@/ui-elements/LoadingSpinner';
import Window from '@/ui-elements/Window';
import { Component, For, createSignal } from 'solid-js';

const ShipList: Component = () => {
    const { user, setActiveShip } = useGlobalState();
    const [ships, setShips] = createSignal([]);
    const [loading, setLoading] = createSignal(false);

    const getShipsList = () => {
        setLoading(true);
        getSpaceTraders('my/ships', user().authToken)
            .then((response) => {
                setShips(response.data.data);
            })
            .catch((error) => {
                console.log('err getting my ships', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleShipClick = (ship: any) => {
        setActiveShip(ship);
    };

    getShipsList();

    return (
        <Window>
            <h1>Ships:</h1>
            <LoadingSpinner show={loading()} />
            <table class="table table-zebra">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>System</th>
                        <th>Waypoint</th>
                    </tr>
                </thead>
                <tbody>
                    <For each={ships()}>
                        {(ship: any) => (
                            <tr onClick={() => handleShipClick(ship)}>
                                <td>{ship.symbol}</td>
                                <td>{ship.registration.role}</td>
                                <td>{ship.nav.systemSymbol}</td>
                                <td>{ship.nav.waypointSymbol}</td>
                            </tr>
                        )}
                    </For>
                </tbody>
            </table>
        </Window>
    );
};

export default ShipList;
