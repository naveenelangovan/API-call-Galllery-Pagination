import ImageGallery from 'react-image-gallery';


function Imggal () {

    const images = [
        {
            original: 'https://assets-prd.ignimgs.com/2023/02/13/guardians-of-the-galaxy-vol-three-newbutton-1676306275720.jpg',
            thumbnail: 'https://wwwflickeringmythc3c8f7.zapwp.com/q:i/r:1/wp:1/w:371/u:https://cdn.flickeringmyth.com/wp-content/uploads/2023/04/guardians-of-the-galaxy-3-screen-x-600x338.jpg'
        },
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];
 
    return (
        <>
            <h2>React Image Gallery NPM Package Working</h2>
            <ImageGallery items={images} showNav={false} showThumbnails={true} thumbnailPosition={'right'} showFullscreenButton={false} showBullets={true} showIndex={true} autoPlay={true} slideInterval={5000} />;
        </>

    )
}

export default Imggal