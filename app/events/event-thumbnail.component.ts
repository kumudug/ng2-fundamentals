import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngSwitch]="event?.time" [ngClass]="{green: event?.time === '8:00 am', bold: (event?.time === '8:00 am' || event?.time === '10:00 am')}">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event.location.address}}</span>
            <span class="pad-left">{{event.location.city}}, {{event.location.contry}}</span>
        </div>
        <div [hidden]="!event?.onlineUrl">
            Online URL: {{event.onlineUrl}}
        </div>
        <!-- <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button> -->
    </div>
    `,
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb }
    `]
})
export class EventThumbnailComponent {
    @Input() event:any
    // @Output() eventClick = new EventEmitter()

    // handleClickMe(){
    //     this.eventClick.emit(this.event.name)
    // }

    // logFoo(){
    //     console.log('foo');
    // }
}