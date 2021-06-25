import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import Container from '@material-ui/core/Container';
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('../../', '')] = r(item); });
    return images;
  }

const images = importAll(require.context('../../static/images/photos', false, /\.(png|jpe?g|svg)$/));

const data=[]
           Object.keys(images).map((key,i) => (
               data.push(
                   {
                    original:images[key]['default'],
                    thumbnail:images[key]['default'],
                    sizes:"50"
                   }
               )
        
         )) 
const imageslist = data

export default function ImageGridList() {

  return (
    <Container  maxWidth="xl" >
    <ImageGallery items={imageslist} />
    </Container>
 
  );
}
