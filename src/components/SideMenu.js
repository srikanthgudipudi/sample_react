import React from 'react'
import { ButtonGroup, Button } from '@material-ui/core'

const SideMenu = () => {
    return (
        <div className="side-menu">
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="text"
            >
                <Button>Forms</Button>
                <Button>Supplier Incentive Search Form</Button>
                <Button>Tracking Form</Button>
                <Button>Member Search Form</Button>
                <Button>Excell File Processing</Button>
            </ButtonGroup>
        </div>
    )
}

export default SideMenu
