import { BrowserModule } from '@angular/platform-browser';
import { ApplicationModule, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NewcustomerComponent } from './components/newcustomer/newcustomer.component';
import { DeletecustomerComponent } from './components/deletecustomer/deletecustomer.component';
import { UpdatecustomerComponent } from './components/updatecustomer/updatecustomer.component';
import { CustomerService } from './services/customer.service';
import { ShowcustomerComponent } from './components/showcustomer/showcustomer.component';
import { StoreModule, StoreRootModule,Store } from '@ngrx/store';
import { Actions, Effect, EffectsModule, ofType } from '@ngrx/effects'
import { OrdersComponent } from './orders/orders.component';

import * as fromTransaction from '../app/store/transaction.reducer'
import * as fromCounter from '../app/store/counter.reducer';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CustomerComponent,
    NewcustomerComponent,
    DeletecustomerComponent,
    UpdatecustomerComponent,
    ShowcustomerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,    
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'customer', component: CustomerComponent },
      { path: 'new-customer', component: NewcustomerComponent },
      { path: 'update-customer/:id', component: UpdatecustomerComponent },
      { path: 'delete-customer/:id', component: DeletecustomerComponent },      
      { path: 'show-customer/:id', component: ShowcustomerComponent },    

      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'owner', loadChildren: () => import('./components/owner/owner.module').then(m => m.OwnerModule) },
    ]),
    //EffectsModule.forFeature([TransactionEffects]),
     //StoreModule.forRoot({game:fromTransaction.reducer,count:fromCounter.counterReducer}),
     StoreModule.forRoot({count:fromCounter.counterReducer}),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    // EffectsModule.forRoot([CustomerEffect]) 
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
