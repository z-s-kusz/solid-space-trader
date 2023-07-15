// do a context provider that wraps the whole app here
// only for things like user and theme
// use other providers closer to where they are needed - don't throw everything in here
import { getUser } from "@/utility/local-storage";
import { createSignal, createContext, useContext } from "solid-js";

const GlobalContext = createContext<any>();

export function GlobalStateProvider(props: any) {
    console.log('global state starting');
    const storedUser = getUser();
    const [user, setUser] = createSignal(storedUser);
    const state = {
        user,
        setUser,
    };

    return (
        <GlobalContext.Provider value={state}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export function useGlobalState<T>() {
    return useContext(GlobalContext);
}
