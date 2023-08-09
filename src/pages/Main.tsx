import ContractView from '@/modules/ContractView';
import ServerStatus from '@/modules/ServerStatus';
import ShipList from '@/modules/ShipList';
import StarMap from '@/modules/StarMap';
import { Component } from 'solid-js';

const Main: Component = () => {
    return (
        <main>
            <ServerStatus />

            <ShipList />
            <StarMap />

            <ContractView />
        </main>
    );
};

export default Main;
