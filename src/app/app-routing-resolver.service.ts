import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
 
import { WorkflowService } from './workflow/workflow.service';
 
@Injectable()
export class WorkFlowResolver {

  constructor(private cs: WorkflowService, private router: Router) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   // console.log("cs: WorkflowService :: '", this.cs);
    //console.log("route: ActivatedRouteSnapshot :: '", route); 
  //  console.log("state: RouterStateSnapshot :: '", state);
    //console.log("state: RouterStateSnapshot :: '", this.router);

    let invalidStep = this.cs.getFirstInvalidStep(state.url);
    if(invalidStep.length>0) {
        console.log("Redirected to '" + invalidStep + "' state which it is the first invalid step.");
        this.router.navigate([invalidStep]);
    }
  }
}