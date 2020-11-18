import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnDestroy,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
  @Input("srvElement") element: Element;
  @Input("name") name: string;

  constructor() {
    console.log("Constructor called!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called!");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called!");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called!");
  }
}
