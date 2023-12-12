import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'add-category',
    loadChildren: () => import('./add-category/add-category.module').then( m => m.AddCategoryPageModule)
  },
  {
    path: 'edit-category',
    loadChildren: () => import('./edit-category/edit-category.module').then( m => m.EditCategoryPageModule)
  },
  {
    path: 'sub-category',
    loadChildren: () => import('./sub-category/sub-category.module').then( m => m.SubCategoryPageModule)
  },
  {
    path: 'create-sub-category',
    loadChildren: () => import('./create-sub-category/create-sub-category.module').then( m => m.CreateSubCategoryPageModule)
  },
  {
    path: 'edit-sub-category',
    loadChildren: () => import('./edit-sub-category/edit-sub-category.module').then( m => m.EditSubCategoryPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'otp-verify',
    loadChildren: () => import('./otp-verify/otp-verify.module').then( m => m.OtpVerifyPageModule)
  },
  {
    path: 'set-password',
    loadChildren: () => import('./set-password/set-password.module').then( m => m.SetPasswordPageModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then( m => m.EmployeesPageModule)
  },
  {
    path: 'create-employee',
    loadChildren: () => import('./create-employee/create-employee.module').then( m => m.CreateEmployeePageModule)
  },
  {
    path: 'edit-employee',
    loadChildren: () => import('./edit-employee/edit-employee.module').then( m => m.EditEmployeePageModule)
  },
  {
    path: 'expenses',
    loadChildren: () => import('./expenses/expenses.module').then( m => m.ExpensesPageModule)
  },
  {
    path: 'create-expense',
    loadChildren: () => import('./create-expense/create-expense.module').then( m => m.CreateExpensePageModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then( m => m.TransactionPageModule)
  },
  {
    path: 'admin-billdetails',
    loadChildren: () => import('./admin-billdetails/admin-billdetails.module').then( m => m.AdminBilldetailsPageModule)
  },
  {
    path: 'admin-billing',
    loadChildren: () => import('./admin-billing/admin-billing.module').then( m => m.AdminBillingPageModule)
  },
  {
    path: 'admin-order',
    loadChildren: () => import('./admin-order/admin-order.module').then( m => m.AdminOrderPageModule)
  },
  {
    path: 'admin-draft',
    loadChildren: () => import('./admin-draft/admin-draft.module').then( m => m.AdminDraftPageModule)
  },
  {
    path: 'admin-draftbilling',
    loadChildren: () => import('./admin-draftbilling/admin-draftbilling.module').then( m => m.AdminDraftbillingPageModule)
  },
  {
    path: 'admin-history',
    loadChildren: () => import('./admin-history/admin-history.module').then( m => m.AdminHistoryPageModule)
  },
  {
    path: 'admin-historybilling',
    loadChildren: () => import('./admin-historybilling/admin-historybilling.module').then( m => m.AdminHistorybillingPageModule)
  },
  {
    path: 'admin-kot',
    loadChildren: () => import('./admin-kot/admin-kot.module').then( m => m.AdminKotPageModule)
  },
  {
    path: 'admin-prebill',
    loadChildren: () => import('./admin-prebill/admin-prebill.module').then( m => m.AdminPrebillPageModule)
  },
  {
    path: 'admin-prebill-billing',
    loadChildren: () => import('./admin-prebill-billing/admin-prebill-billing.module').then( m => m.AdminPrebillBillingPageModule)
  },
  {
    path: 'admin-preview',
    loadChildren: () => import('./admin-preview/admin-preview.module').then( m => m.AdminPreviewPageModule)
  },
  {
    path: 'staff-billdetails',
    loadChildren: () => import('./staff-billdetails/staff-billdetails.module').then( m => m.StaffBilldetailsPageModule)
  },
  {
    path: 'staff-billing',
    loadChildren: () => import('./staff-billing/staff-billing.module').then( m => m.StaffBillingPageModule)
  },
  {
    path: 'staff-draft',
    loadChildren: () => import('./staff-draft/staff-draft.module').then( m => m.StaffDraftPageModule)
  },
  {
    path: 'staff-history',
    loadChildren: () => import('./staff-history/staff-history.module').then( m => m.StaffHistoryPageModule)
  },
  {
    path: 'admin-preview',
    loadChildren: () => import('./admin-preview/admin-preview.module').then( m => m.AdminPreviewPageModule)
  },
  {
    path: 'staff-preview',
    loadChildren: () => import('./staff-preview/staff-preview.module').then( m => m.StaffPreviewPageModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then( m => m.TablePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
