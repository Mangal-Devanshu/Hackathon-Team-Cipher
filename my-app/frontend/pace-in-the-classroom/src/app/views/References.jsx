import React, { useEffect, useState } from 'react';
import Accordian from '../components/Accordian';
import ToolTip from '../components/ToolTip';

export function Component() {
    return (
        <div class="bg-black">
            {/* <Accordian /> */}
            <ToolTip text="Hello, World!!!" />
        </div>
    );
}

Component.displayName = "ReferencesPage";