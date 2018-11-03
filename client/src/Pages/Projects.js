import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import EndGameCard from '../Cards/EndGame';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    flexGrow: 1,
    margin: '0',
    width: '100%',
    marginTop: "100px",
    marginBottom: "100px"
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
 
}

let ProjectItems = [
  {
    id: 1,
    img: "../assets/images/endGame",
    title: "End Game",
    description: "EndGame is a directional App with the Aim at helping users find the best location that is equidistant for a group to meet.",
    demo: "https://endgame2.herokuapp.com/",
    gitHub: "https://github.com/snavdeepsingh/EndGame"
  },
  {
    id: 2,
    img: "../assets/images/squawker",
    title: "Squawker",
    description: "Take a picture of any bird to find out what bird it is. The picture is then stored in a database to be used in various aspects of Ornithology ",
    demo: "https://pacific-tundra-22064.herokuapp.com/",
    gitHub: "https://github.com/mattrmc1/squawker"
  },
  {
    id: 3,
    img: "../assets/images/react-mario-game",
    title: "react-Mario-Game",
    description: "Memory game built with React.js. Application renders different images. Each image listens to click events. It keeps a track of user's score.",
    demo: "https://secure-savannah-37337.herokuapp.com/",
    gitHub: "https://github.com/snavdeepsingh/React-Mario-Game"
  },
  {
    id: 4,
    img: "../assets/images/Bamazon",
    title: "Bamazon",
    description: "An interactive node app where mysql and node.js is used to create a user experience who can view and place an order as a customer.",
    demo: "https://drive.google.com/file/d/1C4faW8WYyA9FQTsNwFVI6j8ESfIUtIsg/view",
    gitHub: "https://github.com/snavdeepsingh/Bamazon"
  },
  {
    id: 5,
    img: "../assets/images/nodejs",
    title: "CLI App",
    description: "This node.js app receives input from the command line and fetches data from the specified API.",
    demo: "https://drive.google.com/file/d/1Q6hbQZUNILZAyCIUyEiIaNQIiedBXcq5/view",
    gitHub: "https://github.com/snavdeepsingh/liri-node-app"
  },
 
]

const Projects = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root} style={{backgroundColor: "#fbf8e7"}}>
      <h1 style={{color:"#777777"}}>Projects</h1>
      
      <Grid container spacing={24} >
       {ProjectItems.map(item =>
          <Grid item xs={12} sm={4} className={classes.gridItem}>
            <EndGameCard 
            id={item.id}
            img={item.img}
            title={item.title}
            alt={item.title}
            description={item.description}
            demo={item.demo}
            gitHub={item.gitHub} />
          </Grid>
      )}
        
      </Grid>
    </div>
  )
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
