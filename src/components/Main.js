import React, { useState } from 'react';
import { Tool } from './Tool';

function Main({ info }) {
    const [sortMethod, setSortMethod] = useState(null);

    function sortHandler(target) {
        function ASC(a, b) {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        }

        function DESC(a, b) {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
        }

        setSortMethod(target);
        info.sort(target === 'ASC' ? ASC : DESC);
    }

    return (
        <main>
            <div className="navigation">
                <span>
                    Tool name
                    <i onClick={sortHandler.bind(this, 'ASC')} style={{color: (sortMethod === 'ASC') ? 'green' : 'silver'}} className="fas fa-sort-up"></i>
                    <i onClick={sortHandler.bind(this, 'DESC')} style={{color: (sortMethod === 'DESC' ? 'green' : 'silver')}} className="fas fa-sort-up"></i>
                </span>
                <span>Used on</span>
                <span>Type</span>
                <span>Status</span>
            </div>
            { !info.length ? <h3 id="error">Not found</h3> : info.map(item => <Tool key={item.id} {...item} />) }
        </main>
    )
}

export default React.memo(Main, (prevProps, nextProps) => {
    if (nextProps.info.length === prevProps.info.length) {
        let isExist = true;

        for (let item of nextProps.info) {
            if (!prevProps.info.find(el => el.name === item.name)) isExist = false;
        }

        return isExist;
    }
});