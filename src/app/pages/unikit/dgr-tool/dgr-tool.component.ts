import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Shared } from '../../../services/shared/shared.module';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-dgr-tool',
  imports: [Shared],
  templateUrl: './dgr-tool.component.html',
  styleUrl: './dgr-tool.component.scss'
})
export class DgrToolComponent {

  uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    onUpload(event: any) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }

    onBasicUpload() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }
/*     excelData: any[] = [];

    onFileUpload(event: any) {
      const file = event.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const binaryStr = e.target.result;
          const workbook = XLSX.read(binaryStr, { type: 'binary' });
  
          // Get first sheet name
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
  
          // Convert sheet to JSON
          this.excelData = XLSX.utils.sheet_to_json(sheet);
        };
        reader.readAsBinaryString(file);
      }
    } */

      excelData: any[] = [];
  columns: any[] = [];
  
    onFileSelect(event: any) {
      const file = event.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const binaryStr = e.target.result;
          const workbook = XLSX.read(binaryStr, { type: 'binary' });
  
          // Get first sheet name
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
  
          // Convert sheet to JSON
          this.excelData = XLSX.utils.sheet_to_json(sheet);
  
          // Generate column headers dynamically
          if (this.excelData.length > 0) {
            this.columns = Object.keys(this.excelData[0]).map(key => ({
              field: key,
              header: key
            }));
          }
        };
        reader.readAsBinaryString(file);
      }
    }

    saveExcel(){
      
    }
}
