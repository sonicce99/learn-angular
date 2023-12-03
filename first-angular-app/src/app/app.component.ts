import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";

// selector: Angular가 컴포넌트를 어떻게 참조하지 방법을 설명합니다.
// standalone: 컴포넌트에 ngModule이 필요한지 여부를 설명합니다.
// imports: 컴포넌트의 종속성을 설명합니다.
// template: 컴포넌트의 HTML 마크업 및 레이아웃을 설명합니다.
// styleUrls: 컴포넌트가 배열에서 사용하는 CSS 파일의 URL을 나열합니다.

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img
            class="brand-logo"
            src="/assets/logo.svg"
            alt="logo"
            aria-hidden="true"
          />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "집";
}
