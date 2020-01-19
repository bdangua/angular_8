import { Routes } from "@angular/router";
import { PageoneComponent } from '../components/pageone.component';
import { PagetwoComponent } from '../components/pagetwo.component';
import { PagethreeComponent } from '../components/pagethree.component';
import { ChildoneComponent } from '../components/childone.component';
import { ChildtwoComponent } from '../components/childtwo.component';
import { ChildthreeComponent } from '../components/childthree.component';
import { authGurads } from '../guards/auth.guards';
export const appRoutes:Routes = [
    {path:"page_one/:p_id/:p_name/:p_cost",component:PageoneComponent,
        children:[{path:"child_one/:p_id/:p_name/:p_cost",
                   component:ChildoneComponent}],
     canActivate:[authGurads]
    },
    {path:"page_two",component:PagetwoComponent,
        children:[{path:"child_two",component:ChildtwoComponent}],
     canDeactivate:[authGurads]
    },
    {path:"page_three/:p_id/:p_name/:p_cost",component:PagethreeComponent,
        children:[{path:"child_three/:v_o/:v_t/:v_th",component:ChildthreeComponent}],
     canActivateChild:[authGurads]
    }
];