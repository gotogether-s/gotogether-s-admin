<br/>

<div align="center"><a href="https://gotogether-s.vercel.app/" target="_blank"><img src="./public/main_logo.svg" width="300px"><p align="center">좋은 사람들과의 잊을 수 없는
여행</p></a></div>

<div align="center">

![last commit](https://img.shields.io/github/last-commit/gotogether-s/gotogether-s?color=green)
![most language](https://img.shields.io/github/languages/top/gotogether-s/gotogether-s)
[![release](https://img.shields.io/badge/release-v0.0.0-yellow)](https://github.com/gotogether-s/gotogether-s/tree/main)

</div>

<br/>

# 🏝 Go Together Admin

## 📑 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [🗓 Project Duration](#-project-duration)
- [✨ Project Summary](#-project-summary)
  - [문제점 & 기업측 요구사항](#문제점--기업측-요구사항)
- [👀 Demo](#demo)
  - [Live Website](#live-website)
  - [How to Add Product](#how-to-add-product)
- [🪄 Tech Stack & Tools](#-tech-stack--tools)
  - [Design Tools](#design-tools)
  - [Front-End Tech Stack](#front-end-tech-stack)
  - [Back-End Tech Stack](#back-end-tech-stack)
  - [Other Tools](#other-tools)
- [✂️ Roles & Responsibilities](#%EF%B8%8F-roles--responsibilities)

<br />

## 🚀 Quick Start

1. Clone this repo: `git clone https://github.com/gotogether-s/gotogether-s-admin.git`
2. Move to the directory: `cd <YOUR_PROJECT_NAME>`.
3. Install packages: `yarn install`
4. Start project
   - Localhost: `yarn run dev`
   - After build: `yarn build` then `yarn run dev`
5. Please contact [hyeonah.hello@gmail.com](hyeonah.hello@gmail.com) if you need an env key to run the project
6. Reference
   - Visit the live website: [https://gotogether-s-admin.vercel.app](https://gotogether-s-admin.vercel.app)
   - View project code with GitHub: [https://github.com/gotogether-s/gotogether-s-admin](https://github.com/gotogether-s/gotogether-s-admin)

<br />

## 🗓 Project Duration

Sep.27.2022 - Oct.12.2022

<br />

## ✨ Project Summary

고투게더는 시니어층을 주요 대상으로 패키지 여행 상품을 예약할 수 있는 여행 서비스 플랫폼입니다. GoTogether admin website is for administrator to add their products to [their service website](https://www.gotogether-s.com/).

- Client: Go Together Travel Agency
- Service: Website Design & Development
- Duration: Sep.27.2022 - Oct.12.2022
- Team Members: 2

### 문제점 & 기업측 요구사항

기존 [고투게더 웹사이트](https://www.gotogether-s.com/)는 아임웹이라는 CMS(Content Management System)로 웹사이트가 만들어져 있어 한정된 기능만 사용이 가능하였습니다. 고투게더 서비스를 운영하는 회사 더샤이니에서 아래 3가지 요구사항을 반영한 새로운 웹사이트 제작을 요청하였습니다:

1. 모바일 레이아웃을 기반으로 웹 페이지 리뉴얼
2. 사용자 특성에 맞는 패키지 여행 상품 추천 기능
3. 상품 등록이 가능한 관리자 페이지 제작 ✅

<br />

## 👀 Demo

### Live Website

🔗 [Visit the live website on Vercel](https://github.com/gotogether-s/gotogether-s-admin)

### How to Add Product

#### 1. Sign in to admin account

![signin-admin](https://user-images.githubusercontent.com/83247825/217125214-72ee961d-df61-4e22-a96c-98f280226837.png)

<br />

#### 2. Fill out all the required input

![how-to-1](https://user-images.githubusercontent.com/83247825/217123997-ddbdb69b-59e7-47d8-9917-9896f1e1ed3c.png)

<br />

![how-to-2](https://user-images.githubusercontent.com/83247825/217124000-b3ca45d9-7757-4efa-b535-0696fae47661.png)

<br />

![how-to-3](https://user-images.githubusercontent.com/83247825/217124001-cae64874-a8a7-45c7-9c88-3e6a807fe700.png)

<br />

![how-to-4](https://user-images.githubusercontent.com/83247825/217124002-1065c6a1-80f6-48b1-a9e5-f9bd46b2ee01.png)

<br />

#### 3. Add new product

![add-new-product](https://user-images.githubusercontent.com/83247825/217124641-3af4dc4f-ce3e-4af4-8f5a-8bb460e6ae6d.png)

<br />

## 🪄 Tech Stack & Tools

### Design Tools

- **For wireframe and mockup creation**: Adobe XD

### Front-End Tech Stack

🔗 GitHub Repo: [https://github.com/gotogether-s/gotogether-s-admin](https://github.com/gotogether-s/gotogether-s-admin)

- **Framework**: Next.js
- **Programming Language**: JavaScript
- **Router**: next/router
- **State Management**: Redux toolkit
- **API Request**: axios
- **Design**: MUI, Scss, CSS Module

### Back-End Tech Stack

🔗 GitHub Repo: [https://github.com/gotogether-s/gotogether-s-BE](https://github.com/gotogether-s/gotogether-s-BE)

🔗 ERD Cloud: [https://www.erdcloud.com/d/bdPHHqeiiKZ6GC9rP](https://www.erdcloud.com/d/bdPHHqeiiKZ6GC9rP)

- **Programming Language**: Java
- **Framework & DB**: IntelliJ, Gradle, Spring, Spring Boot, Data JPA, Security, JWT, MySQL
- **CI/CD & Infrastructure**: Jenkins, Docker, EC2, RDS, S3
- **Other**: POSTMAN, ERD Cloud

### Other Tools

- **Issue**: Github Issue
- **Documentation**: Notion
- **Communication**: Slack, Discord, Zoom

<br />

## ✂️ Roles & Responsibilities

| Hyeonah<br>(Front-End Development)       | Hyeonseung<br>(Back-End Development)          |
| ---------------------------------------- | --------------------------------------------- |
| [@hyeonahc](https://github.com/hyeonahc) | [@iheese](https://github.com/iheese)          |
| Signin page, Add product page            | Product API (create, read, update and delete) |
