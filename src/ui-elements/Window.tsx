import { ParentComponent } from 'solid-js';

const Window: ParentComponent = (props) => {
    return <section class="border-2 border-cyan-500 rounded p-4 m-2 relative">{props.children}</section>;
};

export default Window;
