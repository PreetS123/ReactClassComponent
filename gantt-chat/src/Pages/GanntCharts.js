import React from 'react'
import { ColumnDirective, GanttComponent } from '@syncfusion/ej2-react-gantt';
import {projectData} from '../data';
import { Card, CardBody } from 'reactstrap';

export const GanntCharts = () => {

   const taskValues={
    id:"TaskID",
    name:"TaskName",
    startDate:"StartDate",
    endDate:"EndDate",
    duration:"Duration",
    progress:"Progress",
    child:'subtasks'
   }

  return (
    <div className='page-content'  style={{marginTop:'150px',border:'1px solid'}}>
      <div className='container-fluid'>
        <Card>
          <CardBody>
            <div>
       <GanttComponent
         viewType='ResourceView'
         dataSource={projectData}
         taskFields={taskValues}
        //  timelineSettings={{timelineViewMode:'Month'}}
         >        
         <ColumnDirective field='TaskID' headerText='ID'></ColumnDirective> 
         <ColumnDirective field='TaskName' headerText='Name' ></ColumnDirective>
         <ColumnDirective field='StartDate' ></ColumnDirective>
         <ColumnDirective field='Duration'></ColumnDirective>
       </GanttComponent>
       </div>
       </CardBody>
       </Card>
       </div>
    </div>
  )
}
