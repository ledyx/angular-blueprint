## 프로젝트 설정


### 프로젝트 생성

```
ng new angular-blueprint --routing true --style scss --skip-tests true
```

### Style 설정

#### CSS

```bash
npm i bulma
npm i @fortawesome/fontawesome-free@5.1.0-9
```

`angular.json`
```json
    "build": {
        ...
        "styles": [
              "node_modules/@fortawesome/fontawesome-free/css/all.css",
              "node_modules/bulma/css/bulma.min.css",
              "src/styles.scss"
            ],
        ...
    },
    ...
    "test": {
        ...
        "styles": [
              "node_modules/@fortawesome/fontawesome-free/css/all.css",
              "node_modules/bulma/css/bulma.min.css",
              "src/styles.scss"
            ],
        ...
    },
```

#### Font

`styles.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');

* {
    font-family: 'Nanum Gothic', sans-serif;
}
```


### 환경 변수 파일 설정

    angluar-cli 15부터 `environment.ts`, `environment.prod.ts `를 생성하지 않기 때문에 수동 생성 및 설정 필요.

- [Angular v15 is now available!
](https://blog.angular.io/angular-v15-is-now-available-df7be7f2f4c8) - `CLI improvements` 참조

- [Building and serving Angular apps
](https://angular.io/guide/build)에 따라 작성한다.


#### 환경 변수 파일

```
angular-blueprint/src/environments
├ environment.ts
┗ environment.prod.ts
```

```typescript
export const environment = {
};
```

#### 빌드 환경에 맞게 파일 교체 설정

`angular.json`
```json
"configurations": {
  "production": {
    "fileReplacements": [
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.prod.ts"
      }
    ],
    …
```

### Routing Strategy

[PathLocationStrategy](https://angular.io/api/common/PathLocationStrategy)를 사용한다.

`src/app.module.ts`
```typescript
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

...
@NgModule({
    ...
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy }
    ],
    ...
});
...
```

### Proxying to a backend server

- [Proxying to a backend server](https://angular.io/guide/build#proxying-to-a-backend-server)

`src/proxy.conf.json`
```json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false
  }
}
```

- 서버에 느슨하게 연결하여 테스트할 경우

```bash
ng serve --proxy-config proxy.conf.json
```

- 서버에 완전히 접착해서 테스트 및 배포 경우

`angular.json`
```json
…
"architect": {
  "serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
      "browserTarget": "your-application-name:build",
      "proxyConfig": "src/proxy.conf.json"
    },
…
```