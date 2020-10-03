import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import{ TransactionService } from '../../../services/transaction.service'
import {homescore,awayscore,resetscore,setscore}  from '../../../store/transaction.actions';


@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  game$:Observable<any>;
  transactionList:Transaction[]=[];


  constructor(private transactionService:TransactionService,private store: Store<{game:number}>) { 
   debugger;
  }

  ngOnInit(): void {
   

    this.game$ = this.store.select('game');

  //  this.store.dispatch( transactionActions.homescore());
   
    //this.transactionService.getTransaction().subscribe(data=>this.transactionList=data);
  }

  homescore()
  {
    alert('hai');
    this.store.dispatch(homescore());
  }

}
