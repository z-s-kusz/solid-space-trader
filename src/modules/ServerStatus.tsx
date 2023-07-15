import { getSTStatus } from '@/data/space-trader-api';
import Window from '@/ui-elements/Window';
import { createSignal } from 'solid-js';

const ServerStatus = () => {
    const [loading, setLoading] = createSignal(false);
    const [data, setData] = createSignal<any>({});

    const nextReset = () => {
        if (data().serverResets) {
            return new Date(data().serverResets.next).toDateString();
        }
        return 'unknown';
    };

    const getStatus = () => {
        setLoading(true);

        getSTStatus().then((response) => {
            setData(response.data);
            setLoading(false);
        });
    };

    getStatus();

    return (
        <Window>
            {loading() ? (
                <p>loading...</p>
            ) : (
                <>
                    <h1>Status: {data().status}</h1>
                    <h1>Next Reset: {nextReset()}</h1>
                    <h1></h1>
                </>
            )}
        </Window>
    );
};

export default ServerStatus;
