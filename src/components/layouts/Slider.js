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
          "https://i.etsystatic.com/11903354/r/il/cfae69/965426464/il_1080xN.965426464_6hnd.jpg",
        thumbnail:
          "https://i.etsystatic.com/11903354/r/il/cfae69/965426464/il_1080xN.965426464_6hnd.jpg",
        description: "Albizia Lebbeck",
      },
      {
        original:
          "	https://cdn.shopify.com/s/files/1/0489/5922/6015/files/4_4b5e3db0-d3eb-474d-a15b-edcb5086a018_480x480.jpg?v=1662465367",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0489/5922/6015/files/4_4b5e3db0-d3eb-474d-a15b-edcb5086a018_480x480.jpg?v=1662465367",
        description: "Amaltas Casia Fistula",
      },
      {
        original:
          "https://mtseedbank.in/wp-content/uploads/2023/08/Butterfly-Pea2.jpg",
        thumbnail:
          "https://mtseedbank.in/wp-content/uploads/2023/08/Butterfly-Pea2.jpg",
        description: "Aaprajita",
      },
      {
        original:
          "https://onszaden.com//Files/10/221000/221010/ProductPhotos/Source/1763410860.jpg",
        thumbnail:
          "https://onszaden.com//Files/10/221000/221010/ProductPhotos/Source/1763410860.jpg",
        description: "Azadirachta Indica Neem",
      },
      {
        original:
          "https://cdn.pixabay.com/photo/2021/03/21/01/48/kachnar-6111085_1280.jpg",
        thumbnail:
          "https://cdn.pixabay.com/photo/2021/03/21/01/48/kachnar-6111085_1280.jpg",
        description: "Bauhinia Variegata(kachnar)",
      },
      {
        original:
          "https://img.staticmb.com/mbcontent/images/uploads/2023/10/Madar_1.jpg",
        thumbnail:
          "https://img.staticmb.com/mbcontent/images/uploads/2023/10/Madar_1.jpg",
        description: "Calotropis Gigantea(Akwan)",
      },
      {
        original:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjvw8bRB2KwAHBtNHRa5huLncI4tCtw2DgQv0X4N0s_Y7t1Kk1gYoeGa4xRStNahrgQCIAKfRKp5o-fpQBHckpyv-byPDyVUQvrq1SNaa2K53eV0la8YctM0Gn69121FZO1GB67DgI_Si7/s1600/Madhuca_longifolia_10.JPG",
        thumbnail:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjvw8bRB2KwAHBtNHRa5huLncI4tCtw2DgQv0X4N0s_Y7t1Kk1gYoeGa4xRStNahrgQCIAKfRKp5o-fpQBHckpyv-byPDyVUQvrq1SNaa2K53eV0la8YctM0Gn69121FZO1GB67DgI_Si7/s1600/Madhuca_longifolia_10.JPG",
        description: "Madhuca Longifolia(Mahuwa)",
      },
      {
        original:
          "https://d2seqvvyy3b8p2.cloudfront.net/84d7d0b25f7d8025291aece46479ba2e.jpg",
        thumbnail:
          "https://d2seqvvyy3b8p2.cloudfront.net/84d7d0b25f7d8025291aece46479ba2e.jpg",
        description: "Holarrhena Pubescens(koraiya)",
      },
      {
        original:
          "https://greenparadiselive.com/cdn/shop/products/nerium_oleander-red-greenparadise1_1200x1200.jpg?v=1659526030",
        thumbnail:
          "https://greenparadiselive.com/cdn/shop/products/nerium_oleander-red-greenparadise1_1200x1200.jpg?v=1659526030",
        description: "Nerium Oleander(Kaner)",
      },
      {
        original:
          "https://upload.wikimedia.org/wikipedia/commons/2/2e/DrumstickFlower.jpg",
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/commons/2/2e/DrumstickFlower.jpg",
        description: "Moringa Oleifera(Sahjan)",
      },
      {
        original:
          "https://tropical.theferns.info/plantimages/sized/9/2/92536b907c5441ef70a544bc762f8fffbae5f4f5_480px.jpg",
        thumbnail:
          "https://tropical.theferns.info/plantimages/sized/9/2/92536b907c5441ef70a544bc762f8fffbae5f4f5_480px.jpg",
        description: "Musa Balbisiana(Banana)",
      },
      {
        original:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBHTG0zcehaQshXFavrKDwRcPB2iNuiJntfUjtAqSpxLJXP4jjFjxgGNiwHezeKK6IkmWqRZ7Xcz6XkdA0WuF1Xx3vMI3JYUSzG29fSu4bW74t9bnJYw-tyM0mzivVUGiSfFD8NdA1GJ2p/s1600/Shiuly_nyctanthes+arbor-tristis_08.JPG",
        thumbnail:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBHTG0zcehaQshXFavrKDwRcPB2iNuiJntfUjtAqSpxLJXP4jjFjxgGNiwHezeKK6IkmWqRZ7Xcz6XkdA0WuF1Xx3vMI3JYUSzG29fSu4bW74t9bnJYw-tyM0mzivVUGiSfFD8NdA1GJ2p/s1600/Shiuly_nyctanthes+arbor-tristis_08.JPG",
        description: "Nyctanthesis Arbor Tristis(Night Jasmine)",
      },
      {
        original:
          "https://indiabiodiversity.org/files-api/api/get/raw/img//Mimosa_pudica/Mimosa_pudica.tif.JPG",
        thumbnail:
          "https://indiabiodiversity.org/files-api/api/get/raw/img//Mimosa_pudica/Mimosa_pudica.tif.JPG",
        description: "Mimosa Pudica(Chuimui)",
      },
      {
        original:
          "https://indiabiodiversity.org/files-api/api/get/raw/observations//29210e03-61a8-42c2-9fb4-9eec4dab9c3c/36.JPG",
        thumbnail:
          "https://indiabiodiversity.org/files-api/api/get/raw/observations//29210e03-61a8-42c2-9fb4-9eec4dab9c3c/36.JPG",
        description: "Woodfordia Fruticosa(Dhawai dhatki Ichabaha)",
      },
      {
        original:
          "https://media.istockphoto.com/id/1473796185/photo/palash-flower.jpg?s=612x612&w=0&k=20&c=QoIwEYmDxySeWUYTdklKoYGZQ4WkQ9bnYkljjx7OY_g=",
        thumbnail:
          "https://media.istockphoto.com/id/1473796185/photo/palash-flower.jpg?s=612x612&w=0&k=20&c=QoIwEYmDxySeWUYTdklKoYGZQ4WkQ9bnYkljjx7OY_g=",
        description: "Butea Monosperma(Palash)",
      },
      {
        original:
          "https://preview.redd.it/marigold-tagetes-erecta-v0-zrzjsk7cvrhb1.jpg?width=1080&crop=smart&auto=webp&s=d07a650e8c3c50539aa4f11e1a3da067b404ff59",
        thumbnail:
          "https://preview.redd.it/marigold-tagetes-erecta-v0-zrzjsk7cvrhb1.jpg?width=1080&crop=smart&auto=webp&s=d07a650e8c3c50539aa4f11e1a3da067b404ff59",
        description: "Tagetes erecta(Marigold)",
      },
      {
        original:
          "https://efloraofindia.com/wp-content/uploads/2020/10/tn_DSC_0194.JPG",
        thumbnail:
          "https://efloraofindia.com/wp-content/uploads/2020/10/tn_DSC_0194.JPG",
        description: " Crotalaria Juncea(Sanai)",
      },
      {
        original:
          "https://indiabiodiversity.org/files-api/api/get/raw/observations//3f4d8a9b-b97a-448b-ae92-961f5cd6c69e/536.JPG",
        thumbnail:
          "https://indiabiodiversity.org/files-api/api/get/raw/observations//3f4d8a9b-b97a-448b-ae92-961f5cd6c69e/536.JPG",
        description: "Sphaeranthus Indicus(Gorakhmundi)",
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
                thumbnailPosition="bottom"
                showThumbnails={true}
                autoPlay={true}
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
