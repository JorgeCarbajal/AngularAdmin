// RUTAS
import { PAGES_ROUTES } from './page.routes';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/Shared.module';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/graficas/grafico-dona.component';




@NgModule({
    declarations: [
      DashboardComponent,
      ProgressComponent,
      Graficas1Component,
      PagesComponent,
      IncrementadorComponent,
      GraficoDonaComponent
    ],
    imports:
    [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ]
})

  export class PagesModule {}
