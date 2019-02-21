import React, { Component } from "react";
import Layout from "../../containers/Layout/Layout";

import "./Networks.css";
//styles
import { styles } from "./constants";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import FormDialog from "../../containers/Networks/FormDialog";

//graphql
import { Query, Mutation } from "react-apollo";
import Spinner from "../../components/Spinner/Spinner";
import { EDIT_NETWORK, GET_NETWORKS } from "./constants";

export class NetworksPage extends Component {
  state = {
    openEditDialog: false,
    filter: "",
    selectedNetwork: { _id: "" }
  };

  handleClickOpenEditDialog = network => {
    this.setState({
      selectedNetwork: network,
      openEditDialog: true
    });
  };

  handleCloseEditDialog = () => {
    this.setState({ openEditDialog: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <Layout title="Lista de redes">
        <div className={classes.networks}>
          {/* GET */}
          <Query query={GET_NETWORKS}>
            {({ loading, error, data }) => {
              if (loading) return <Spinner />;
              if (error) return <p>Error :( Intenta recargar la página</p>;

              return (
                <div>
                  {data.networks.map(network => {
                    return (
                      <div className="network__card" key={network._id}>
                        <div className="network__card-img-container">
                          <img src={network.imageLink} alt={network.leader} />
                        </div>
                        <div className="network__card-info"> 
                          <h2>{network.name}</h2>
                          <p>{network.leader}</p>
                        </div>
                        <Button
                          variant="contained"
                          color="primary"
                          aria-label="Edit"
                          className={classes.button}
                          onClick={this.handleClickOpenEditDialog.bind(
                            this,
                            network
                          )}
                        >
                          Editar
                          <EditIcon className={classes.rightIcon} />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              );
            }}
          </Query>

          {/* EDIT */}
          <Mutation mutation={EDIT_NETWORK}>
            {updateNetwork => (
              <FormDialog
                key={this.state.selectedNetwork._id}
                network={this.state.selectedNetwork}
                open={this.state.openEditDialog}
                onConfirm={network => {
                  updateNetwork({
                    variables: { ...network }
                  });
                  this.setState({
                    openEditDialog: false
                  });
                }}
                onCancel={this.handleCloseEditDialog}
              />
            )}
          </Mutation>
        </div>
      </Layout>
    );
  }
}

NetworksPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NetworksPage);
