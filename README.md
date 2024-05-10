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

> 날짜 관련 라이브러리  
> `components/_dayjs/`

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

## 3.@tanstack router

> 타입기반 라우터 라이브러리

## 4.framer motion

>

## 5.Tailwind
