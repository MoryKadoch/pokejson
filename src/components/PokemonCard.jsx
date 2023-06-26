import { useState } from 'react';
import { Grid, Card, CardContent, Typography, Chip, IconButton, Dialog, DialogContent, TextField, Button, Select, MenuItem } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const colorsType = {
    bug: '#729f3f',
    dragon: '#53a4cf',
    fairy: '#fdb9e9',
    fire: '#fd7d24',
    ghost: '#7b62a3',
    ground: '#f7de3f',
    normal: '#a4acaf',
    psychic: '#f366b9',
    steel: '#9eb7b8',
    dark: '#707070',
    grass: '#9bcc50',
    poison: '#b97fc9',
    rock: '#a38c21',
    water: '#4592c4',
    electric: '#eed535',
    fighting: '#d56723',
    flying: '#3dc7ef',
    ice: '#51c4e7'
};

const PokemonCard = ({ pokemon, language, onPokemonUpdate }) => {
    const [isEditDialogOpen, setEditDialogOpen] = useState(false);
    const [editedPokemon, setEditedPokemon] = useState(pokemon);

    const handleEdit = () => {
        setEditedPokemon(pokemon);
        setEditDialogOpen(true);
    };

    const handleDialogClose = () => {
        setEditDialogOpen(false);
        onPokemonUpdate(editedPokemon);
    };

    const handleInputChange = (event) => {
        setEditedPokemon(prevState => ({
            ...prevState,
            name: {
                ...prevState.name,
                [language]: event.target.value
            }
        }));
    };

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {pokemon.name[language]}
                        <Chip label={'#' + pokemon.id} style={{ backgroundColor: '#777', color: 'white' }} />
                    </Typography>
                    {pokemon.type.map((type, index) => (
                        <Chip
                            key={index}
                            label={type}
                            style={{ backgroundColor: colorsType[type.toLowerCase()], color: 'white', marginRight: '5px' }}
                        />
                    ))}
                    <Typography variant="body2" component="p" style={{ marginTop: '16px' }}>
                        HP: {pokemon.base.HP}<br />
                        Attack: {pokemon.base.Attack}<br />
                        Defense: {pokemon.base.Defense}<br />
                        Sp. Attack: {pokemon.base["Sp. Attack"]}<br />
                        Sp. Defense: {pokemon.base["Sp. Defense"]}<br />
                        Speed: {pokemon.base.Speed}
                    </Typography>
                    <IconButton onClick={handleEdit} style={{ float: 'right' }}>
                        <EditIcon />
                    </IconButton>
                </CardContent>
            </Card>
            <Dialog open={isEditDialogOpen} onClose={handleDialogClose}>
                <DialogContent>
                    <TextField
                        name="name"
                        label="Name"
                        value={editedPokemon.name[language]}
                        onChange={handleInputChange}
                    />
                    <Button onClick={handleDialogClose}>Save</Button>
                </DialogContent>
            </Dialog>
        </Grid>
    );
};

export default PokemonCard;