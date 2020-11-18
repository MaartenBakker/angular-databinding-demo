import { Component } from "@angular/core";
import { Element } from "./model/element/element.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [
    { type: "server", name: "testServer", content: "this is a test" },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push(
      new Element("server", serverData.serverName, serverData.serverContent)
    );
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push(
      new Element(
        "blueprint",
        blueprintData.serverName,
        blueprintData.serverContent
      )
    );
  }

  onChangeFirst() {
    this.serverElements[0].name = "Changed!";
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
