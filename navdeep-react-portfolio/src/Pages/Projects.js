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
    img: "../assets/images/endGame.png",
    title: "End Game",
    description: "EndGame is a directional App with the Aim at helping users find the best location that is equidistant for a group to meet.",
    demo: "https://endgame2.herokuapp.com/",
    gitHub: "https://github.com/snavdeepsingh/EndGame"
  },
  {
    id: 2,
    img: "../assets/images/squawker.png",
    title: "Squawker",
    description: "Take a picture of any bird to find out what bird it is. The location where the picture was taken is then stored in a database to be used in various aspects of Ornithology such as habitat and migration patterns",
    demo: "https://pacific-tundra-22064.herokuapp.com/",
    gitHub: "https://github.com/mattrmc1/squawker"
  },
  {
    id: 3,
    img: "../assets/images/navdeep.jpg",
    title: "End Game",
    description: "EndGame is a directional App with the Aim at helping users find the best location that is equidistant for a group to meet.",
    demo: "https://endgame2.herokuapp.com/",
    gitHub: "https://github.com/snavdeepsingh/EndGame"
  },
  {
    id: 4,
    img: "../assets/images/navdeep.jpg",
    title: "End Game",
    description: "EndGame is a directional App with the Aim at helping users find the best location that is equidistant for a group to meet.",
    demo: "https://endgame2.herokuapp.com/",
    gitHub: "https://github.com/snavdeepsingh/EndGame"
  },
  {
    id: 5,
    img: "../assets/images/navdeep.jpg",
    title: "End Game",
    description: "EndGame is a directional App with the Aim at helping users find the best location that is equidistant for a group to meet.",
    demo: "https://endgame2.herokuapp.com/",
    gitHub: "https://github.com/snavdeepsingh/EndGame"
  },
  {
    id: 6,
    img: "../assets/images/navdeep.jpg",
    title: "End Game",
    description: "EndGame is a directional App with the Aim at helping users find the best location that is equidistant for a group to meet.",
    demo: "https://endgame2.herokuapp.com/",
    gitHub: "https://github.com/snavdeepsingh/EndGame"
  },
]

const Projects = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <h1>Projects</h1>
      
      <Grid container spacing={8} >
       {ProjectItems.map(item =>
          <Grid item xs={12} sm={4} className={classes.gridItem}>
            <EndGameCard 
            id={item.id}
            img={item.img}
            alt={item.title}
            title={item.title}
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
