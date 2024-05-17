# 모래장에서 모래성 쌓기

## 1. Prettier

<hr>

### 설치 ( Intellij )

    1. Intellij 플러그인 Prettier 설치
    2. cmd 에서 pnpm setup 하여 global 폴더 만들기 ( 컴퓨터 전체 적용 )
    3. pnpm bin -g 통해 폴더경로 찾기
    4. pnpm add -g prettier 로 전역 폴더로 prettier 추가.
    5. 인텔리제이에서 파일 - 설정 - prettier 매뉴얼 경로 설정 후 전역 폴더 경로 설정 
    6. 저장시 자동 실행 체크.

### Prettier 설정

> 파일명 `.prettierrc` or `.prettierrc.json`

```json

{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}

```

## 2.Day.js

날짜 관련 라이브러리  
`components/_dayjs/`

api의 createdAt과 같은 "UTC 기준의" 스트링을 **10시간 전** 과 같이 사용 가능.

  > tsconfig.json 에서 수정을 해줘야 import가 쉬워진다.
```json

  {
  "compilerOptions": {
    /* dayjs typescript */
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```



    dayjs.extend(relativeTime); // .from .to .fromNow .toNow 에 대한 상대 시간을 가져옴.

    dayjs.locale("ko"); // timezone이 변경 되지 않음.

    dayjs.extend(utc); // timezone 플러그인을 추가할 때 필요함 utc
    dayjs.extend(timezone); // 타임존과 관련된 기능 

    dayjs.tz.setDefault('Asia/Seoul'); // 타임존을 변경할 때 사용. 변경된 객체는 .tz()로 이용
     => dayjs().tz().format() 과같이 사용


> 번외 : input number 가 쓰레기인 이유
> 1. maxLength안됨
> 2. max min 은 최대자리수가아닌 최대값임.
> 3. 직접입력(타이핑)으로 string입력가능 (?)
> 4. 기상천외한 숫자 입력가능 (음수, e , + , 소수점) 이를 막는 방법이 없음
> 5. max min 으로 막아뒀대도, 우회할 수 있음
> 6. 결론은  inputmode ="numeric"과 pattern=[0-9]* 를 써라 


## 3.@tanstack router

> 타입기반 라우터 라이브러리

### static Routes
   
    1. flat router : 파일명에 따라 rotuePath가 정해짐. 경로를 쉽게 확인 할 수 있음.  
    2. 핵심 기본 원칙 : slug명으로짓는다 ex) index.lazy.tsx(/about).  
    3. 동적 페이지는 .(점)으로 구분 짓는다 ex) about.$postId.tsx(/about/$postId).  
    4. 예시 ) settings 페이지 내의 profile 탭을 본다면   
    4.1 ) settings.tsx로 settings 라우팅, settings.profile.tsx 로 라우팅 구성  
    (기존 폴더 라우팅에선 settingds 폴더안에 profile.tsx로 라우팅을 구성함)   
    5. 루트 라우트는 전체 트리의 최상위 경로. 다른 모든 경로들을 자식으로 포함함. 어떤 경로와 매칭되지 않아도 항상 렌더링되는 경로  
    6. 루트라우트는 모든 경로를 접근할 수 있음 (loader,components, search params 등 )  
    7. `createRootRoute()` 를 통해 생성,  
    8. rootRoute 만 createRootRoute(), 다른 route 들은 createFileRoute()() 사용

### index Routes

    1. 인덱스 라우트는 하위경로와 일치 하지않고, 상위경로와 정확하게 일치하는 라우트를 대상으로 함.
    2. routes/about/index.lazy.tsx 참고
    3. about.tsx가아닌 , about 폴더에 index.tsx로 작업 가능

### Dynamic Route Segments

    1. $ 네이밍을 통해서 동적 라우트를 설정 할 수 있음.
    2. 세그먼츠는 createFileRoute 의 useParam으로 가져올 수 있음.
    3. const { postId } = Route.useParams();
    4. 더많은 경로를 원하면 post.$.tsx 와 같이 만듬
### routeTree 생성  
    1. `$npm i @tanstack/router-cli` 설치 후 $tsr generate 명령어를 통해, 라우트를 자동 생성 할 수 있음.
    2. src/routes폴더만들기
    3. `__root.tsx`만들기

### routeTree.gen.ts 자동 생성
    1. $tsr watch


### pathless routes
    1. pathless라우트는, 밀줄이 앞에 붙는 라우트 *_
    2. 직접 라우트에 관여 없이, 컴포넌트를 만들 수 있다. wrapper component
    3. `_watcheslayout.watches.tsx`로 제작한다면 엔드포인트는 /watches
    4. _watcheslayout.tsx의 렌더링도 포함됨

### non-nested Routes 
    1. 접미사로 _ 로 붙여 사용할 수 있다. 
    2. 말 그대로 중첩되지 않는 라우트. 
    3. 엔드포인트는 따라가고싶지만, 렌더링을 중첩하기 싫을 때 사용
    4. (posts/deep 의 경로를 사용하지만, posts의 레이아웃을 비사용 하고 싶을 때)

### lazy
    1. 파일뒤에 .lazy.tsx 붙이면, 해당 엔드포인트로 접근시 데이터를 가져온다.
    2. 최적화에 좋음
    3. 파일명은 ***.lazy.tsx / 불러오는 Route 메소드는 createLazyFileRoute() 나머지는 같음

### navigation
    1. <Link> :  기존 react 와같음.
    2. useNavigate : Link 태그말고 훅이용해서 이동
    3. <Navigate> : 렌더링 하지않고 이동
    4. Router.navigate() : 탠스택 라우터의 강력한 기능 중하나 useNavigate()와 비슷하나, but router 어디든 이동 할 수 있음

## 4.msw 

## 5.tailwind

## 6.recharts 

## 7.framer motion
