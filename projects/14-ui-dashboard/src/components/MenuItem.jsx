import React from 'react';

import PropTypes from 'prop-types';

function MenuItem({ icon: Icon, label , link }) {
  return (
    <div className='m-1'>
      {/* Lo mejor es usar reactDOM y componente LINK para no recargar la pagina */}
      <a
        href={link}
        className="  flex items-center gap-4 p-4 text-gray-500 rounded-lg font-medium focus:bg-purple-600 focus:text-white focus:font-bold hover:text-purple-500 transition-all duration-300  "
      >
        {Icon && <Icon />}
        {label}
      </a>
    </div>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.elementType, // Propiedad para pasar el componente de icono
  label: PropTypes.string.isRequired, // Propiedad para pasar la etiqueta del menú
  link: PropTypes.string.isRequired,
};

export default MenuItem;
