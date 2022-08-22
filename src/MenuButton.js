import React, { useState, useRef } from 'react';
import { GlobalStyles } from './global';
import Burger from './components/Menu/Burger/burger';
import Menu from './components/Menu/Menu_items/menu';

import { useOnClickOutside } from './useOnClickOutside';

function MenuButton() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div className='container'>
      <GlobalStyles />
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
export default MenuButton;
