"use client";

// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";


export default function FileView() {
  return(
    <div className="bg-red-600">PDF</div>
  )

    // const newPlugin = defaultLayoutPlugin();

    // return (
    //   <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
    //     <Viewer
    //       fileUrl="https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
    //       plugins={[newPlugin]}
    //     />
    //   </Worker>
    // );
  
// const docs = [
//   {
//     uri: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf",
//   },
// ];

// return (
//   <DocViewer documents={docs} init pluginRenderers={[PDFRenderer]} />
// );
// const docs = [
//   {
//     uri: "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf",
//   }, // Remote file
// ];

// return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;

}