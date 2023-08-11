import { Component, Show } from 'solid-js';

interface Props {
    contract: any;
    refetchContracts: () => void; // not sure bout this as a type
    toggleDetails: (contract: any) => void;
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
            <button type="button" class="btn btn-outline btn-sm" onclick={() => props.toggleDetails(props.contract)}>
                Details
            </button>
        </div>
    );
};

export default ContractControls;
