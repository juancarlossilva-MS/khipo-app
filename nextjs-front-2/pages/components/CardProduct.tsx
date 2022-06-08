import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import styles from '../../styles/Card.module.css'

export default function CardProduct(props:any) {

  return (
    <Card sx={{ maxWidth: 242 }} >
      <CardActionArea className={styles.cardAction}>
        <div  className={styles.containerImage}>
          <img
          
            src={props.props.image}        
            className={styles.image}
          />
        </div>
        <CardContent className={styles.cardContent}>
          <Typography className={styles.productName}>
            {props.props.name}
          </Typography>
          <Typography className={styles.brandName}>
           {props.props.brand}
          </Typography>
        </CardContent>
        
          <Typography className={styles.price}>
            R$ {props.props.price}
          </Typography>
        
      </CardActionArea>
    </Card>
  );
}