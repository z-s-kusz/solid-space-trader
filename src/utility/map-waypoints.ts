export type WayPoint = {
    symbol: string;
    type: string;
    x: number;
    y: number;
}

export type ASCIIMapPointType = {
    x: number;
    y: number;
    i: number;
    char: string;
    waypoints: WayPoint[];
};

export default function mapWayPoints(waypoints: WayPoint[]) {
    const STGridRange = 200;
    const gridSize = 9 * 32;
    let grid: ASCIIMapPointType[] = [];

    // starting at 1 to make math easier... in some ways ... i think... maybe it was easier
    for (let i = 1; i < gridSize + 1; i++) {
        const point = {
            x: i % 32,
            y: i % 32 === 0 ? (i / 32) - 1 : Math.floor(i / 32),
            i: i - 1,
            char: '',
            waypoints: [],
        };

        if (i % 32 === 0) point.char = '\n';
        else point.char = '-';

        grid.push(point);
    }

    waypoints.forEach((waypoint) => {
        const positiveX = waypoint.x + STGridRange / 2;
        const positiveY = waypoint.y + STGridRange / 2;
        // 30 = (0 indexed width<31>) - 1 so the newline chars are skipped
        const finalXCord = Math.round((positiveX / STGridRange) * 30);
        const finalYCord = Math.round((positiveY / STGridRange) * 8);

        grid.find((point) => {
            if (point.x === finalXCord && point.y === finalYCord) {
                point.waypoints.push(waypoint);
                point.char = 'o';
                return true;
            }
            return false;
        });
    });

    return grid;
}
