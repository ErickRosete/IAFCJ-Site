import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import Marker from './Marker'
import GoogleMapReact from 'google-map-react';

const styles = theme => ({
    map: { height: '50vh', width: '100%' },
    search: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    textField: {
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
});

const MapsSearch = (props) => {
    const classes = props.classes;

    return (
        <React.Fragment>
            <div className={classes.search}>
                <TextField
                    required
                    margin="dense"
                    label="Dirección"
                    type="text"
                    className={classes.textField}
                    value={props.address}
                    onChange={props.onChange}
                    error={props.address === ""}
                    helperText={props.address === "" ? "Valor Requerido" : ""}>
                </TextField>
                <IconButton
                    onClick={props.onSearch}
                    className={classes.iconButton} aria-label="Search">
                    <SearchIcon />
                </IconButton>
            </div>

            <div className={classes.map}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: props.apiKey }}
                    center={[props.coords.lat, props.coords.lng]}
                    defaultZoom={15} >
                    <Marker {...props.coords}>
                    </Marker>
                </GoogleMapReact>
            </div>
        </React.Fragment>)
}

MapsSearch.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MapsSearch);