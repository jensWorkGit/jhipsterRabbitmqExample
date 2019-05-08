import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#JhipsterRabbitmqExampleRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#JhipsterRabbitmqExampleCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#JhipsterRabbitmqExampleLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#JhipsterRabbitmqExampleDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#JhipsterRabbitmqExampleTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#JhipsterRabbitmqExampleEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#JhipsterRabbitmqExampleJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#JhipsterRabbitmqExampleJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterRabbitmqExampleEntityModule {}
