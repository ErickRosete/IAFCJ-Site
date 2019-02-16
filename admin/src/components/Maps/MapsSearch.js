import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import Marker from "./Marker";
import GoogleMapReact from "google-map-react";
import PlacesAutocomplete from "react-places-autocomplete";

const styles = theme => ({
  map: { height: "40vh", width: "100%" },
  search: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  textField: {
    flex: 1
  },
  iconButton: {
    padding: 10
  }
});

const MapsSearch = props => {
  const classes = props.classes;

  return (
    <React.Fragment>
      <PlacesAutocomplete
        value={props.googlemaps}
        onChange={props.onChange}
        onSelect={props.onSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <div className={classes.search}>
              <FormControl
                fullWidth
                required
                error={props.googlemaps === ""}
                className={classes.textField}
              >
                <InputLabel htmlFor="googlemaps">Mapa de google</InputLabel>
                <Input
                  id="googlemaps"
                  {...getInputProps({
                    placeholder: "Buscar mapa de google...",
                    className: "location-search-input"
                  })}
                />
                <FormHelperText id="my-helper-text">
                  {props.googlemaps === "" ? "Valor Requerido" : ""}
                </FormHelperText>
              </FormControl>

              <IconButton
                onClick={props.onSearch}
                className={classes.iconButton}
                aria-label="Search"
              >
                <SearchIcon />
              </IconButton>
            </div>

            <div className="autocomplete-dropdown-container">
              {loading && <div>Cargando...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      <div className={classes.map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: props.apiKey }}
          center={[props.coords.lat, props.coords.lng]}
          defaultZoom={17}
        >
          <Marker {...props.coords} />
        </GoogleMapReact>
      </div>
    </React.Fragment>
  );
};

MapsSearch.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MapsSearch);
