import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
// import { DataResolverService } from './resolver/data-resolver.service';
const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },
  
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule',canActivate: [AuthGuard]}, 
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'feed', loadChildren: './list/list.module#ListPageModule', canActivate: [AuthGuard] },
  { path: 'news', loadChildren: './pages/news/news.module#NewsPageModule', canActivate: [AuthGuard] },
  { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule', canActivate: [AuthGuard] },
  { path: 'feedback', loadChildren: './pages/feedback/feedback.module#FeedbackPageModule', canActivate: [AuthGuard] },
  { path: 'student', loadChildren: './pages/student/student.module#StudentPageModule', canActivate: [AuthGuard] },
  { path: 'blog', loadChildren: './pages/student/blog/blog.module#BlogPageModule', canActivate: [AuthGuard] },
  { path: 'homework', loadChildren: './pages/student/homework/homework.module#HomeworkPageModule', canActivate: [AuthGuard] },
  { path: 'info', loadChildren: './pages/student/info/info.module#InfoPageModule', canActivate: [AuthGuard] },
  { path: 'grading', loadChildren: './pages/student/grading/grading.module#GradingPageModule', canActivate: [AuthGuard] },
  { path: 'cbcgrading', loadChildren: './pages/student/cbcgrading/cbcgrading.module#CbcGradingPageModule', canActivate: [AuthGuard] },
  { path: 'analytics', loadChildren: './pages/student/analytics/analytics.module#AnalyticsPageModule', canActivate: [AuthGuard] },
  { path: 'analysis', loadChildren: './pages/reports/analysis/analysis.module#AnalysisPageModule', canActivate: [AuthGuard] },
  { path: 'fees', loadChildren: './pages/student/fees/fees.module#FeesPageModule', canActivate: [AuthGuard] },
  { path: 'gallery', loadChildren: './pages/student/gallery/gallery.module#GalleryPageModule', canActivate: [AuthGuard] },
  { path: 'grades', loadChildren: './pages/reports/grades/grades.module#GradesPageModule', canActivate: [AuthGuard] },
  { path: 'resources', loadChildren: './pages/student/resources/resources.module#ResourcesPageModule', canActivate:[AuthGuard]},
  { path: 'attendance', loadChildren: './pages/student/attendance/attendance.module#AttendancePageModule', canActivate:[AuthGuard]},
  { path: 'feesReport', loadChildren: './pages/reports/fees/fees.module#FeesPageModule', canActivate: [AuthGuard] },
  { path: 'changepassword', loadChildren: './changepassword/changepassword.module#ChangepasswordPageModule', canActivate: [AuthGuard] },
  { path: 'phone', loadChildren: './pages/auth/phone/phone.module#PhonePageModule' },
  { path: 'contact', loadChildren:'./pages/contact/contact.module#ContactPageModule', canActivate: [AuthGuard]},
  { path: 'menu', loadChildren:'./pages/menu/menu.module#MenuPageModule', canActivate: [AuthGuard]},
  { path: 'forgot-password', loadChildren: './pages/auth/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

