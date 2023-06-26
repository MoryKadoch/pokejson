import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none', marginLeft: '16px' }}>
                       Pokedex
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header