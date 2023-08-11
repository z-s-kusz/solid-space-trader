import { Component, Show } from 'solid-js';

interface Props {
    contract: any;
    refetchContracts: () => void; // not sure bout this as a type
}

const ContractControls: Component<Props> = (props) => {
    const contractAvailable = !props.contract.accepted && !props.contract.fulfilled;

    console.log(props.contract);
    const acceptContract = () => {
        console.log('accepting contract for', props.contract);
        // make call to accept then refetch
        props.refetchContracts();
    };

    return (
        <div class="flex flex-row">
            <Show when={contractAvailable}>
                <button type="button" class="btn btn-primary btn-outline btn-sm" onClick={acceptContract}>
                    Accept
                </button>
            </Show>
        </div>
    );
};

export default ContractControls;
