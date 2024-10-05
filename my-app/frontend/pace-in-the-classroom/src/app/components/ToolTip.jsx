import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { FaInfoCircle } from 'react-icons/fa'; // Import the info icon from react-icons

const ToolTip = ({ message }) => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Image Info</Popover.Header>
            <Popover.Body>
                {message}
            </Popover.Body>
        </Popover>
    );

    return (
        <OverlayTrigger trigger="click" placement="left" overlay={popover}>
            <Button className="z-40 absolute top-10 right-3 bg-neutral-800/30">
                <FaInfoCircle /> {/* Render the info icon here */}
            </Button>
        </OverlayTrigger>
    );
};

export default ToolTip;