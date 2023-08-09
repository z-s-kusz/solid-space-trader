import ContractView from '@/modules/ContractView';
import ServerStatus from '@/modules/ServerStatus';
import ShipList from '@/modules/ShipList';
import StarMap from '@/modules/StarMap';
import { Component } from 'solid-js';

const Main: Component = () => {
    return (
        <main class="grid grid-cols-2">
            <div class="col-span-2">
                <ServerStatus />
            </div>

            <ShipList />
            <StarMap />

            <ContractView />
        </main>
    );
};

export default Main;
