import { NavLink } from "react-router-dom";

export const Character = (props) => {
  const { id, image, name } = props;
  return (
    <li>
      <NavLink to={`/details/${id}`} title={`Ver detalhes de ${name}`}>
        <img src={image.src} alt={image.alt} />
        <h1>{name}</h1>
      </NavLink>
    </li>
  );
}
