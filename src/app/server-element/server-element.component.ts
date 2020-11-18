import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ContentChild,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy, AfterViewInit {
  @Input("srvElement") element: Element;
  @Input("name") name: string;
  @ViewChild("header", { static: true }) header: ElementRef;
  @ContentChild("contentParagraph", { static: true })
  contentParagraph: ElementRef;

  constructor() {
    console.log("Constructor called!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called!");
    console.log(
      "Text content of paragraph: " +
        this.contentParagraph.nativeElement.textContent
    );
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called!");
  }

  ngAfterViewInit(): void {
    console.log("text: " + this.header.nativeElement.textContent);
    console.log(
      "Text content of paragraph: " +
        this.contentParagraph.nativeElement.textContent
    );
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called!");
  }
}
