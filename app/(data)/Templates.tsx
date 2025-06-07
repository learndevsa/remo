import { Button } from "@/components/ui/button";
import { ButtonIcon } from "@radix-ui/react-icons";



export default[

    {

        Name:'Report Generator',
            desc:'An AI tool that generates Reports. Provide your rough notes and wait for the magic to happen',
            category:'Reports and M.o.M',
            icon:'grammer.svg',
            aiPrompt:'You’re now a report generator. Basically your work is to generate the minutes of meeting for offline/online meeting or report for on ground event. We will provide you a rough draft and you need generate an error free report(add words if required) in the format provided below.  Format -Date: Attendees : (Who all have attended the meeting ) Mode of meeting : (Check whether it’s a offline or an online meeting) Agenda : (Mention what’s the purpose of the meeting ) About the meeting : ( Mention what all happened in the meeting here with sub headings) ',
            slug:'Generate-Reports',
            form:[
            { 
                // label:'Rough draft',
                // field:'input',
                // Name:'text',
                // // required:true
            },
        
            
        
            
            {
                label:'Enter your text here',
                field:'textarea',
                Name:'outline',
                required:true
            }
           
        ]
          
    },

    
    {

        Name:'Meeting Minutes Generator',
            desc:'An AI tool that generates Minutes of meeting.',
            category:'Reports and M.o.M',
            icon:'grammer.svg',
            aiPrompt:'You’re now a report generator. Basically your work is to generate the minutes of meeting for offline/online meeting or report for on ground event. We will provide you a rough draft and you need generate an error free report(add words if required) in the format provided below.  Format -Date: Attendees : (Who all have attended the meeting ) Mode of meeting : (Check whether it’s a offline or an online meeting) Agenda : (Mention what’s the purpose of the meeting ) About the meeting : ( Mention what all happened in the meeting here with sub headings) ',
            slug:'Generate-Meeting-Minutes',
            form:[
            { 
                //  label:'Rough draft',
                //  field:'input',
                //  Name:'text',
                //  required:true
            },
        
            
        
            
            {
                label:'Enter your text here',
                field:'textarea',
                Name:'outline',
                required:true
            }
           
        ]
          
    },
 
    {
        Name:'Rewrite article (Plagiarism Free)',
       desc:'Use this tool to re-write exisiting artcile or blog post',
       icon:'article.svg',
       category:'Rewriting tool',
       slug:'rewrite-article',
       aiPrompt:'Rewrite the given article without any plagiarism in rich text format and add new words if you would feel that its nessecary',
       form:[
        {
            // label:'Provide your article/Blogpost or anyother text document',
            // field:'textarea',
            // Name:'Article',
            // required:true
        },
        {
            label:'Provide your artcile',
            field:'textarea',
            Name:'outline',
            required:true
        }
       ]
    },
         

    {
  
    Name:'Article title Generator',
    desc:'An AI tool that generate an "article title" depends on your article niche',
    category:'Blog',
    icon:'blog.svg',
    aiPrompt:'Give me 5 blog topic idea in bullet wise only   on your niche blog topic',
    slug:'generate-blog-title',
    form:[
       { 
        // label:'Enter your blog niche',
        // field:'input',
        // Name:'Niche',
        // required:true
       },

    
    {
         label:'Enter blog outline',
         field:'textarea',
         Name:'outline',
         required:true
    }
   
]
},



]
