import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sevices',
  templateUrl: './sevices.component.html',
  styleUrls: ['./sevices.component.css']
})
export class SevicesComponent{

  links =  [
    {
      template: 'Strategy',
      icon: 'timeline',
      content: 'We conduct extensive interviews to fully understand the concept and vision of your idea. We create and validate your product strategy through in-depth competitive analysis and by helping you understand and target your customers’ core needs through user research, focus groups, and customer personal workshops.',
  },
    {
      template: 'Design',
      icon: 'brush',
      content: '                Focused requirements ensure the plans are clear and approved – making sure we’re on the same page before we build anything. This informs the project scope so we can begin designing full site architecture, detailed wireframes, and the overall look and feel of your platform. We develop products that are scalable, secure, and cutting edge – allowing you to stay one step ahead of the competition.',
  },
    {
      template: 'Development',
      icon: 'developer_mode',
      content: '                We believe that the engineers who can do anything, will do the right thing. That’s why we have teams of developers each specializing in a different programming language. So we don’t shoehorn your project to one technology – we fit the best-of-breed technology to your project.',
  },
    {
      template: 'Support',
      icon: 'contact_support',
      content: '                We don’t drop the ball at the end of projects. We can provide any and all technical management, including installing hardware to a hosting facility, setting up development, quality assurance, staging & production environments – and then provide the ongoing maintenance and operations of the entire platform.',
  }

];


  constructor() { }


}
