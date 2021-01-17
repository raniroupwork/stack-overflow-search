import React, {useState} from 'react'
import 'carbon-components/css/carbon-components.min.css';
import { Modal } from 'carbon-components-react';

const HistoryModal = () => {
    const [isOpen, setOpen] = useState(true);
    return (
        <div>
           <Modal
             modalHeading="Search History"
             primaryButtonText="Search"
             secondaryButtonText="Clear History"
             open={isOpen}
             hasScrollingContent={true}
            //  onSecondarySubmit
            //  onRequestSubmit
            //  onRequestClose
           >

           </Modal>
        </div>
    )
}

export default HistoryModal