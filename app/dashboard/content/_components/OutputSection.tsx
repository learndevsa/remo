import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import Link from 'next/link';
import html2canvas from 'html2canvas';
import jdpdf, { jsPDF } from 'jspdf';
import downloadpdf from './FormSection'
interface props{
aiOutput:any;
}

export default function OutputSection({aiOutput}:props) {
    const editorRef:any=useRef();
    // const pdfRef:any=useRef(aiOutput); 
    // const downloadPDF=()=>{
    //   const input = pdfRef.current;
    //   html2canvas(input).then((canvas)=>{
    //     const imgData =canvas.toDataURL('image/png');
    //     const pdf = new jsPDF('p','mm','a4',true);
    //     const pdfWidth = pdf.internal.pageSize.getWidth();
    //     const pdfHeight = pdf.internal.pageSize.getHeight();
    //     const imgWidth = canvas.width;
    //     const imgHeight = canvas.height;
    //     const ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight);
    //     const imgX =(pdfWidth-imgWidth*ratio)/2;
    //     const imgY = 70;
    //     pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio, imgHeight*ratio);
    //     pdf.save('abdc.pdf');

    //   });
      
      
    // }    
   
        useEffect(()=>{
        const editorInstance=editorRef.current.getInstance();
        editorInstance.setMarkdown(aiOutput);
    },[aiOutput])


  return (
    <div className='bg-white shadow-lg border rounded-lg'>
        <div className='flex justify-between items-center p-5'>
            <h2 className='font-bold text-lg'>Your result</h2>
            {/* <Button className='flex gap-2'><Copy className='w-4 h-4'/> Copy</Button> */}
        </div>
        {/* <div className='flex justify-between items-center p-5'>
        <Link href={pdfRef}>
             <Button className='flex gap-2'>Download</Button>
        </Link> */}
        {/* </div> */}
       
       <Editor
       
        ref={editorRef}
    initialValue="Your result will appear here.."
    initialEditType="wysiwyg"
    height="500px"
    useCommandShortcut={true}
    onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
   />
  
 
    </div>
  )
}
