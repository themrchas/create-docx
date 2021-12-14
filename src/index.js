
import {
    Document,
    Paragraph,
    Header,
    TextRun,
    AlignmentType,
    HeadingLevel,
    Packer
} from "docx";

import { saveAs } from 'file-saver';



import $ from "jquery";

//import * as fs from "fs";




$(document).ready(function () {
		
	console.log("yes - money");
  //  $("#btnTest").on("click",generateFromTemplate);

	
}); 



export function generateFromDocxTemplate() {
        const doc = new Document({

          styles: {


            default : {

              heading1: {
                  run: {
                      color: "#FF0000",
                      size: 40,
                   },
                   paragraph: {
                    alignment: AlignmentType.CENTER,
                    spacing: {
                    after:1200,
                    }
                   },
              },
           },




            paragraphStyles: [

              {
                id: "defaultParagraph",
                basedOn: "Normal",
                next: "Normal",
                run: {
                   font: "Arial",
                   size: 26,
                   break: 1,

                },
                paragraph: {
                  spacing : {
                    line: 480,
                    after:1200
                  }
                },
                
  
              },
            ],
          },




          sections: [{

            headers: {
              default: new Header({
                  children: [new Paragraph({
                    text: "Header text",
                    heading: HeadingLevel.HEADING_1
                  }),
                  ],
              }),
          },


            properties: {},

            children: [

              new Paragraph({

                style: "defaultParagraph",

                children: [
                  
                  new TextRun({
                    text: "Foo Bar",
                  }),
                  new TextRun({
                    text: "\tYes - Money",
                  }),
                  
                ],
              }),

              new Paragraph({
                style: "defaultParagraph",
                text: "Second paragraph",
              }),

              new Paragraph({
                style: "defaultParagraph",
                text: "Third paragraph",
              }),

              new Paragraph({

                style: "defaultParagraph",

                children: [

                  new TextRun("First line in paragraph 4\n"),
                  new TextRun("Second line in paragraph 4"),

                ],


              }),
              
      
            ],

          }]
        });

       Packer.toBlob(doc).then(blob => {
          console.log(blob);
          saveAs(blob, "example.docx");
          console.log("Document created successfully");
        });
      }     

