import { createMemo, type Component } from 'solid-js';

import styles from './App.module.css';
import AppRouter from './AppRouter';
import { A } from '@solidjs/router';
import { useGlobalState } from './state/GlobalState';

const App: Component = () => {
  const { user } = useGlobalState();
  const currentUser = createMemo(() => {
    return user().name ?? 'NONE';
  })
  return (
    <>
      <h1>Current User: {currentUser()}</h1>
      <AppRouter />
      <footer class="btm-nav">
        <A href='/startup'>Start New Run</A>
        <A href='/'>Main Modules</A>
      </footer>
    </>
  );
};

export default App;
