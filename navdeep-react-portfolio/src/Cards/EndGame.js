import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    alignItem: 'center'
  },
  media: {
    height: 200,
  },
};

function EndGameCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title={props.title}
          style={{paddingTop: "60px", height: "200px", }}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.title}
          </Typography>
          <Typography component="p">
          {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={props.demo} target="-blank" rel="noopener noreferrer" >
        <Button  focusRipple variant="contained" color="primary" className={classes.button}>
           Demo
         </Button>
        </a>
        <a href={props.gitHub} target="-blank" rel="noopener noreferrer" >
        <Button variant="contained" color="primary" className={classes.button}>
           Code
         </Button>
        </a>
      </CardActions>
    </Card>
  );
}

EndGameCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EndGameCard);