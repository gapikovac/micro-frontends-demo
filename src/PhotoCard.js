import React from 'react';
import PropTypes from 'prop-types';

const PhotoCard = ({photo}) => (
    <div className="card" style={{width: "18rem"}}>
        <img className=" card-img-top" src={photo.thumbnailUrl} alt={photo.title}/>
        <div className=" card-body">
            <h5 className=" card-title">{photo.title}</h5>
            <a href={photo.url} className=" btn btn-primary">Voir</a>
        </div>
    </div>
);

PhotoCard.propTypes = {
    photo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        albumId: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired
    }).isRequired,
};

export default PhotoCard;
