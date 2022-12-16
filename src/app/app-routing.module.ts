import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent} from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component'
import { ForexComponent } from './forex/forex.component';
import { LoginComponent} from './login/login.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { OtentikasiGuard } from './otentikasi.guard';
import { RegisterComponent} from './register/register.component';


const routes: Routes = [
  { path: "admin", component: AdminComponent },
  { path: "dashboard", component: DashboardComponent, canActivate : [OtentikasiGuard] },
  { path: "dashboard2", component: Dashboard2Component, canActivate : [OtentikasiGuard] },
  { path: "dashboard3", component: Dashboard3Component },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "login", pathMatch: "full"},
  { path: "register", component: RegisterComponent },
  { path: "forex", component : ForexComponent, canActivate : [OtentikasiGuard]},
  { path: "mahasiswa", component: MahasiswaComponent, canActivate : [OtentikasiGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
