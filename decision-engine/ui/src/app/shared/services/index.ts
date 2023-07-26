import { DataService } from './data.service';
import { WorkflowDataService } from './workflow.service';

export const services = [WorkflowDataService, DataService];

export * from './data.service';
export * from './workflow.service';
