import type { NextPage } from 'next'
import Header from './components/Header'
import Grid from '@mui/material/Grid';
import CardProduct from './components/CardProduct';

import styles from '../styles/Home.module.css'

export default function Home(props:any) {
  
  return (
    <div >
        <Header />
        <Grid container  rowSpacing={8}  justifyContent="center" className={styles.grid}>
            
            {props.products.map((x:any) => {
              return(
                <Grid item xs={8} sm={5} md={3.5} lg={2.5} xl={2.01} >
                        <CardProduct props={x}/>
                      </Grid>
                  )
                })
                
              }
            
           
         
        </Grid>
    </div>
  )
}



export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://172.17.0.1:3000/api/v1/products');
  const products = await res.json()

  // Pass data to the page via props
  return { props: { products } }
}