import React, { Component } from "react";
import Link from "react-router-dom/Link";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";

//Responsive
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
// import Button from "@material-ui/core/Button";

import image1 from "../../assets/images/landing-page/alabando.jpg";
import image2 from "../../assets/images/landing-page/baile.jpg";

import "./Blog.css";

export class Blog extends Component {
  state = {
    tileData: [
      {
        id: 1,
        img: image1,
        title: "Titulo blog 1",
        author: "author"
      },
      {
        id: 2,
        img: image2,
        title: "Titulo blog 2",
        author: "author"
      },
      {
        id: 3,
        img: image1,
        title: "Titulo blog 3",
        author: "author"
      },
      {
        id: 4,
        img: image2,
        title: "Titulo blog 4",
        author: "author"
      },
      {
        id: 5,
        img: image1,
        title: "Titulo blog 5",
        author: "author"
      },
      {
        id: 6,
        img: image2,
        title: "Titulo blog 6",
        author: "author"
      }
    ]
  };

  componentDidMount() {
    if (this.props.title !== "Lista de blogs")
      this.props.changeTitle("Lista de blogs");
  }

  deleteBlog = id => {
    console.log(id);
  };
  getGridListCols = () => {
    if (isWidthUp("lg", this.props.width)) {
      return 3;
    }
    if (isWidthUp("md", this.props.width)) {
      return 2;
    }
    return 1;
  };

  render() {
    const tileData = [...this.state.tileData];
    const gridListCols = this.getGridListCols();

    return (
      <div className="blog">
        {/* <div className="blog__top">
          <h1 className="blog__title">Lista de blogs</h1>
          <div className="show-in-desktop">
            <Button variant="contained" color="primary">
              <Link className="primary-btn-link" to="/blog/agregar">
                <AddIcon /> Agregar
              </Link>
            </Button>
          </div>
        </div> */}

        {/* <div className={classes.root}> */}

        <div>
          <GridList cellHeight={200} cols={gridListCols} spacing={15}>
            <GridListTile
              key="Subheader"
              cols={gridListCols}
              style={{ height: "auto" }}
            >
              <ListSubheader component="div">December</ListSubheader>
            </GridListTile>
            {tileData.map(tile => (
              <GridListTile key={tile.id} cols={1}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>by: {tile.author}</span>}
                  actionIcon={
                    <React.Fragment>
                      <Link to={`blog/editar/${tile.id}`}>
                        <Fab
                          color="primary"
                          aria-label="Edit"
                          style={{ marginRight: "0.5rem" }}
                        >
                          <EditIcon />
                        </Fab>
                      </Link>
                      <Fab
                        color="secondary"
                        aria-label="Delete"
                        style={{ marginRight: "0.5rem" }}
                        onClick={this.deleteBlog.bind(this, tile.id)}
                      >
                        <DeleteIcon />
                      </Fab>
                    </React.Fragment>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>

        <Link className="top-right-abs" to="/blog/agregar">
          <Fab color="primary" aria-label="Add">
            <AddIcon />
          </Fab>
        </Link>
      </div>
    );
  }
}

export default withWidth()(Blog);
