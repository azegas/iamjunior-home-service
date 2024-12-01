import React from 'react';
import { NavLink } from 'react-router-dom';

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChange }) => {
  return (
    <div>
      {options.map((option) => (
        <NavLink key={option} to={option} onClick={() => onChange(option)}>
          {option}
        </NavLink>
      ))}
      <NavLink to="logout" onClick={() => onChange('logout')}>
        Logout
      </NavLink>
    </div>
  );
};

export default Dropdown;
