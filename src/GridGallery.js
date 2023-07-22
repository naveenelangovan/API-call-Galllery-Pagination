import { Gallery } from "react-grid-gallery";
import { useState } from "react";


function GridGallery() {

    const [images, setImages] = useState();
  const hasSelected = images.some((image) => image.isSelected);

  const handleSelect = (index) => {
    const nextImages = images.map((image, i) =>
      i === index ? { ...image, isSelected: !image.isSelected } : image
    );
    setImages(nextImages);
  };

  const handleSelectAllClick = () => {
    const nextImages = images.map((image) => ({
      ...image,
      isSelected: !hasSelected,
    }));
    setImages(nextImages);
  };

 

//     const [images, setImages] = useState(IMAGES); [
//        {
//           src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//           width: 320,
//           height: 174,
//           isSelected: true,
//           caption: "After Rain (Jeshu John - designerspics.com)",
//        },
//        {
//           src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//           width: 320,
//           height: 212,
//           tags: [
//              { value: "Ocean", title: "Ocean" },
//              { value: "People", title: "People" },
//           ],
//           alt: "Boats (Jeshu John - designerspics.com)",
//        },
     
//        {
//           src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//           width: 320,
//           height: 212,
//        },
       
//        {
//         src: "https://pm1.narvii.com/7851/5b11529fd3b906093f659dcf188a2d436a309ea5r1-1382-2048v2_hq.jpg",
//         width: 320,
//         height: 212,
//      },
//      {
//         src: "https://media.comicbook.com/2020/04/dc-comics-movies-schedule-1216440-1280x0.jpeg",
//         width: 320,
//         height: 212,
//      },
//      {
//         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//         width: 320,
//         height: 174,
//         isSelected: true,
//         caption: "After Rain (Jeshu John - designerspics.com)",
//      },
//      {
//         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//         width: 320,
//         height: 212,
//         tags: [
//            { value: "Ocean", title: "Ocean" },
//            { value: "People", title: "People" },
//         ],
//         alt: "Boats (Jeshu John - designerspics.com)",
//      },
   
//      {
//         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//         width: 320,
//         height: 212,
//      },
     
//      {
//       src: "https://pm1.narvii.com/7851/5b11529fd3b906093f659dcf188a2d436a309ea5r1-1382-2048v2_hq.jpg",
//       width: 320,
//       height: 212,
//    },
//    {
//       src: "https://media.comicbook.com/2020/04/dc-comics-movies-schedule-1216440-1280x0.jpeg",
//       width: 320,
//       height: 212,
//    },
//    {
//     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//     width: 320,
//     height: 174,
//     isSelected: true,
//     caption: "After Rain (Jeshu John - designerspics.com)",
//  },
//  {
//     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//     width: 320,
//     height: 212,
//     tags: [
//        { value: "Ocean", title: "Ocean" },
//        { value: "People", title: "People" },
//     ],
//     alt: "Boats (Jeshu John - designerspics.com)",
//  },

//  {
//     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//     width: 320,
//     height: 212,
//  },
 
//  {
//   src: "https://pm1.narvii.com/7851/5b11529fd3b906093f659dcf188a2d436a309ea5r1-1382-2048v2_hq.jpg",
//   width: 320,
//   height: 212,
// },
// {
//   src: "https://media.comicbook.com/2020/04/dc-comics-movies-schedule-1216440-1280x0.jpeg",
//   width: 320,
//   height: 212,
// },
// {
//     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//     width: 320,
//     height: 174,
//     isSelected: true,
//     caption: "After Rain (Jeshu John - designerspics.com)",
//  },
//  {
//     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//     width: 320,
//     height: 212,
//     tags: [
//        { value: "Ocean", title: "Ocean" },
//        { value: "People", title: "People" },
//     ],
//     alt: "Boats (Jeshu John - designerspics.com)",
//  },

//  {
//     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//     width: 320,
//     height: 212,
//  },
 
//  {
//   src: "https://pm1.narvii.com/7851/5b11529fd3b906093f659dcf188a2d436a309ea5r1-1382-2048v2_hq.jpg",
//   width: 320,
//   height: 212,
// },
// {
//   src: "https://media.comicbook.com/2020/04/dc-comics-movies-schedule-1216440-1280x0.jpeg",
//   width: 320,
//   height: 212,
// },
// {
//     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//     width: 320,
//     height: 174,
//     isSelected: true,
//     caption: "After Rain (Jeshu John - designerspics.com)",
//  },
//  {
//     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//     width: 320,
//     height: 212,
//     tags: [
//        { value: "Ocean", title: "Ocean" },
//        { value: "People", title: "People" },
//     ],
//     alt: "Boats (Jeshu John - designerspics.com)",
//  },

//  {
//     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//     width: 320,
//     height: 212,
//  },
 
//  {
//   src: "https://pm1.narvii.com/7851/5b11529fd3b906093f659dcf188a2d436a309ea5r1-1382-2048v2_hq.jpg",
//   width: 320,
//   height: 212,
// },
// {
//   src: "https://media.comicbook.com/2020/04/dc-comics-movies-schedule-1216440-1280x0.jpeg",
//   width: 320,
//   height: 212,
// }
//     ];

//     const handleSelect = (index: number, item: Image, event: MouseEvent<HTMLElement>) => {
//         const nextImages = images.map((image, i) =>
//           i === index ? { ...image, isSelected: !image.isSelected } : image
//         );
//         setImages(nextImages);
//       };


    return (<>
    {/* <Gallery images={images} onSelect={handleSelect}/> */}
    <div>
      <div className="p-t-1 p-b-1">
        <button onClick={handleSelectAllClick}>
          {hasSelected ? "Clear selection" : "Select all"}
        </button>
      </div>
      <Gallery images={images} onSelect={handleSelect} />
    </div>
    </>)}

    export default GridGallery