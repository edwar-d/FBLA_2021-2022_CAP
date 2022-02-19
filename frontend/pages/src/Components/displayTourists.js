import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import AttractionsIcon from '@mui/icons-material/Attractions';
import StoreIcon from '@mui/icons-material/Store';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import {Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col, CardGroup} from 'reactstrap';

function displayTourists (){
    return (
        <div style={{}}>
          <Card
            style={{
              width: 300,
              backgroundColor: "white",
              padding: 5,
              borderRadius: 15,
              boxShadow: "10px 20px 30px black",
            }}
          > 
            <CardContent>
            <Typography variant="h5" component="h5">
                  Golden Gate Bridge   
              </Typography>
              <Typography
                style={{ fontSize: 14}}
                    color="textSecondary"
                gutterBottom
              >
                San Francisco, CA
              </Typography>
              <AttractionsIcon style={{
                display: 'flex',
                color: "blue",
                marginBottom: 20,
                alignItems: "center",
                fontSize: "very large"
              }}>
              </AttractionsIcon>
                <Typography
                style={{
                  marginBottom: 20,
                  alignItems: "center"
                }}
                color="textSecondary"
              >
                  4.5/5.0 (25 Reviews)
              </Typography>
              <Typography variant="body2" component="p">
              <a href="https://www.goldengate.org/">Visit Website</a>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">(415) 455-2000
            </Button>
            </CardActions>
          </Card>
          <Card
            style={{
              width: 300,
              backgroundColor: "white",
              padding: 5,
              borderRadius: 15,
              boxShadow: "10px 20px 30px black",
            }}
          > 
            <CardContent>
            <Typography variant="h5" component="h5">
              Amici’s East Coast Pizzeria at CloudKitchens San Jose              </Typography>
              <Typography
                style={{ fontSize: 14}}
                    color="textSecondary"
                gutterBottom
              >
              San Jose, CA
              </Typography>
              <RestaurantIcon style={{
                display: 'flex',
                color: "blue",
                marginBottom: 20,
                alignItems: "center",
                fontSize: "very large"
              }}>
              </RestaurantIcon>
              <Typography
                style={{
                  marginBottom: 20,
                  alignItems: "center"
                }}
                color="textSecondary"
              >
                  4.5/5.0 (22 Reviews)
              </Typography>
              <Typography variant="body2" component="p">
              <a href="http://www.amicis.com/">Visit Website</a>
             </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">(415) 728-0028
            </Button>
            </CardActions>
          </Card>
          <Card
            style={{
              width: 300,
              backgroundColor: "white",
              padding: 5,
              borderRadius: 15,
              boxShadow: "10px 20px 30px black",
            }}
          > 
            <CardContent>
            <Typography variant="h5" component="h5">
              Pier 39             </Typography>
              <Typography
                style={{ fontSize: 14}}
                    color="textSecondary"
                gutterBottom
              >
              San Francisco, CA
              </Typography>
              <StoreIcon style={{
                display: 'flex',
                color: "blue",
                marginBottom: 20,
                alignItems: "center",
                fontSize: "very large"
              }}>
              </StoreIcon>
              <Typography
                style={{
                  marginBottom: 20,
                  alignItems: "center"
                }}
                color="textSecondary"
              >
                  4/5.0 (1405 Reviews)
              </Typography>
              <Typography variant="body2" component="p">
              <a href="http://www.pier39.com">Visit Website</a>
             </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">(415) 728-0028
            </Button>
            </CardActions>
          </Card>
          <Card
            style={{
              width: 300,
              backgroundColor: "white",
              padding: 5,
              borderRadius: 15,
              boxShadow: "10px 20px 30px black",
            }}
          > 
            <CardContent>
            <Typography variant="h5" component="h5">
              Union Square             </Typography>
              <Typography
                style={{ fontSize: 14}}
                    color="textSecondary"
                gutterBottom
              >
              San Francisco, CA
              </Typography>
              <StoreIcon style={{
                display: 'flex',
                color: "blue",
                marginBottom: 20,
                alignItems: "center",
                fontSize: "very large"
              }}>
              </StoreIcon>
              <Typography
                style={{
                  marginBottom: 20,
                  alignItems: "center"
                }}
                color="textSecondary"
              >
                  4/5.0 (50 Reviews)
              </Typography>
              <Typography variant="body2" component="p">
              <a href="http://unionsquareshop.com/">Visit Website</a>
             </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">(415) 477-2610
            </Button>
            </CardActions>
          </Card> 
        </div>
      );
    }

export default displayTourists;