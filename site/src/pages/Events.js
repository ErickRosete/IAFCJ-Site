import React, { Component } from 'react'
import Newsletter from "../containers/Newsletter/Newsletter"

export class EventsPage extends Component {
    render() {
        return (
            <div className="events">
                <h1>I am an Events page</h1>
                <Newsletter></Newsletter>
            </div>
        )
    }
}

export default EventsPage
