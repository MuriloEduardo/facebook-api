import { Component, OnInit } from '@angular/core';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AvisosService } from './../avisos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  avisos$: Observable<any[]>;
  error$ = new Subject<boolean>();

  constructor(private service: AvisosService) { }

  ngOnInit() {
    this.onRefresh();
  }
  
  onRefresh() {
    this.avisos$ = this.service.list()
      .pipe(
        catchError(error => {
          console.error(error);
          this.error$.next(true);
          return empty();
        })
      );
  }

}
