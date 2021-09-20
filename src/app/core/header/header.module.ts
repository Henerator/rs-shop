import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { LocationPopUpComponent } from './location-pop-up/location-pop-up.component';
import { NavigationBlockComponent } from './navigation-block/navigation-block.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryNavComponent } from './category-nav/category-nav.component';
import { AccountBlockComponent } from 'src/app/components/account-block/account-block.component';

@NgModule({
  declarations: [HeaderComponent, LocationPopUpComponent, NavigationBlockComponent, CatalogComponent, CategoryNavComponent, AccountBlockComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
