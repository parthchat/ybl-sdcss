import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatSortModule, MatSelectModule, MatInputModule, MatBadgeModule, MatDialogModule, MatSnackBarModule, MatProgressSpinnerModule, MatCheckboxModule, MatProgressBarModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatAutocompleteModule, MatExpansionModule, MatStepperModule, MatBottomSheetModule, MatButtonToggleModule, MatChipsModule, MatDividerModule, MatRippleModule, MatSliderModule, MatSlideToggleModule, MatTabsModule, MatTreeModule, MAT_DIALOG_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_DATE_LOCALE } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';

const materialModules = [
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatBadgeModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatStepperModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatDividerModule,
  MatRippleModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatTreeModule,
  FormsModule,
  HttpClientModule,
];
@NgModule({
  imports: [
    CommonModule,
    materialModules
  ],
  declarations: [],
  exports: [
    materialModules
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: true,
        panelClass: 'm-mat-dialog-container__wrapper',
        height: 'auto',
        width: '900px'
      }
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      }
    },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: LOCALE_ID, useValue: "en-GB" }
  ]

})
export class MaterialModule { }
