import { getSpaceTraders } from '@/data/space-trader-api';
import { useGlobalState } from '@/state/GlobalState';
import LoadingSpinner from '@/ui-elements/LoadingSpinner';
import Window from '@/ui-elements/Window';
import { Component, For, createEffect, createSignal } from 'solid-js';

const ContractView: Component = () => {
    const { user } = useGlobalState();
    const [loading, setLoading] = createSignal(false);
    const [contracts, setContracts] = createSignal<any[]>([]);

    const getContracts = () => {
        setLoading(true);
        const url = 'my/contracts';

        getSpaceTraders(url, user().authToken)
            .then((response) => {
                console.log('response', response.data);
                setContracts(response.data.data);
            })
            .catch((error) => {
                setContracts([]);
                console.error('error getting contracts', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    getContracts();

    return (
        <Window>
            {loading() && <LoadingSpinner />}
            <h1>Contracts:</h1>
            <table class="table table-zebra">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <For each={contracts()}>
                        {(contract) => (
                            <tr>
                                <td>{contract.type}</td>
                                <td>{contract.accepted ? 'Accepted' : 'Available'}</td>
                            </tr>
                        )}
                    </For>
                </tbody>
            </table>
        </Window>
    );
};

export default ContractView;
