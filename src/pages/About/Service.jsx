

const Service = ({ title, icon, description }) => {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <div className="service-content-box">
        <p className="service-item-text">{description}</p>
      </div>
    </li>
  );
}

export default Service;
