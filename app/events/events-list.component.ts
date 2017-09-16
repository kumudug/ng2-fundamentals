import { Component, OnInit } from '@angular/core'
import { EventSerice } from './shared/events.service'

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr/>
        <!--<event-thumbnail [event]="event1" (eventClick)="handleEventClicked($event)"></event-thumbnail>-->
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail #thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
        <!--<event-thumbnail #thumbnail *ngFor="let event of events" [event]="event"></event-thumbnail>-->
        <!--<button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>-->
    </div>
    `
})
export class EventsListComponent implements OnInit {
    events: any[]
    constructor(private eventService: EventSerice) {
        this.events = this.eventService.getEvents();
    }

    ngOnInit() {
        this.events = this.eventService.getEvents()
    }

    // handleEventClicked(data){
    //     console.log('received:', data);
    // }
}