import React from "react";
import {Button} from 'semantic-ui-react'

export default class FareRulesButton extends React.Component {
    handleClick = () => {
        var content = document.getElementById('farerules')
        if (content.style.display == 'block') {
            content.style.display = 'none'
        } else {
            content.style.display = 'block'
        }        // document.getElementById("multiselect-specification");
    }

    render() {
        return <Button onClick={this.handleClick} className="ui button">GTFS-Pathways</Button>
    }
}

