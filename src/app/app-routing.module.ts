import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canLoad: [CheckTutorial]
  },
  {
    path: 'real-property',
    loadChildren: () => import('./real-property/real-property.module').then( m => m.RealPropertyPageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./food/food.module').then( m => m.FoodPageModule)
  },
  {
    path: 'car',
    loadChildren: () => import('./car/car.module').then( m => m.CarPageModule)
  },
  {
    path: 'fashion',
    loadChildren: () => import('./fashion/fashion.module').then( m => m.FashionPageModule)
  },
  {
    path: 'women',
    loadChildren: () => import('./women/women.module').then( m => m.WomenPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'finger',
    loadChildren: () => import('./finger/finger.module').then( m => m.FingerPageModule)
  },
  {
    path: 'eye',
    loadChildren: () => import('./eye/eye.module').then( m => m.EyePageModule)
  },
  {
    path: 'face',
    loadChildren: () => import('./face/face.module').then( m => m.FacePageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'fraud',
    loadChildren: () => import('./fraud/fraud.module').then( m => m.FraudPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'dapp',
    loadChildren: () => import('./dapp/dapp.module').then( m => m.DappPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
