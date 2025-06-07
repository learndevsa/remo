"use client"
import React, { useRef, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Item } from '@radix-ui/react-accordion'
import Templates from '@/app/(data)/Templates'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { chatSession } from '@/utils/AiModal'
import Link from 'next/link'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { Result } from 'postcss'
import { log } from 'console'
// import html2canvas from 'html2canvas';
// import jdpdf, { jsPDF } from 'jspdf';

interface PROPS{
    params:{
      'template-slug':string
    }
    
}

interface formData {
  // Define the properties of your formData here
  field1: string;
  field2: string;
  // Add more fields as needed
}
export default function CreateNewContent(props:PROPS) {
   const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);
   const [loading,setLoading]=useState(false);
   const [aiOutput,setAiOutput]=useState<string>('');
   const {user}=useUser();
  //  const pdfRef:any=useRef(); 
  //  const downloadPDF=()=>{
  //    const input = pdfRef.current;
  //    html2canvas(input).then((canvas)=>{
  //      const imgData =canvas.toDataURL('image/png');
  //      const pdf = new jsPDF('p','mm','a4',true);
  //      const pdfWidth = pdf.internal.pageSize.getWidth();
  //      const pdfHeight = pdf.internal.pageSize.getHeight();
  //      const imgWidth = canvas.width;
  //      const imgHeight = canvas.height;
  //      const ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight);
  //      const imgX =(pdfWidth-imgWidth*ratio)/2;
  //      const imgY = 70;
  //      pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio, imgHeight*ratio);
  //      pdf.save('abdc.pdf');

  //    });
     
     
  //  }    
  
   const GenerateAIContent=async (FormData:any)=>{
    setLoading(true);
    const SelectedPrompt=selectedTemplate?.aiPrompt;

    const FinalAIPrompt=JSON.stringify(FormData)+", "+SelectedPrompt;

    const result=await chatSession.sendMessage(FinalAIPrompt);

    console.log(result.response.text());
    setAiOutput(result?.response.text());
    // await SaveInDb(FormData,selectedTemplate?.slug,result?.response.text())
    setLoading(false);
   }

  //  const SaveInDb = async (slug: string, aiResp: string) => {
  //   const result = await db.insert(AIOutput).values({
  //     templateSlug: slug,
  //     aiResponse: aiResp,
  //   });
  // };
    
     
    return (
     <div >
    <Link href={"/dashboard"}>
    <Button>
        <ArrowLeft/> Back
      </Button>
     </Link> 
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
            <FormSection selectedTemplate={selectedTemplate}
            userFormInput={(v:any)=>GenerateAIContent(v)}
            loading={loading}
            />
          <div className='col-span-2' > 
            <OutputSection aiOutput={aiOutput}/>
            {/* <Button onClick={downloadPDF}>
        Download
    </Button> */}
    
          </div>
     </div>
    </div>
  )
}
