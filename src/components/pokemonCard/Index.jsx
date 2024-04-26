import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import corTipo from './corTipo';



export default function PokemonCard({name, image, types, order}) {

  const typeHandler = () => {
    if(types[1]){
      return types[0].type.name + ' / ' + types[1].type.name;
    }
    return types[0].type.name;
  }

  const tipoPrimario = types[0].type.name

  return (
    <Box  border= {`4px solid ${corTipo(tipoPrimario)}`}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia 
        sx={{ height: 300 }}
        image={image}
      />

      <CardContent>
        <Box display= 'flex' justifyContent= 'space-between' alignItems='center'>
         <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </Box>
        {
        <Typography variant="body2" color="gray">
          {`Tipos: ${typeHandler()}`}
        </Typography>}
      </CardContent>
    </Card>
    </Box>
    );
}
