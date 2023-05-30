import React, { Fragment } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export function Td(props: {col: number}){

    const options = ['Limpar', 'Floresta', 'Grama', 'Praia', 'Oceano'];

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);
   
    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
      event: React.MouseEvent<HTMLElement>,
      index: number,
    ) => {
      setSelectedIndex(index);
      setAnchorEl(null);
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
                onClick={handleClickListItem}>
                  {selectedIndex === 0 ? '' : options[selectedIndex]}
                 </td>
        
        <Menu id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': `id_elem_${props.col}`
                }}>
                {options.map((opt, i) => (
                  <MenuItem key={opt}
                   selected = {i === selectedIndex}
                   onClick={(e) => handleMenuItemClick(e, i)}
                   >{opt}</MenuItem>
                ))}
             </Menu>
        </Fragment>
    )

}