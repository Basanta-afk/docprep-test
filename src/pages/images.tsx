import { Button } from "@mantine/core";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";

const Images = () => {
  const contentToPrintRef = useRef<any>(null);

  const generatePDF = async () => {
    const canvas = await html2canvas(contentToPrintRef.current);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`image-to-pdf.pdf`);
  };
  return (
    <main className="flex">
      <div ref={contentToPrintRef} className="flex">
        <div>test</div>
      </div>
      <div className="pl-md">
        <Button onClick={() => generatePDF()}>PDF</Button>
      </div>
    </main>
  );
};

export default Images;
