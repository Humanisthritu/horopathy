import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";



const SlideMe = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const imagesOfScenes = [
      {
        original:
        "https://cdn.pixabay.com/photo/2017/02/15/08/27/magenta-flower-2067917_1280.jpg",
        thumbnail:
          "https://cdn.pixabay.com/photo/2017/02/15/08/27/magenta-flower-2067917_1280.jpg",
        description: "Kachnar",
      
         
      },
      {
        original:
          "	https://thumbs.dreamstime.com/b/yellow-orange-starburst-flower-nature-jpg-192959431.jpg",
        thumbnail:
          "	https://thumbs.dreamstime.com/b/yellow-orange-starburst-flower-nature-jpg-192959431.jpg",
      },
      {
        original:
          "https://static.vecteezy.com/system/resources/previews/030/355/618/large_2x/flowers-in-the-field-mountains-flowers-nature-nature-hd-wallpaper-ai-generated-free-photo.jpg",
        thumbnail:
          "https://static.vecteezy.com/system/resources/previews/030/355/618/large_2x/flowers-in-the-field-mountains-flowers-nature-nature-hd-wallpaper-ai-generated-free-photo.jpg",
      },
      {
        original:
          "	https://c1.wallpaperflare.com/preview/8/719/675/plant-gardener-gardening-shop-garden.jpg",
        thumbnail:
          "	https://c1.wallpaperflare.com/preview/8/719/675/plant-gardener-gardening-shop-garden.jpg",
      },
      {
        original:
          "https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-abstract-water-plant-or-aquatic-plant-or-aquatic-weed-image_15686583.jpg",
        thumbnail:
          "https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-abstract-water-plant-or-aquatic-plant-or-aquatic-weed-image_15686583.jpg",
      },
      {
        original:
          "https://cdn.pixabay.com/photo/2023/07/21/22/49/sunflower-bud-8142430_640.jpg",
        thumbnail:
          "https://cdn.pixabay.com/photo/2023/07/21/22/49/sunflower-bud-8142430_640.jpg",
      },
    ];
    setImages(imagesOfScenes);
    setLoading(false);
  }, []);

  return (
    <>
      <div className="slideshow-container">
        <div className="left-section">
          {!loading && (
            <div className="image-gallery-content">
              <ReactImageGallery
                items={images}
                thumbnailPosition='bottom'
                showThumbnails={true}
                autoPlay={false}
                showPlayButton={false} 
                showNav={true}      
              />
              {/* note: we need to add react-image-gallery css link to our css... */}
            </div>
          )}

         
        </div>
      </div>
    </>
  );
};

export default SlideMe;
