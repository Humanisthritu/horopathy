import React, { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";

const MyCollection = [
  {
    label: "First Picture",
    imgPath:
      "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg",
  },
  {
    label: "Second Picture",
    imgPath:
      "https://gallery.yopriceville.com/var/albums/Nature/Forest_Trail_Landscape_Wallpaper.jpg",
  },
  {
    label: "Third Picture",
    imgPath:
      "https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg",
  },
];

const SlideMe = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const imagesOfScenes = [
      {
        original:
          "https://cdn.bigboytoyz.com/new-version/products/product/whatsapp-image-2023-09-28-at-1.28.30-pm.jpeg",
        thumbnail:
          "https://cdn.bigboytoyz.com/new-version/products/product/whatsapp-image-2023-09-28-at-1.28.30-pm.jpeg",
      },
      {
        original:
          "	https://cdn.bigboytoyz.com/new-version/products/product/whatsapp-image-2023-09-28-at-1.28.36-pm.jpeg",
        thumbnail:
          "	https://cdn.bigboytoyz.com/new-version/products/product/whatsapp-image-2023-09-28-at-1.28.36-pm.jpeg",
      },
      {
        original:
          "https://cdn.bigboytoyz.com/new-version/products/product/whatsapp-image-2023-09-28-at-1.28.37-pm.jpeg",
        thumbnail:
          "https://cdn.bigboytoyz.com/new-version/products/product/whatsapp-image-2023-09-28-at-1.28.37-pm.jpeg",
      },
      {
        original:
          "	https://cdn.bigboytoyz.com/new-version/products/product/whatsapp-image-2023-09-28-at-1.28.52-pm.jpeg",
        thumbnail:
          "	https://cdn.bigboytoyz.com/new-version/products/product/whatsapp-image-2023-09-28-at-1.28.52-pm.jpeg",
      },
      {
        original:
          "https://cdn.bigboytoyz.com/new-version/products/product/whatsapp-image-2023-09-28-at-1.28.49-pm-1.jpeg",
        thumbnail:
          "https://cdn.bigboytoyz.com/new-version/products/product/whatsapp-image-2023-09-28-at-1.28.49-pm-1.jpeg",
      },
      {
        original:
          "https://cdn.bigboytoyz.com/new-version/products/product/whatsapp-image-2023-09-28-at-1.28.45-pm.jpeg",
        thumbnail:
          "https://cdn.bigboytoyz.com/new-version/products/product/whatsapp-image-2023-09-28-at-1.28.45-pm.jpeg",
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
                // thumbnailPosition='bottom'
                showThumbnails={true}
                autoPlay={false}
                showPlayButton={false}
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
