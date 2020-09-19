import React from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import '../css/cardBrand.css'
import ModalBrand from './ModalBrand';

export default function CardBrand(props) {
    const { brands, user, getAllBrands } = props
    console.log(brands);
    return (
        <Grid col={1}>
            {
                brands.map(
                    (brand) =>
                        brand ? (
                            <div key={brand._id}>
                                <Card className="card">
                                    <CardContent className="card-content">
                                        <Typography color="textSecondary" gutterBottom>
                                            {brand.name}
                                        </Typography>
                                        <Typography color="textSecondary" gutterBottom>
                                            {brand.state}
                                        </Typography>
                                        <ModalBrand
                                            brand={brand}
                                            user={user}
                                            getAllBrands={getAllBrands} />
                                    </CardContent>
                                </Card>
                            </div>
                        ) : (
                                <Card className="card">
                                    <CardContent className="card-content">
                                        <Typography color="textSecondary" gutterBottom>
                                            No hay marcas para Mostrar
                                        </Typography>
                                    </CardContent>
                                </Card>
                            )
                )
            }
        </Grid>
    )
}
