# Camping location infomation provide (backend)

<div align="center">
<img width="329" alt="image" src="https://github.com/user-attachments/assets/5b87ead5-73ff-4790-a7c1-01420f09274c">

</div>

# 프로젝트 정보

> **Codelab Academy AICC first project team seven** <br/> **개발기간: 2024.08.22 ~ 2024.09.04**

## 배포 주소

> **프론트 서버** : [https://campingfront.cmehapdls.com](https://campingfront.cmehapdls.com)<br> **백엔드 서버** : [https://campingback.cmehapdls.com](https://campingback.cmehapdls.com/)

## 자세한 내용은 아래 주소 확인

> [https://github.com/choimings/camping_front](https://github.com/choimings/camping_front)<br>

## 폴더 구조

- controller/: 이곳의 파일들은 주로 클라이언트로부터 들어온 요청을 받고, 비즈니스 로직을 수행한 후 결과를 반환하는 역할

  - deleteArea.js, deleteTask.js: 영역(area)과 작업(task) 삭제 요청을 처리
  - getAreas.js, getTasks.js: 영역과 작업 리스트를 가져오는 GET 요청을 처리
  - postAreas.js, postTasks.js: 영역과 작업을 생성하는 POST 요청을 처리
  - updateTask.js: 작업을 업데이트하는 PUT/PATCH 요청을 처리

- database/: 데이터베이스 관련 파일들이 모여 있는 폴더

  - database.js: 데이터베이스 연결 및 쿼리 실행 로직이 포함된 파일
  - db.sql: 데이터베이스 초기화 스크립트(SQL 쿼리)

- middleware/: 미들웨어는 요청과 응답 사이에 특정 작업을 수행

  - multer.js: 파일 업로드를 처리하는 미들웨어로, multer 라이브러리를 사용

- routes/: 라우트 파일들은 각 요청에 대한 경로를 정의

  - deleteRoutes.js: 특정 리소스를 삭제하는 요청에 대한 라우트
  - getRoutes.js: 리소스를 가져오는 GET 요청에 대한 라우트
  - postRoutes.js: 리소스를 생성하는 POST 요청에 대한 라우트
  - updateRoutes.js: 리소스를 업데이트하는 요청에 대한 라우트

- index.js: 서버의 시작점이 되는 파일

## 시작 가이드

### Requirements

For building and running the application you need:

- [Node.js 20.15.1](https://nodejs.org/en)
- [npm 10.7.0](https://www.npmjs.com/package/download)

### Installation

```bash
$ git clone https://github.com/choimings/camping_back.git
$ cd camping_back
```

#### Run

```
$ cd camping_back
$ npm i
$ npm run dev
```

---

## Stacks 🐈

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

---
