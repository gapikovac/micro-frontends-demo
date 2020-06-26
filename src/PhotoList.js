import React from 'react';
import PhotoCard from './PhotoCard';

const PhotoList = ({photos}) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Photos</h1>
                </div>
            </div>
            <div className="row">
                {photos.map(photo => (
                    <div className="col-md-4">
                        <PhotoCard key={photo.id} photo={photo}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoList;
