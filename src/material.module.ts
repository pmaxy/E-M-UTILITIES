import { NgModule } from "@angular/core";
import { MatInputModule} from "@angular/material/input";
import { MatSelectModule} from "@angular/material/select";
import { MatCardModule} from "@angular/material/card";
import { MatRadioModule} from "@angular/material/radio";
import { MatCheckboxModule} from "@angular/material/checkbox";
import { MatTableModule} from "@angular/material/table";
import { MatPaginatorModule} from "@angular/material/paginator";
import { MatSortModule} from "@angular/material/sort";
import { MatDialogModule} from "@angular/material/dialog";
import { MatButtonModule, MatIconAnchor, MatIconButton } from "@angular/material/button";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { MatIconModule } from "@angular/material/icon";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ReactiveFormsModule } from "@angular/forms";




@NgModule({
    imports:[
        
       
    ],
    exports:[
     MatCardModule,
     MatInputModule,
     MatSelectModule,
     MatRadioModule,
     MatDialogModule,
     MatCheckboxModule,
     MatTableModule,
     MatPaginatorModule,
     MatSortModule,
     MatButtonModule,
     LeafletModule,
     MatIconModule,
     FontAwesomeModule,
     ReactiveFormsModule
  
     

    ]
})
export class MaterialModule {}
