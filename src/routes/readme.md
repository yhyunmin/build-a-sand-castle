* 탠스택 라우터에서는 file based를 추천함  
* 앞에 언더바는 URL에 노출되지 않음  
* .(comma)를 이용해 중첩 라우팅을 구현 할 수있음 (flat nested)   
* 또는 폴더로 중첩하여 표현가능.(folder nested)
* 폴더 효율을 위해 잘 버무려서 사용하기
* router에서 권한관리(토큰 등)와 같은 렌더링 하기전에 받아와야하는 데이터는 beforeLoad 키를 이용해서 관리 가능.
* beforeLoad에서 context를 받아오기위해 `<RouterProvider context={{키}}>`를 작성
* context 사용을 위해 ```ts export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
  });``` 같이 작성
* lazy-loading 작성
  1. 파일뒤에 .lazy.tsx 붙이면, 해당 엔드포인트로 접근시 데이터를 가져온다.
  2. 최적화에 좋음
  3. 파일명은 ***.lazy.tsx / 불러오는 Route 메소드는 createLazyFileRoute() 나머지는 같음
