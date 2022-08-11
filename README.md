# 몽글 다이어리

## URL: https://emotions-diary.vercel.app/
![image](https://user-images.githubusercontent.com/107654769/184087207-119c8d22-4dc2-41eb-9427-dff4c27e4c5c.png)

---

## 📝 프로젝트 소개

하루의 작은 일상을 공유하는 커뮤니티로 하루하루 본인들의 소소한 일상이나 기분을
남겨서 월 별로 모아서 볼 수 있게 만든 어플리케이션입니다. 바쁜 일상에 지쳤을때,
기분 좋은 일이 생겼을때, 위로 받고 싶을때에 작지만 확실하게 본인의 하루를 간편하
게 남겨서 공유해보세요! <br/><br/>

## 📓 프로젝트 개요

<li>프로젝트명 : 몽글 다이어리</li>
<li>개발 인원 : 프론트엔드 3명</li>
<li>개발 기간 : 8/5 ~ 8/11</li>
<li>기술 스택: React, Redux(Redux Toolkit), Styled-components, Axios, Javascript, React-router-dom, Moment, React-password-strength-bar, React-icons, Json-server </li>
<li>배포 환경 : Front - Vercel, Back - Heroku</li>
<li>협업 도구 : Git, Slack, Notion, GatherTown, Kakao Talk</li>

### <a href="https://teamsparta.notion.site/5-1a97b6245a0849b7b5d8b31ffd84cfb6">팀 노션</a>

### <a href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5f9870d7-3cd9-45e8-a434-7d70e81c6d6f/%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%80%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%BC_%E1%84%8B%E1%85%AA%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%B7_%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220811T074215Z&X-Amz-Expires=86400&X-Amz-Signature=94129e937761a8e592df780089e1f6805e64b83479adf3eadd8be574cf7b954e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF%25E1%2584%2580%25E1%2585%25B5%25E1%2584%258C%25E1%2585%25A1%25E1%2586%25BC_%25E1%2584%258B%25E1%2585%25AA%25E1%2584%258B%25E1%2585%25B5%25E1%2584%258B%25E1%2585%25A5%25E1%2584%2591%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25A6%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25B7_%25E1%2584%258E%25E1%2585%25AC%25E1%2584%258C%25E1%2585%25A9%25E1%2586%25BC.pdf%22&x-id=GetObject">와이어 프레임</a>

<br/>

## 👨‍👧‍👦 구성원

|   Name    |            Github             |                                   Role                                    |
| :-------: | :---------------------------: | :-----------------------------------------------------------------------: |
| 👧 나소나 |  https://github.com/4775614   |               디자인(와이어프레임, 이미지 등), 상세 페이지                |
| 👦 강인호 | https://github.com/duck9-papa |                       작성 페이지, Front/Back 배포                        |
| 👦 성필상 | https://github.com/lucy-pill  | 회원가입/로그인/상세 페이지 <br/> 전체 레이아웃 설계 <br/>Front/Back 배포 |

<br/>

## ✏️ API설계

### 아키텍처

---

![KakaoTalk_20220811_180828682](https://user-images.githubusercontent.com/107654769/184128677-d8ef0086-cbc6-4ac0-a0ad-2d91c6ecb957.png)

<br/><br/>

# 주요 기능 및 소개

## 🔎 로그인 기능

![KakaoTalk_20220811_170634220](https://user-images.githubusercontent.com/107654769/184092101-616f3187-64a2-40ac-a1e3-7cd74e1887e8.png)![KakaoTalk_20220811_171119572](https://user-images.githubusercontent.com/107654769/184091320-9e22d080-d4f2-4dc1-9bbb-0f9ba6b5b962.png)

### 로그인과 회원가입

처음 페이지에 접속하면 로그인 창으로 연결이 되고, 로그인 혹은 회원가입을 할 수있
습니다.

회원가입 페이지에서는 이메일을 입력한 후 중복 확인을 진행하면 get으로 서버에서
user정보를 받아온 후 일치하는 이메일이 있는지 확인합니다.

확인 후 일치하는 이메일이 없으면 나머지 정보를 입력한 후 post로 서버에 데이터를
보내서 유저 정보를 등록합니다.

그리고 form태그를 사용하여 유효성 검사를 진행했습니다. input type에 email, tel
등 평소에 사용하지 않았던 type을 사용하면서 많은 Javascript의 코드를 줄일 수 있
었습니다.

다시 로그인 창으로 돌아와 정보를 입력하면 get으로 입력한 정보와 일치하는지 대조
한 후 로그인이 됩니다.

이번 프로젝트에서는 redux의 state를 true로 하는것으로 대신하여 간단하게 로그인상
태를 지정했습니다. <br/><br/>

## 🔎 메인 페이지

![KakaoTalk_20220811_173127081](https://user-images.githubusercontent.com/107654769/184094760-6bb9ca6d-0960-4300-a7b3-d6e8aec8899b.png)

로그인을 한 후에 메인페이지에 접속하면 중앙에 월별로 몽글이들이 담겨있는 화면을
볼 수 있다.

메인페이지에 접속하면 state의 is_loaded값이 true이므로 스켈레톤 이미지가 보여지
게 설정해놓았습니다.

스켈레톤은 별도의 패키지는 사용하지 않았으며 이미 상위 컴포넌트의 스타일 설정에
flex와 flex-wrap이 설정되어 있어 단순하게 이미지가 뜰 위치와 렌더링 되었을 때 이
미지 최대 개수가 27개 이므로 Skeleton 컴포넌트를 작성하여 하단에 27개의 div를 작
성 후 스타일을 주었습니다.

렌더링 이후 useEffect가 동작하면서 get으로 유저들이 쓴 글 정보들을 가져온 후에
state의 is_loaded값이 false로 변경되어 하단 return 내부의 삼항연상자 2번 째 구문
이 실행되어 이미지들을 그려줍니다.

글의 감정표현 정보값으로 해당 글의 감정에 맞는 Mongle(이미지)이 나타나게끔 표현
했고, 클릭하면 해당 글의 id를 통해 navigate하여 글의 상세정보를 볼 수 있게 동적
라우팅으로 구현했습니다.

추가로 월(month) 표시 양옆에 Arrow가 있는데 클릭 시 전월/이월로 이동이 가능하게
구현하려 하였으나 시간이 부족하여 구현하지 못했습니다. 이후에 추가로 구현할 예정
입니다.

<br/><br/>

## 🔎 작성 페이지

![KakaoTalk_20220811_174204171](https://user-images.githubusercontent.com/107654769/184096284-4a540e2e-da56-4cc7-815f-4a833694fecb.png)

작성 페이지에서는 작성하고싶은 글의 감정에 맞는 Mongle을 선택하고 해당 글에 대한
닉네임과 비밀번호, 제목 내용을 작성한 후 작성하기 버튼을 누르면 post로 서버에 글
정보값이 보내집니다.

Mongle들은 클릭시 아웃라인이 그려진 몽글이로 바뀌도록 하기 위해 감정값을
useState로 Boolean값을 주었고, 클릭할 때 마다 값이 반전되게끔 설정했고, 하나의
Mongle을 클릭하면 나머지 4개의 몽글이들의 감정값이 true로 바뀌면서 중복 선택되는
걸 방지했습니다.

작성하기 버튼을 누르면 입력한 4개의 값과 선택한 2개의 감정값(outline 이미지포함)
그리고 유저의 email값이 서버로 post됩니다.

보내진 글 정보값들은 서버에 저장후 Redux에서도 바로 추가되어 메인페이지에서도
state 변경 때문에 즉시 나열됩니다. 다른 사용자 입장에서도 메인페이지 첫 렌더링이
후 useEffect내의 Mongle들은 서버에서 전체 get을 진행하기 때문에 즉시 업데이트가
되는 것처럼 보여집니다. <br/><br/>

## 🔎 상세 페이지

![KakaoTalk_20220811_175920151](https://user-images.githubusercontent.com/107654769/184100883-7c15fd1d-3826-4fe5-857e-bbb463a3b9bf.png)

메인페이지에서 몽글이를 클릭하면 상세페이지로 이동됩니다.

useParam으로 받은 id값을 통해 글의 정보를 찾고 일치하는 글의 정보를 화면에 출력
해줍니다.

선택한 감정표현의 색깔과 UI를 일치하도록 설정했으며 위쪽과 아래쪽, 2개의 Emotion
Form / Comment Form을 사용했습니다.

![KakaoTalk_20220811_180615795](https://user-images.githubusercontent.com/107654769/184100974-36c6e849-0a35-4e5a-8314-9fd71fc48cb8.png)

수정하기 버튼을 눌렀을때의 UI입니다. 비밀번호를 입력하는 창이 뜨고 입력시 해당글
의 비밀번호와 같으면 수정요청이 보내져서 글이 수정됩니다. 삭제버튼도 같은 원리로
진행됩니다. 하지만 삭제버튼은 프로젝트 막지막에 구현하여 로직을 짜는 대신 prompt로
띄워 패스워드를 받는 것으로 구현하였습니다.

아래쪽 form에서는 댓글을 작성할 수 있고 작성한 댓글은 입력란 하단에 표시됩니다.
일정 길이가 넘어가면 스크롤처리가 되게끔 구현하였고 삭제버튼을 누르면 댓글을 삭
제할 수 있습니다.
