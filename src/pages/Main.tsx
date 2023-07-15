import ServerStatus from '@/modules/ServerStatus';
import ShipList from '@/modules/ShipList';
import StarMap from '@/modules/StarMap';
import { Component } from 'solid-js';

const Main: Component = () => {
    return (
        <main>
            <ServerStatus />
            <StarMap />
            <ShipList />
        </main>
    );
};

export default Main;
