import { WorkflowActionComponent } from './actions/action.component';
import { EditActionComponent } from './actions/edit-action/edit-action.component';
import { ConditionalComponent } from './conditional/conditional.component';
import {
    EditConditionalComponent
} from './conditional/edit-conditional/edit-conditional.component';
import { WorkflowTriggerComponent } from './trigger/trigger.component';

export const components = [WorkflowTriggerComponent, ConditionalComponent, WorkflowActionComponent];
export const secondaryComponents = [EditConditionalComponent, EditActionComponent];

export * from './actions/action.component';
export * from './conditional/conditional.component';
export * from './conditional/edit-conditional/edit-conditional.component';
export * from './trigger/trigger.component';
