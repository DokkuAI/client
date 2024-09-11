"use client";
import { useRef, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { dropPlugin } from "@react-pdf-viewer/drop";
import "@react-pdf-viewer/drop/lib/styles/index.css";
// import WebViewer from "@pdftron/pdfjs-express-viewer";

export default function FileView() {
  
    const defaultPluginInstance = defaultLayoutPlugin();
    const dropPluginInstance = dropPlugin();

    return (
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
        defaultScale={1}
          fileUrl="https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
          plugins={[defaultPluginInstance, dropPluginInstance]}
        />
      </Worker>
    );
  }

// export default function MyComponent () {
//   const viewer = useRef(null);

//   useEffect(() => {
//     WebViewer(
//       {
//         path: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf",
//         initialDoc:
//           "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf",
//       },
//       viewer.current
//     ).then((instance) => {
//       // now you can access APIs through the WebViewer instance
//       const { Core } = instance;

//       // adding an event listener for when a document is loaded
//       Core.documentViewer.addEventListener("documentLoaded", () => {
//         console.log("document loaded");
//       });

//       // adding an event listener for when the page number has changed
//       Core.documentViewer.addEventListener(
//         "pageNumberUpdated",
//         (pageNumber) => {
//           console.log(`Page number is: ${pageNumber}`);
//         }
//       );
//     });
//   }, []);

//   return (
//     <div className="MyComponent">
//       <div className="header">React sample</div>
//       <div className="webviewer" ref={viewer}></div>
//     </div>
//   );
// };