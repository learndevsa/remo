// import React from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import aiOutput from './app/dashboard/content/_components/OutputSection'; 
// interface props{
//     aiOutput:any;
//     }
// // Import the component you want to convert to PDF
// const PdfDownloadComponent = () => {
//   const handleDownloadPDF = () => {
//     const input = document.getElementById('aiOutput'); 
//     // Specify the id of the element you want to convert to PDF
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//     //   pdf.addImage(imgData, 'PNG', 0, 0);
//       pdf.save('downloaded-file.pdf'); 
//       // Specify the name of the downloaded PDF file
//     });
//   };
//   return (
//     <div>
//       <aiOutput id ="aiOutput" /> 
//       {/* Ensure to pass the same id to the target component */}
//       <button onClick={handleDownloadPDF}>Download PDF</button>
//     </div>
//   );
// };
// export default PdfDownloadComponent;