import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';

export const appRoutes: Routes = [{
    path: '', component: AuthComponent, children: [
        { path: 'dashboard', component: DashboardCrmComponent },
        { path: 'material-widgets', loadChildren: '../material-widgets/material-widgets.module#MaterialWidgetsModule' },
        { path: 'tables', loadChildren: '../tables/tables.module#TablesModule' },
        { path: 'maps', loadChildren: '../maps/maps.module#MapsModule' },
        { path: 'charts', loadChildren: '../charts/charts.module#ChartsModule' },
        // { path: 'chats', loadChildren: '../chats/chat.module#ChatsModule' }, // fix this
        // { path: 'mail', loadChildren: '../mail/mail.module#MailModule' }, // fix this
        { path: 'pages', loadChildren: '../pages/pages.module#PagesModule' },
        { path: 'forms', loadChildren: '../forms/forms.module#FormModule' }, //fix this
        { path: 'guarded-routes', loadChildren: '../guarded-routes/guarded-routes.module#GuardedRoutesModule' },
        { path: 'editor', loadChildren: '../editor/editor.module#EditorModule' }, 
        { path: 'scrumboard', loadChildren: '../scrumboard/scrumboard.module#ScrumboardModule' }, 
        { path: 'teachers', loadChildren: '../teachers/teachers.module#TeachersModule'},
        { path: 'academics', loadChildren: '../academics/academics.module#AcademicsModule'},
        { path: 'students', loadChildren: '../students/students.module#StudentsModule'},
        { path: 'fees', loadChildren: '../fees/fees.module#FeesModule'},
        { path: 'exams', loadChildren: '../exams/exams.module#ExamsModule'},
        { path: 'library', loadChildren: '../library/library.module#LibraryModule'},
        { path: 'email-sms', loadChildren: '../email-sms/email-sms.module#EmailSmsModule'},
        { path: 'reports', loadChildren: '../reports/reports.module#ReportsModule'},
        { path: 'alumnus', loadChildren: '../alumnus/alumnus.module#AlumnusModule'}
    ]
}];
