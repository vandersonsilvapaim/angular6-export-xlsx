import { Component } from '@angular/core';
import { ExcelService } from './services/excel.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 6';
  data: any = [{
    audit_change_datetime: '24-04-2019 00:00:00',
    audit_change_username: 'Pedro',
    audit_create_datetime: '24-04-2019 00:00:00',
    audit_create_username: 'maria',
    confidencialidade: 'lista publica',
    id: '200000000013',
    id_tenance: 'EDQM',
    list: 'Método de Administração',
    status: 'Ativa',
    version: '001'
  }];
  constructor(private excelService: ExcelService) {

  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }
}
