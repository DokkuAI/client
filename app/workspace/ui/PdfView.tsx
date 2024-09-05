import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";


export default function PdfView() {

    const newPlugin = defaultLayoutPlugin();

    return (
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl="https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
          plugins={[newPlugin]}
        />
      </Worker>
    );
}