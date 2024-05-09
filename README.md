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
