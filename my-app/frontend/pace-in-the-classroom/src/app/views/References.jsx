import React, { useEffect, useState } from 'react';
import Tooltip from '../components/ToolTip';
import BarLoader from '../components/BarLoader';

export function Component() {
    return (
        <div>
            <BarLoader />
            <Tooltip />
        </div>
    );
}

Component.displayName = "ReferencesPage";