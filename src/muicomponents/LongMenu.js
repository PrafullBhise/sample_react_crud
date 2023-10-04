import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
const options = [

  'View',

  'Edit',

  'Delete',

];
const ITEM_HEIGHT = 48;
export default function LongMenu(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {

    setAnchorEl(event.currentTarget);

  };

  const handleClose = (e) => {

    setAnchorEl(null);

    console.log(props.id)

   if(e==='View'){

    window.location.href = `/Viewuser/${props.id}`;

   }

   if(e==="Edit"){

    window.location.href = `/edituser/${props.id}`;

   }

   if(e==='Delete'){

    props.onClick();

   }

  };

  return (

    <div>

      <IconButton

        aria-label="more"

        id="long-button"

        aria-controls={open ? 'long-menu' : undefined}

        aria-expanded={open ? 'true' : undefined}

        aria-haspopup="true"

        onClick={handleClick}

      >

        <MoreVertIcon />

      </IconButton>

      <Menu

        id="long-menu"

        MenuListProps={{

          'aria-labelledby': 'long-button',

        }}

        anchorEl={anchorEl}

        open={open}

        onClose={handleClose}

        PaperProps={{

          style: {

            maxHeight: ITEM_HEIGHT * 4.5,

            width: '20ch',

          },

        }}
      >
        {options.map((option) => (

          <MenuItem key={option} selected={option === 'View'} onClick={() => handleClose(option)}>

            {option}

          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}