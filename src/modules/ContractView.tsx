import ContractControls from '@/components/ContractControls';
import { getSpaceTraders } from '@/data/space-trader-api';
import { useGlobalState } from '@/state/GlobalState';
import LoadingSpinner from '@/ui-elements/LoadingSpinner';
import Window from '@/ui-elements/Window';
import { Component, Show, createSignal } from 'solid-js';

const ContractView: Component = () => {
    const { user } = useGlobalState();
    const [loading, setLoading] = createSignal(false);
    const [contracts, setContracts] = createSignal<any[]>([]);

    const getContracts = () => {
        setLoading(true);
        const url = 'my/contracts';

        getSpaceTraders(url, user().authToken)
            .then((response) => {
                const data = response.data.data.map((contract: any) => {
                    contract.showDetails = false;
                    return contract;
                });
                setContracts(data);
            })
            .catch((error) => {
                setContracts([]);
                console.error('error getting contracts', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const toggleDetails = (toggledContract: any) => {
        const nextContracts = contracts().map((contract) => {
            if (contract.id === toggledContract.id) {
                contract.showDetails = !contract.showDetails;
            }
            return contract;
        });
        setContracts(nextContracts);
    };

    getContracts();

    return (
        <Window>
            <h1>Contracts:</h1>
            <LoadingSpinner show={loading()} />
            <table class="table table-zebra">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <For /> was unable to detect differences when I set contracts() with a BRAND NEW ARRAY
                    was unable to set a key to tell it to differentiate, not sure why it never triggered rerendering */}
                    {contracts().map((contract) => {
                        console.log('contract rendering my way');
                        return (
                            <>
                                <tr>
                                    <td>{contract.type}</td>
                                    <td>{contract.accepted ? 'Accepted' : 'Available'}</td>
                                    <td>
                                        <ContractControls
                                            contract={contract}
                                            refetchContracts={getContracts}
                                            toggleDetails={toggleDetails}
                                        />
                                    </td>
                                </tr>
                                <Show when={contract.showDetails}>
                                    <div>I'm contract details, which is a sub array and will get a new component!</div>
                                </Show>
                            </>
                        );
                    })}
                </tbody>
            </table>
        </Window>
    );
};

export default ContractView;
