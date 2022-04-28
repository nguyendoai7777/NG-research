import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { debounce, debounceTime, fromEvent } from "rxjs";

interface DayProps {
  label: string;
  isSelected: boolean;
}

@Component({
  selector: 'app-day-in-week-picker',
  templateUrl: './day-in-week-picker.component.html',
  styleUrls: ['./day-in-week-picker.component.scss']
})
export class DayInWeekPickerComponent implements OnInit {
  @ViewChildren('capsule') capsuleList!: QueryList<ElementRef<HTMLElement>>;
  daysOfWeek: DayProps[] = [
    {
      label: 'Monday',
      isSelected: false,
    },
    {
      label: 'Tuesday',
      isSelected: false,
    },
    {
      label: 'Wednesday',
      isSelected: false,
    },
    {
      label: 'Thursday',
      isSelected: false,
    },
    {
      label: 'Friday',
      isSelected: false,
    },
    {
      label: 'Saturday',
      isSelected: false,
    },
    {
      label: 'Sunday',
      isSelected: false,
    },
  ];
  firstMouseClickPosition = {
    x: 0,
    y: 0
  }
  mousemovePosition = {
    x: 0,
    y: 0
  }
  lastElementClicked = {
    x: 0,
    y: 0
  }
  constructor(
    private el: ElementRef<HTMLElement>
  ) { }
  observer = (val: any) => {

      console.log(val)
  }
  /*@HostListener('mousemove', ['$event']) onMousemove = (e: MouseEvent) => {
    console.log('mouse Move', this)
  }

  @HostListener('mouseover', ['$event']) onMouseover = (e: MouseEvent) => {
    console.log('mouse Over', this)
  }*/

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'mousemove').pipe(
      debounceTime(100)
    ).subscribe((e) => {
      const me = e as MouseEvent;
      this.mousemovePosition = {
        x: me.x,
        y: me.y
      }
      const selected = this.daysOfWeek.filter((day) => day.isSelected)
      const lastSelected = selected[selected.length - 1];
      const templateList: ElementRef<HTMLElement>[] =  this.capsuleList['_results'];
      const templateListSelected = templateList.filter((e) => e.nativeElement.className.includes('selected'));
      const lastTemplateListSelected = templateListSelected[templateListSelected.length - 1];
      if(lastTemplateListSelected) {
        this.lastElementClicked = {
          x: lastTemplateListSelected.nativeElement.offsetLeft,
          y: lastTemplateListSelected.nativeElement.offsetTop + lastTemplateListSelected.nativeElement.offsetWidth
        }
        if(this.mousemovePosition.x > this.lastElementClicked.x) {
          console.log('add class active di')
        } else {
          console.log('dung lam gi ca')
        }
      // console.log('mousemove', this.lastElementClicked, {x: lastTemplateListSelected.nativeElement.offsetLeft, y: lastTemplateListSelected.nativeElement.offsetTop})
      }
    })

    fromEvent(this.el.nativeElement, 'mouseover').pipe(
      debounceTime(100)
    ).subscribe((e) => {
      const me = e as MouseEvent;
      this.mousemovePosition = {
        x: me.x,
        y: me.y
      }

      // console.log('mouseover', this.mousemovePosition);
    })
    /*this.el.nativeElement.addEventListener('mousemove', (e) => {
      console.log('mouse move');
    });
    this.el.nativeElement.addEventListener('mouseover', (e) => {
      console.log('mouse over');
    });*/
  }
  onSelectOne(event: MouseEvent, day: DayProps, index: number) {
    let currentDay = this.daysOfWeek[index];
    currentDay.isSelected = !currentDay.isSelected;
    this.firstMouseClickPosition = {
      x: event.x,
      y: event.y
    }
  }
}
