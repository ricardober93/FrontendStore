import React from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core/';
import '../css/cardCategory.css'
import ModalCategory from './ModalCategory';

export default function CardCategory(props) {
    const { Categories, user, getAllCat } = props

    return (
        <Grid col={1}>
            {
                Categories.map(
                    (category) =>
                        category ? (
                            <div key={category._id}>
                                <Card className="card">
                                    <CardContent className="card-content">
                                        <Typography color="textSecondary" gutterBottom>
                                            {category.name}
                                        </Typography>
                                        <Typography color="textSecondary" gutterBottom>
                                            {category.state}
                                        </Typography>
                                        <ModalCategory
                                            category={category}
                                            user={user}
                                            getAllCat={getAllCat} />
                                    </CardContent>
                                </Card>
                            </div>
                        ) : (
                                <Card className="card">
                                    <CardContent className="card-content">
                                        <Typography color="textSecondary" gutterBottom>
                                            No hay categorias para Mostrar
                                        </Typography>
                                    </CardContent>
                                </Card>
                            )
                )
            }
        </Grid>
    )
}
