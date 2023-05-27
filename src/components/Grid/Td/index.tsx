import React, { Fragment } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export function Td(props: {col: number}){

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        
        <Fragment>
        <td id={`id_elem_${props.col}`} 
                aria-controls={open ? `id_elem_${props.col}` : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}></td>
        
        <Menu id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': `id_elem_${props.col}`,
                }}>
                <MenuItem onClick={handleClose}>Menu</MenuItem>
                <MenuItem onClick={handleClose}>Muito Foda</MenuItem>
                <MenuItem onClick={handleClose}>Irado</MenuItem>
             </Menu>
        </Fragment>
    )

}