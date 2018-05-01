import { Component, OnInit, NgModule } from '@angular/core';
import { DataAccess } from '../services/dataaccess.service';
import { Subject, Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/distinctUntilChanged';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { distinctUntilChanged } from 'rxjs/operator/distinctUntilChanged';
import { switchMap } from 'rxjs/operator/switchMap';

declare var toastr: any;

@Component({
  selector: 'app-gigs',
  templateUrl: './section.gigs.component.html',
  providers: [DataAccess]
})

export class SectionGigsComponent implements OnInit {
  keyUp: any;
  public loading = true;

  public roomData: any;
  public roomGroups: any;
  public roomDirect: any;
  public accessToken: any = '';
  public roomList: { id: string, lastActivity: Date, created: Date, lastMessage: string, title: string, type: string, lastMessageBy: string }[] = [];
  public displayRoomList: { id: string, lastActivity: Date, created: Date, lastMessage: string, title: string, type: string, lastMessageBy: string }[] = [];
  public roomTypeSelection: any = 'all';
  public roomSearch: any = '';
  public sortField: string = 'title';
  public roomListSelection: string = 'recent';

  private searchTerms = new Subject<any>();
  private initialLoad: any = true;

  constructor(private _dataaccess: DataAccess) { }

  ngOnInit(): void {

    this.loading = true;
    this.configureToastr();
    this.loadRoomData();
  }

  private loadRoomData() {
    this.loading = true;

    this._dataaccess.getRooms(this.accessToken, 'all')
      .subscribe(
        r => {
          r.items.forEach(room => {

            let currentRoom = this.roomList.filter(r => r.id == room.id)[0];

            if (currentRoom === undefined) {
              this.roomList.push({
                "id": room.id,
                "lastActivity": room.lastActivity,
                "created": room.created,
                "title": room.title, "type": room.type,
                "lastMessage": '',
                "lastMessageBy": ''
              });

              this.getLastMessageForRoom(room.id);


            }
            else {

              if (new Date(currentRoom.lastActivity) < new Date(room.lastActivity)) {
                this.getLastMessageForRoom(room.id);
              }

              currentRoom.created = room.created;
              currentRoom.lastActivity = room.lastActivity;
              currentRoom.title = room.title;
            }
          });

          this.sortList();
          this.loading = false;

          Observable.interval(3000).take(1).subscribe(x => {
            this.loadRoomData();
          });

        },
        e => {
          console.log(e);
          Observable.interval(3000).take(1).subscribe(x => {
            this.loadRoomData();
          });
        });

    this.initialLoad = false;
  }

  public sendMessage(roomId: any, messageText: any): void {
    this._dataaccess.sendMessage(this.accessToken, roomId, messageText);
  }

  public getLastMessageForRoom(roomId: any): void {
    let msg = '';
    this._dataaccess.getRoomLatestMessage(this.accessToken, roomId)
      .subscribe(
        r => {
          let i = this.roomList.filter(r => r.id == roomId)[0];
          i.lastMessage = r.items[0].text;
          i.lastMessageBy = r.items[0].personEmail;

          if (this.initialLoad === false) {
            toastr.info(i.lastMessageBy + ': ' + i.lastMessage);
          }
        },
        e => console.log(e));
  }

  public filterList(event: any) {
    this.sortList();
  }

  private sortList() {

    let currentDate = new Date();
    let roomDate = new Date();
    if (this.roomListSelection === 'recent')
      roomDate.setDate(currentDate.getDate() - 7);
    else
      roomDate.setDate(currentDate.getDate() - 730);

    this.roomDirect = this.roomList.filter(r =>
      r.type === 'direct'
      && (this.roomSearch === '' || r.title.toLowerCase().indexOf(this.roomSearch.toLowerCase()) !== -1)
      && new Date(r.lastActivity) >= roomDate);
    this.roomGroups = this.roomList.filter(r =>
      r.type === 'group'
      && (this.roomSearch === '' || r.title.toLowerCase().indexOf(this.roomSearch.toLowerCase()) !== -1)
      && new Date(r.lastActivity) >= roomDate);

    if (this.roomTypeSelection === 'direct') {
      this.displayRoomList = this.roomList.
        filter(r =>
          r.type === this.roomTypeSelection
          && new Date(r.lastActivity) >= roomDate
          && (this.roomSearch === ''
            || r.title.toLowerCase().indexOf(this.roomSearch.toLowerCase()) !== -1));
    }

    if (this.roomTypeSelection === 'group') {
      this.displayRoomList = this.roomList.
        filter(r =>
          r.type === this.roomTypeSelection
          && new Date(r.lastActivity) >= roomDate
          && (this.roomSearch === '' || r.title.toLowerCase().indexOf(this.roomSearch.toLowerCase()) !== -1));
    }

    if (this.roomTypeSelection === 'all') {
      this.displayRoomList = this.roomList.
        filter(r =>
          r.title.toLowerCase().indexOf(this.roomSearch.toLowerCase()) !== -1
          && new Date(r.lastActivity) >= roomDate);
    }

    if (this.sortField === 'title') {

      this.displayRoomList = this.displayRoomList.sort((l, r): any => {
        if (l.title < r.title) return -1;
        if (l.title > r.title) return 1;
        return 0;
      });

      this.roomDirect = this.roomDirect.sort((l, r): any => {
        if (l.title < r.title) return -1;
        if (l.title > r.title) return 1;
        return 0;
      });

      this.roomGroups = this.roomGroups.sort((l, r): any => {
        if (l.title < r.title) return -1;
        if (l.title > r.title) return 1;
        return 0;
      });
    }

    if (this.sortField === 'activity') {
      this.displayRoomList = this.displayRoomList.sort((l, r): any => {
        if (l.lastActivity > r.lastActivity) return -1;
        if (l.lastActivity < r.lastActivity) return 1;
        return 0;
      });

      this.roomDirect = this.roomDirect.sort((l, r): any => {
        if (l.lastActivity > r.lastActivity) return -1;
        if (l.lastActivity < r.lastActivity) return 1;
        return 0;
      });

      this.roomGroups = this.roomGroups.sort((l, r): any => {
        if (l.lastActivity > r.lastActivity) return -1;
        if (l.lastActivity < r.lastActivity) return 1;
        return 0;
      });
    }
  }

  public messageTextKeyUp(event: any, roomId: any, messageText: any, item: any) {       

    if(event.code === 'Enter' || event.keyCode === 13) {
      this.sendMessage(roomId, messageText);
      
    }
  }

  private configureToastr() {
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "500",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
  }
}
