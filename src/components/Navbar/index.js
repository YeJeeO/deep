import React from "react";
import { Nav, NavLink, NavMenu } 
from "./NavbarElements";
const Navbar = () => {
return (
<>
<Nav>
<NavMenu>
<NavLink to="/about" activeStyle>
Главная (О нас)
</NavLink>
<NavLink to="/events" activeStyle>
Мероприятия
</NavLink>
<NavLink to="/coach" activeStyle>
Преподаватели
</NavLink>
<NavLink to="/schedule" activeStyle>
Расписание
</NavLink>
<NavLink to="/galery" activeStyle>
Галерея
</NavLink>
</NavMenu>
</Nav>
</>
);
};
export default Navbar;