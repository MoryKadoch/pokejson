import { Grid, TextField, IconButton } from '@material-ui/core';

const SearchBox = ({ onSearch, onLanguageChange }) => (
    <Grid item xs={12} sm={12}>
        <TextField label="Search Pokemon" variant="outlined" fullWidth onChange={onSearch} />
        <IconButton onClick={() => onLanguageChange("english")} style={{ color: 'white' }}>
            <span role="img" aria-label="UK flag">🇬🇧</span>
        </IconButton>
        <IconButton onClick={() => onLanguageChange("japanese")} style={{ color: 'white' }}>
            <span role="img" aria-label="Japan flag">🇯🇵</span>
        </IconButton>
        <IconButton onClick={() => onLanguageChange("chinese")} style={{ color: 'white' }}>
            <span role="img" aria-label="China flag">🇨🇳</span>
        </IconButton>
        <IconButton onClick={() => onLanguageChange("french")} style={{ color: 'white' }}>
            <span role="img" aria-label="France flag">🇫🇷</span>
        </IconButton>
    </Grid>
);

export default SearchBox;
