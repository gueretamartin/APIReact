import React from "react";

const Imagen = (props) => {
  const { largeImageURL, previewURL, tags, likes, views } = props.image;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags}   className="card-img-top"></img>

        <div className="card-body">
          <p className="card-text">{likes} Likes</p>
          <p className="card-text">{views} Views</p>

          <a
            href={largeImageURL}  
            className="btn btn-primary btn-block"
          >
            Open Image
          </a>
        </div>
      </div>
    </div>
  );
};

export default Imagen;
