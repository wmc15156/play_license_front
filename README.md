<!--
웹 프론트엔드용 README 템플릿
-->

# 상상마루 웹 프론트엔드 - Play License

## 🎠️ Play License는 공연 저작물 라이센스 마켓입니다.

<!-- 이 저장소가 어느 프로젝트의 어떤 역할을 하는 저장소인지 적어주세요 -->
<!--
ex)
비트코인은행 고객용 웹 프론트엔드 서버
-->

> 공연 저작물 중개를 통해 저작권을 보호함으로써 **건강한 산업 환경을 조성**하고, **다양한 콘텐츠 제작에 기여**하고자 합니다.

## 언어

<!-- 이 저장소의 코드의 언어와 그 버전, 패키지 매니저 정보를 적어주세요 -->
<!--
ex)
nodejs 12.12 이상
TypeScript 3.5 이상
yarn 1.19.1 이상
-->
<p align="center">
<img alt="node-v15.0.1" src="https://img.shields.io/badge/node-v15.0.1-3f72af" />
<img alt="npm-v7.0.3" src="https://img.shields.io/badge/npm-v7.0.3-aa96da" />
<img alt="axios-0.21.1" src="https://img.shields.io/badge/axios-0.21.1-green.svg" />
</p>

JavaScript<br/>
TypeScript 4.1.3 이상<br/>

## 구성

<!-- 이 저장소의 코드의 전체적인 구성을 적어주세요 -->
<!--
ex)
create-react-app으로 생성됨
React 기반의 소스
TypeScript를 사용했음.
-->
<!--
ex2)
nuxt.js으로 생성됨
Vue 기반의 소스
-->

- Next JS - React 기반
- create-next-app으로 생성
- 환경 설정 (Prettier, Eslint, Config)
- React-Hooks
- TypeScript
- Redux
- Styled-Components 스타일링
- Vercel 배포

## 환경

<!-- 이 저장소의 빌드 결과물이 동작하는 환경을 적어주세요. -->
<!--
ex1)
IE 9 이상
-->
<!--
ex2)
최신 버전의 Chrome
-->

(작성 필요)

## 로컬 개발 방법

<!-- 개발자가 해당 소스를 로컬에서 테스트하기 위해 필요한 절차를 적어주세요 -->
<!--
ex)
1. `yarn install`
2. `config.js` 파일을 로컬 환경에 맞게 수정해주세요.
3. `yarn start`를 하면 webpack-dev-server가 기동됩니다
-->

- `npm install` 또는 `yarn install`
- `npm run dev`를 하면 `localhost:3000`에서 열립니다.

## 배포 방법

- origin코드를 clone 후 작업 시 branch에서 작업합니다.
- 코드를 origin branch로 push합니다.
- Pull Request를 합니다.
- Vercel이 자동으로 error가 있는지 체크해줍니다.
- error나 conflict 코드를 수정 후 `master`로 merge합니다.
- 배포 끝✨️

<!-- 개발자가 이 소스를 실서비스에 적용하기 위해 필요한 절차를 적어주세요 -->
<!--
ex1)
1. `ssh ubuntu@aa.bbb.c.ddd` 로 서버에 접속합니다. (비밀번호: xxx)
2. `cd coinbank`
3. `git pull`
4. `yarn build`
5. `sudo systemctl restart nginx`
-->
<!--
ex2)
1. 로컬에서 `docker build --tag xxx/yyy:latest` 해주세요
2. 로컬에서 `docker push xxx/yyy:latest` 해주세요 (비밀번호: xxx)
3. `ssh ubuntu@aa.bbb.c.ddd` 로 서버에 접속합니다. (비밀번호: xxx)
4. `cd coinbank`
3. `docker pull xxx/yyy:latest`
4. `docker-compose up -d`
-->
<!--
ex3)
1. 로컬에서 `docker build --tag xxx/yyy:latest` 해주세요
2. 로컬에서 `docker push xxx/yyy:latest` 해주세요 (비밀번호: xxx)
3. AWS 콘솔에서 ECS로 들어갑니다
4. 새 revisions을 생성합니다
5. 만들어진 revision을 현재 서비스에 반영합니다. (문제 발생시 force deploy에 체크)
-->

## 배포 관련 계정 정보

**Vercel**

- Github Social Login
  https://vercel.com/bbodela

<!-- 배포에 관련해서 필요한 계정 정보를 적어주세요 -->
<!--
ex1)
cafe24
ID: coinbank11
PW: xxxxx
-->
<!--
ex2)
AWS
ID: coinbank11
PW: xxxxx
-->

## 실서비스 확인용 계정 정보

<!-- 본 코드가 배포된 실서비스에서 장애가 있을 시 상황을 확인하기 위해서, 실서비스에 남아있는 테스트용 계정 정보를 적어주세요 -->
<!--
ex)
관리자계정
ID: admindev
PW: xxxxxxxx
-->

(작성 필요)

## 기타 관련 계정 정보

<!-- 기타, 본 서비스 관련해서 필요한 계정 정보를 적어주세요 -->
<!--
ex)
Sentry
ID: coinbank11
PW: xxxxx
-->

(작성 필요)

## 체크리스트

<!-- 아래 항목 중 확인이 완료된 부분은 `[x]`로 수정해주세요. -->

- [ ] GPL, AGPL등의 전염성 라이선스로 인해 소스코드를 공개해야하는지 확인이 끝났습니다.
- [ ] 사용된 이미지, 폰트등의 저작권으로 인한 문제가 없음을 확인하였습니다.
- [x] HTTPS 프로토콜을 이용하여 접속하여도 정상적으로 동작하도록 작성되었습니다.
- [x] `.editorconfig` 등의 협업 관련 설정을 정리해두었습니다.
- [ ] 추후 다른 개발자가 코드를 보게 되더라도 곤란하지 않게 적절한 주석과 문서화를 해두었습니다.
- [x] 저장소의 코드를 배포하기 위한 키 파일 등의 보안 자료가 안전하게 공유되었습니다.
