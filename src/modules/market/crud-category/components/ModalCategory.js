import React, { useState } from 'react';
import { useFormik } from "formik";
import { makeStyles } from '@material-ui/core/styles';
import {
    Modal,
    Button,
    TextField,
    FormControl,
    TextareaAutosize,
    Select,
    InputLabel,
    MenuItem,
    Grid
} from '@material-ui/core/'; // web.cjs is required for IE 11 support
import { Edit } from '@material-ui/icons';
import InputForm from '../../../components/InputForm';
import { updateCategory } from '../../providers/CategoryProvider';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


export default function ModalCategory({ category }) {
    let history = useHistory();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        id: category._id,
        name: category.name,
        description: category.description,
        image: category.image_url,
        state: category.state,
        featured: category.featured,
    });

    const handleOpen = () => {
        setOpen(!open);
    };
    const formik = useFormik({
        initialValues: {
            id: formData.id,
            name: formData.name,
            description: formData.description,
            image_url: formData.image,
            featured: formData.featured,
            state: formData.state,
        },
        onSubmit: async (values) => {
            try {

                await updateCategory({
                    _id: formData.id,
                    name: values.name,
                    description: values.description,
                    image_url: values.image_url,
                    featured: values.featured,
                    state: values.state,
                })
                setFormData({
                    id: formData.id,
                    name: values.name,
                    description: values.description,
                    image_url: values.image_url,
                    featured: values.featured,
                    state: values.state,
                });
                setOpen(!open)
                history.push("/dashboard-create-category");

            } catch (err) {
                console.error(err)
            }
        },
    });
    return (
        <div>
            <Button type="button" onClick={handleOpen}><Edit color="primary" /></Button>
            {
                (open === true) ?
                    (<Modal
                        className={classes.modal}
                        open={open}
                        onClose={handleOpen}
                    >
                        <div className={classes.paper}>
                            <h2 id="spring-modal-title">Editar {category.name}</h2>
                            <form onSubmit={formik.handleSubmit}>
                                <Grid container col={2} spacing={2} >
                                    <Grid item xs={12} md={6} className="grid" >
                                        <FormControl>
                                            <TextField
                                                variant="outlined"
                                                name="name"
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <InputForm
                                                name="image_url"
                                                type="text"
                                                placeholder="Agregar una imagen"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.image_url}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6} className="grid" >
                                        <FormControl>
                                            <TextareaAutosize
                                                name="description"
                                                rowsMax={4}
                                                rows={4}
                                                aria-label="descripcion"
                                                placeholder="Agregar una descripcion"
                                                onChange={formik.handleChange}
                                                onBlur={formik.onBlur}
                                                value={formik.values.description}
                                            />
                                        </FormControl>
                                        <FormControl variant="outlined">
                                            <InputLabel id="featured">featured</InputLabel>
                                            <Select
                                                labelId="featured"
                                                id="featured"
                                                name="featured"
                                                value={formik.values.featured}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                label="featured"
                                            >
                                                <MenuItem value={false}>No</MenuItem>
                                                <MenuItem value={true}>si</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl variant="outlined">
                                            <InputLabel id="state">State</InputLabel>
                                            <Select
                                                labelId="state"
                                                id="state"
                                                name="state"
                                                value={formik.values.state}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                label="state"
                                            >
                                                <MenuItem value="available">available</MenuItem>
                                                <MenuItem value="unavailable">unavailable</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Button type="submit" variant="contained" color="secondary">
                                        Actualizar Producto
                                    </Button>
                                </Grid>
                            </form>
                        </div>
                    </Modal>)
                    : null
            }
        </div>
    );
}
