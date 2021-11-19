import React from 'react';
import Template from '../../../components/template'
import Grid from '@material-ui/core/Grid';
import ImgAdmin from '../../../assets/img/admin.png'

export default function Dashboard() {
  return (
    <Template nomeDaPagina="Dashboard">
      <Grid container spacing={1}>
        <img src={ImgAdmin} alt="Logo"/>
      </Grid>
    </Template>
  )
}