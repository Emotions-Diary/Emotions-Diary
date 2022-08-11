#몽글 다이어리

![image](https://user-images.githubusercontent.com/107654769/184087207-119c8d22-4dc2-41eb-9427-dff4c27e4c5c.png)

---
#프로젝트 소개
---
하루의 작은 일상을 공유하는 커뮤니티로 하루하루 본인들의 소소한 일상이나 기분을 남겨서 월 별로 모아서 볼 수 있게 만든 어플리케이션입니다.
바쁜 일상에 지쳤을때, 기분 좋은 일이 생겼을때, 위로 받고 싶을때에 작지만 확실하게 본인의 하루를 간편하게 남겨서 공유해보세요!

#프로젝트 개요
---
<li>프로젝트명 : 몽글 다이어리</li>
<li>개발 인원 : 프론트 3명(React)</li>
<li>개발 기간 : 8/5 ~ 8/11</li>
<li>개발 환경 : React, React-Redux</li>
<li>배포 환경 : Vercel, heroku</li>
<li>협업 도구 : Git, Slack, Notion, GatherTown, Kakao Talk</li>
---

<a href="https://teamsparta.notion.site/5-1a97b6245a0849b7b5d8b31ffd84cfb6">팀 노션</a>


<a href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5f9870d7-3cd9-45e8-a434-7d70e81c6d6f/%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%80%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%BC_%E1%84%8B%E1%85%AA%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%B7_%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220811T074215Z&X-Amz-Expires=86400&X-Amz-Signature=94129e937761a8e592df780089e1f6805e64b83479adf3eadd8be574cf7b954e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF%25E1%2584%2580%25E1%2585%25B5%25E1%2584%258C%25E1%2585%25A1%25E1%2586%25BC_%25E1%2584%258B%25E1%2585%25AA%25E1%2584%258B%25E1%2585%25B5%25E1%2584%258B%25E1%2585%25A5%25E1%2584%2591%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25A6%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25B7_%25E1%2584%258E%25E1%2585%25AC%25E1%2584%258C%25E1%2585%25A9%25E1%2586%25BC.pdf%22&x-id=GetObject">와이어 프레임</a>
---

#구성원
---
|   이름    |         깃허브 주소         |                            역할 분담                            |
| :-------: | :-------------------------: | :-------------------------------------------------------------: |
|  👧 나소나  | https://github.com/4775614 |  디자인(와이어프레임, 이미지 등), 상세 페이지  |
| 👦 강인호  | https://github.com/duck9-papa | 작성 페이지, Front/Back 배포 |
| 👦 성필상  | https://github.com/lucy-pill | 회원가입/로그인/상세 페이지 <br/> 레이아웃 작성 <br/>Front/Back 배포 |

#API설계
---
<a href="https://teamsparta.notion.site/68213ae61b194200814a67d565e13f15?v=6b986b29144240cc832134d4b702b611">API설계 팀 노션</a>
---
<h3>아키텍처</h3>

---


![KakaoTalk_20220811_180828682](https://user-images.githubusercontent.com/107654769/184128677-d8ef0086-cbc6-4ac0-a0ad-2d91c6ecb957.png)


<h1>주요 기능 및 소개</h1>


#로그인 기능
---
![KakaoTalk_20220811_170634220](https://user-images.githubusercontent.com/107654769/184092101-616f3187-64a2-40ac-a1e3-7cd74e1887e8.png)![KakaoTalk_20220811_171119572](https://user-images.githubusercontent.com/107654769/184091320-9e22d080-d4f2-4dc1-9bbb-0f9ba6b5b962.png)


<h3>로그인과 회원가입</h3>

처음 페이지에 접속하면 로그인 창으로 연결이 되고, 로그인 혹은 회원가입을 할 수 있다.


회원가입창에서는 만들고싶은 이메일을 입력한 후 중복확인버튼을 누르면 axios.get으로 서버에서 user정보를 받아온 후 일치하는 이메일이 있는지 확인한다.


확인 후 일치하는 이메일이 없으면 나머지 정보를 입력한 후 axios.post로 서버에 데이터를 보내서 유저정보를 등록한다.


form태그의 submit 기능으로 유효성 검사와 최댓값,최솟값지정 등의 기능을 구현했다.


다시 로그인 창으로 돌아와 정보를 입력하면 axios.get 으로 입력한 정보와 일치하는지 대조한 후 로그인이 된다.


이번 프로젝트에서는 loginStatus를 true로 하는것으로 로그인 상태를 지정했다.


<h3>메인 페이지</h3>

![KakaoTalk_20220811_173127081](https://user-images.githubusercontent.com/107654769/184094760-6bb9ca6d-0960-4300-a7b3-d6e8aec8899b.png)


로그인을 한 후에 메인페이지에 접속하면 중앙에 월별로 몽글이들이 담겨있는 화면을 볼 수 있다.


메인페이지에 접속하면서 axios.get으로 유저들이 쓴 글 정보들을 가져온 후에 작성순서대로 나열했다.


글의 감정표현 정보값으로 해당 글의 감정에 맞는 몽글이가 나타나게끔 표현했고, 클릭하면 해당 글의 id를 통해 navigate하여 글의 상세정보를 볼 수 있게 동적라우팅으로 구현했다.


메인페이지에 로딩중 페이지 스켈레톤 UI를 구현하였다.


<h3>작성 페이지</h3>

![KakaoTalk_20220811_174204171](https://user-images.githubusercontent.com/107654769/184096284-4a540e2e-da56-4cc7-815f-4a833694fecb.png)


작성 페이지에서는 작성하고싶은 글의 감정에 맞는 몽글이를 선택하고 해당 글에 대한 닉네임과 비밀번호, 제목 내용을 작성한 후 작성하기 버튼을 누르면 axios.post로 서버에 글 정보값이 보내진다.



몽글이들은 클릭시 아웃라인이 그려진 몽글이로 바뀌도록 하기 위해 감정값을 useState로 Boolean값을 주었고, 클릭할 때 마다 값이 반전되게끔 설정했고, 하나의 몽글이를 클릭하면 나머지 4개의 몽글이들의 감정값이 true로 바뀌면서 중복 선택되는걸 방지했다.


작성하기 버튼을 누르면 입력한 4개의값과 선택한 2개의 감정값(outline 이미지포함) 그리고 유저의 email값이 서버로 post된다.


보내진 글 정보값들은 메인페이지에서 받아와서 나열된다.


<h3>상세 페이지</h3>

![KakaoTalk_20220811_175920151](https://user-images.githubusercontent.com/107654769/184100883-7c15fd1d-3826-4fe5-857e-bbb463a3b9bf.png)


메인페이지에서 몽글이를 클릭하면 상세페이지로 이동된다.


useParam으로 받은 id값을 통해 글의 정보를 찾고 일치하는 글의 정보를 화면에 출력해준다.


선택한 감정표현의 색깔과 UI를 일치하도록 설정했으며 위쪽과 아래쪽, 2개의 form을 사용했다.

![KakaoTalk_20220811_180615795](https://user-images.githubusercontent.com/107654769/184100974-36c6e849-0a35-4e5a-8314-9fd71fc48cb8.png)

수정하기 버튼을 눌렀을때의 UI다. 비밀번호를 입력하는 창이 뜨고 입력시 해당 글의 비밀번호와 같으면 수정요청이 보내져서 글이 수정된다. 삭제버튼도 같은 원리로 진행된다.


아래쪽 form에서는 댓글을 작성할 수 있고 작성한 댓글은 입력란 하단에 표시된다. 일정 길이가 넘어가면 스크롤처리가 되게끔 구현하였고 삭제버튼을 누르면 댓글을 삭제할 수 있다.
