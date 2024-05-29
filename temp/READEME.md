
## image rendering
css 속성 `image-rendering` 은 img 태그에서만 작동 됨.
`image-rendering: webkit-optimize-contrast`(webkit 표준)
`image-rendering :crisp-edges` (크롬) 

## transform / position 차이
1. position은 포지셔닝, transform은 디자인 모션의 차이
transform을 이용하면, 태그의 순서나 위치는 그대로지만, 비주얼적으로 이동만 함.
단순 위치 조정은 transform, 목적의 명확성(배치라던가)이 있다면 position
2. position 50% 는 왼쪽 가장자리부터 전체 너비의 50프로 이동
3. transform 50%는 이동하려는 요소의 사이즈의 50% 이동
## flex-basis 
이 효과는 글자만큼 버튼크기를 만들어주고, + padding 으로 그크기를 조정하여 반응형에 맞춰 작동하게끔 함.ㅎ
