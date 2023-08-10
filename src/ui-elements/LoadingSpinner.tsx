import { Component, Show, createEffect } from 'solid-js';
import { Transition } from 'solid-transition-group';

interface Props {
    show: boolean;
}

// needs a parent with position:relative, <Window /> has it
const LoadingSpinner: Component<Props> = (props) => {
    return (
        <Transition name="loading">
            <Show when={props.show}>
                <span class="loading loading-ring loading-lg absolute top-4 right-4"></span>
            </Show>
        </Transition>
    );
};

export default LoadingSpinner;
