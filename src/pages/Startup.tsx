import { Component, Show, createSignal } from 'solid-js';
import { registerUser } from '@/data/space-trader-api';
import { useGlobalState } from '@/state/GlobalState';
import { storeUser } from '@/utility/local-storage';

const Startup: Component = () => {
    const { user, setUser } = useGlobalState();
    const [userName, setUserName] = createSignal('');
    const [loading, setLoading] = createSignal(false);
    const [error, setError] = createSignal('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (loading()) return;

        setLoading(true);

        registerUser(userName())
            .then((response) => {
                const newUser = {
                    name: response.data.data.agent.symbol,
                    authToken: response.data.data.token,
                };
                setUser(newUser);
                storeUser(newUser.name, newUser.authToken);
                setError('');
            })
            .catch((error) => {
                console.log('error', error);
                setError('I dunno, check the console or try again.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Show when={error()}>
                <div class="error">{error()}</div>
            </Show>
            {loading() && <div>loading...</div>}
            <label for="username">
                Username
                <input
                    class="input input-bordered input-primary"
                    value={userName()}
                    onInput={(event) => setUserName(event.target.value)}
                />
            </label>
            <button type="submit" class="btn">
                Submit
            </button>
        </form>
    );
};

export default Startup;
