# Todo List

<br>

## 프로젝트 개요

- 할 일을 간단하게 기록/조회/삭제할 수 있는 웹 어플리케이션을 만들어 서버 실행해보기

<br>

## 기능 정의

- 헤더 타이틀 클릭 시 화면 리로드
- 입력 창에 데이터 입력 후 Add 버튼 클릭 시, LocalStorage에 해당 텍스트 누적 저장
  - 화면 리로드 없이 새로 입력한 Todo 항목이 TodoList 최상단에 추가
- 사이트 접속 시, LocalStorage에서 데이터를 로드하여 가장 최근 등록한 Todo항목부터 상단에 렌더링
- Remove 버튼 클릭 시, 해당 Todo 항목이 삭제되고, LocalStorage에서도 데이터 삭제
- Todo 항목의 text의 길이가 긴 경우, 초과 텍스트는 숨김 처리
- Todo 항목에 마우스 오버 시, 툴팁으로 전체 Todo 항목 테스트 조회됨

<br>

## 사용 언어

- HTML: 웹 페이지 및 내용을 구조화
- CSS : 웹 페이지를 디자인
- Javascript : 웹 페이지를 동적으로 제어
- Python : `http.server`를 이용한 간단한 서버 실행

<br>

## 화면 구성
| 초기 화면 | 데이터 등록 후 | 
| --- | --- |
| ![Untitled](https://github.com/25th-Night/TI_TL/assets/104040502/0dd76efd-28fb-49eb-bbaf-104ec3b61578) | ![Untitled 1](https://github.com/25th-Night/TI_TL/assets/104040502/36e06732-b575-4c0e-b7b8-36d3396253c3) |

<br>

## 프로젝트 셋팅

1. Github에 Repository 생성
2. 로컬 환경 셋팅 - 레파지토리 내려받기
    
    ```jsx
    $ git clone 레파지토리주소
    $ cd 레파지토리명
    ```
    
3. 파이썬 가상환경 설치 및 활성화
    
    ```jsx
    $ py -3.10 -m venv venv
    
    # 윈도우 명령어임
    $ source ./bin/Scripts/activate
    ```
    
4. 디렉터리 구조 설정 - 폴더 및 파일 생성
    
    ```jsx
    $ mkdir static static/css static/js
    4 touch index.html static/css/default.css static/js/default.js
    ```
    
5. 디렉터리 구조 확인 : [**tree 명령어**](https://umanking.github.io/2021/07/28/linux-tree-folder-structure/) 이용
    - **`venv` 와 `__pycache__` 가 포함된 파일 및 디렉터리는 제외하고 리스트**
    
    ```python
    $ tree -I 'venv|__pycache__'
    
    .
    |-- README.md
    |-- index.html
    `-- static
        |-- css
        |   `-- default.css
        `-- js
            `-- default.js
    ```
    
6. `index.html` 기본 설정
    - [**구글 웹폰트 사용법 (Google Fonts)**](https://www.daleseo.com/css-web-fonts/)
    - [**웹 아이콘 폰트어썸 (FontAwesome) 사용 방법 (2022년 버전)**](https://rgy0409.tistory.com/4762)
    
    ```html
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ToDo</title>
    
        <!-- Bootstrap -->
        <link 
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
            rel="stylesheet" 
            integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" 
            crossorigin="anonymous"
        >
        <script defer src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" crossorigin="anonymous"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" crossorigin="anonymous"></script>
    
        <!-- static 폴더 내 css, js 연결 -->
        <link rel="stylesheet" href="/static/css/default.css">
        <script defer src="/static/js/default.js"></script>
    
        <!-- Google font -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
    
        <!-- fontawesome : 아이콘 사용 -->
        <script defer src="https://kit.fontawesome.com/c8ed40ec38.js" crossorigin="anonymous"></script>
    
    </head>
    <body>
        
    
    </body>
    </html>
    
    ```

<br>    

## HTML - 전체 Code

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ToDo</title>

    <!-- Bootstrap -->
    <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" 
        crossorigin="anonymous"
    >
    <script defer src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" crossorigin="anonymous"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" crossorigin="anonymous"></script>

    <!-- static 폴더 내 css, js 연결 -->
    <link rel="stylesheet" href="/static/css/default.css">
    <script defer src="/static/js/default.js"></script>

    <!-- Google font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">

    <!-- fontawesome : 아이콘 사용 -->
    <script defer src="https://kit.fontawesome.com/c8ed40ec38.js" crossorigin="anonymous"></script>

</head>
<body>
    <header class="header-area mt-3 d-flex justify-content-center" >
        <div class="header-title fs-1 fw-bold">
            <i class="fa-solid fa-list"></i>
            ToDo List
        </div>
    </header>
    <main class="container-md">
        <div class="row justify-content-center">
            <div class="col-sm-10 col-lg-9 col-xl-8 col-xxl-7">
                <div class="input-group mt-3 mb-4">
                    <input 
                        type="text" class="form-control" placeholder="New task" 
                        aria-label="New task" aria-describedby="button-addon">
                    <button class="btn btn-primary" type="button" id="button-addon">Add</button>
                </div>
                <section class="card-list">
                
                </section>
            </div>
        </div>
    </main>
</body>
</html>
```

<br>

## HTML - 파트별 설명

### `Header`

```html
<!-- margin-top : 3 -->
<!-- display: d-flex -->
<!-- justify-content : center -->
<header class="header-area mt-3 d-flex justify-content-center" >
    <!-- h1 태그 적용 -->
    <!-- font-weight: bold -->
    <div class="header-title fs-1 fw-bold">
        <!-- fontawesome을 이용하여 아이콘을 폰트로 적용 -->
        <i class="fa-solid fa-list"></i>
        ToDo List
    </div>
</header>
```

### `main`

```html
<!-- bootstrap container를 이용하여 반응형 페이지 구성 -->
<main class="container-md">
    <!-- row : col의 wrap 역할 -->
    <!-- justify-content : center -->
    <div class="row justify-content-center">
        <!-- bootstrap grid를 이용하여 구간별 width 설정 -->
        <div class="col-sm-10 col-lg-9 col-xl-8 col-xxl-7">
            <!-- margin-top : 3 -->
            <!-- margin-bottom : 4 -->
            <div class="input-group mt-3 mb-4">
                <!-- bootstrap - Input group -->
                <input 
                    type="text" class="form-control" placeholder="New task" 
                    aria-label="New task" aria-describedby="button-addon">
                <!-- btn-primary : 버튼 색상 파랑으로 변경 -->
                <button class="btn btn-primary" type="button" id="button-addon">Add</button>
            </div>
            // Section 태그 : Todo 카드들이 추가될 영역
            <section class="card-list">
            
            </section>
        </div>
    </div>
</main>
```

<br>

## CSS - 전체 Code

- [**:root 가상 클래스로 CSS 변수 다루기**](https://designer-ej.tistory.com/entry/CSS-root-%EA%B0%80%EC%83%81-%ED%81%B4%EB%9E%98%EC%8A%A4%EB%A1%9C-CSS-%EB%B3%80%EC%88%98-%EB%8B%A4%EB%A3%A8%EA%B8%B0)

```jsx
:root {
    --logo-color: #437ABD;
}

body {
    font-family: Montserrat;
}

body > header > div > i {
    color: var(--logo-color);
    margin-right: 5px;
}

div.header-title {
    cursor: pointer;
}

div.todo {
    /* 텍스트를 한 줄로 유지 */
    white-space: nowrap;
    /* 넘치는 텍스트를 숨김 처리 */
    overflow: hidden;
    /* 넘치는 텍스트를 생략하여 부호(...)으로 처리 */
    text-overflow: ellipsis;
}

div.card {
    height: 50px;
}

div.card-body.d-flex {
    margin-left: 10px;
    padding: 0;
}

button.btn.btn-danger {
    font-size: 15px;
    margin: 7px 10px;
	}
```

<br>

## Javascript - 전체 Code

```jsx
document.addEventListener("DOMContentLoaded", function () {
    readTodo();
});

var headerTitle = document.querySelector(".header-title");
headerTitle.addEventListener("click", () => {
    window.location.href = "/"
})

var section = document.querySelector('section');

function renderTodo(content) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card-body d-flex justify-content-between align-items-center">
                        <div class="todo" data-bs-toggle="tooltip" data-bs-placement="top">${content}</div>
                        <button class="btn btn-danger">Remove</button>
                    </div>`

    var todo = card.querySelector('.todo');
    var tooltip = new bootstrap.Tooltip(todo, {
        title: todo.innerText
    });

    section.insertBefore(card, section.firstChild);

    return card;
}

function createTodo() {
    var input = document.querySelector(".form-control");
    var inputData = input.value;

    if (inputData.trim() == "") {
        alert("빈 값은 입력할 수 없습니다. 다시 확인해주세요.")
        return;
    }

    var card = renderTodo(inputData);

    section.insertBefore(card, section.firstChild);

    var existingData = localStorage.getItem("card");
    if (existingData) {
        inputData = existingData + "," + inputData;
    }
    localStorage.setItem("card", inputData);

    input.value = "";
}

var createBtn = document.getElementById("button-addon");
createBtn.addEventListener("click", createTodo);

function readTodo() {
    var existingData = localStorage.getItem("card");
    if (existingData) {
        var inputList = existingData.split(",");
        inputList.forEach((inputData) => {
            renderTodo(inputData)
        })
    }
}

function deleteTodo(event) {
    var deleteBtn = event.target;
    var card = deleteBtn.closest('.card');

    var cardIndex = [...section.children].indexOf(card);

    var existingData = localStorage.getItem("card");
    if (existingData) {
        var inputList = existingData.split(",");
        inputList.splice(-cardIndex-1, 1);
        existingData = inputList.join(",");
        localStorage.setItem("card", existingData);
    }
    
    card.remove();
}

section.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn-danger")) {
        deleteTodo(event);
    }
});
```

<br>

## Javascript - 파트별 설명

### 최초 화면 로딩

- HTML 문서가 로드되었을 때 `readTodo()` 함수를 실행하여 화면에 Todos 데이터를 렌더링

```jsx
document.addEventListener("DOMContentLoaded", function () {
    readTodo();
});
```

### 헤더 타이틀 - 클릭 이벤트 추가

```jsx
// class명이 header-title인 요소를 선택
var headerTitle = document.querySelector(".header-title");
// 해당 요소를 클릭했을 때 이벤트를 발생시킴
headerTitle.addEventListener("click", () => {
    // '/' 경로로 페이지 이동
    window.location.href = "/"
})
```

### `renderTodo` 함수 : 데이터 렌더링

```jsx
// 내용을 입력받아 화면에 Todo 객체를 렌더링할 함수
function renderTodo(content) {
    // div 태그를 생성하여 card라는 변수에 할당
    var card = document.createElement("div");
    // card 요소의 class에 'card' 라는 이름 추가
    card.classList.add("card");
    // card 요소의 자식 요소에 백틱으로 지정한 html을 삽입
    card.innerHTML = `<div class="card-body d-flex justify-content-between align-items-center">
                        <div class="todo" data-bs-toggle="tooltip" data-bs-placement="top">${content}</div>
                        <button class="btn btn-danger">Remove</button>
                    </div>`

    // class명이 todo인 요소를 선택
    var todo = card.querySelector('.todo');
    // Todo 카드에 tooltip 추가
    var tooltip = new bootstrap.Tooltip(todo, {
        // 우리가 입력한 값을 tooltip의 title로 지정
        title: todo.innerText
    });

    // section 태그의 첫 번째 자식 요소의 앞에 card를 추가.
    section.insertBefore(card, section.firstChild);

    // card 요소를 return
    return card;
}
```

### `createTodo` 함수 : 데이터 생성

```jsx
// Todo 객체를 생성하고, localStorage에도 저장하는 함수
function createTodo() {
    // input 태그를 선택
    var input = document.querySelector("input");
    // input 태그에 입력한 데이터를 선택
    var inputData = input.value;

    // 선택한 데이터의 시작과 끝부분에서 공백 제거
    // 결과 데이터가 공란과 같으면 경고창 띄우기 -> 데이터 유효성 검사
    if (inputData.trim() == "") {
        alert("빈 값은 입력할 수 없습니다. 다시 확인해주세요.")
        // 유효성 검증에 실패하였으므로 아무것도 리턴하지 않고 함수 종료
        return;
    }

    // inputData가 정상적이라면
    // renderTodo 함수에 인자로 넣어 retur 받은 card 데이터를 card에 할당
    var card = renderTodo(inputData);

    // section 태그의 첫 번째 자식 요소의 앞에 card를 추가.
    section.insertBefore(card, section.firstChild);

    // localStorage에서 'card'를 key로 갖는 value 데이터 조회
    var existingData = localStorage.getItem("card");
    // 조회한 데이터가 있으면
    if (existingData) {
        // 기존 데이터 뒤에 입력한 데이터를 추가
        inputData = existingData + "," + inputData;
    }
    // localStorage에 'card'를 key로 갖는 value를 inputData로 설정
    localStorage.setItem("card", inputData);

    // 데이터가 등록되었으므로 입력창을 비움
    input.value = "";
}
```

### 등록 버튼 - 클릭 이벤트 추가

```jsx
// ID명이 button-addon인 요소를 선택
var createBtn = document.getElementById("button-addon");
// 해당 요소를 클릭했을 때 이벤트로써 createTodo 함수를 실행시킴
// 즉, 해당 버튼 클릭 시, Todo객체를 추가하게 됨
createBtn.addEventListener("click", createTodo);
```

### `readTodo` 함수 - 데이터 조회

```jsx
// 데이터 조회 함수
function readTodo() {
    // localStorage에서 'card'를 key로 갖는 value 데이터 조회
    var existingData = localStorage.getItem("card");
    // 조회한 데이터가 있다면 -> 쉼표로 구분되어 있음
    if (existingData) {
        // 그 데이터를 쉼표를 기준으로 잘라서 배열로 만듦
        var inputList = existingData.split(",");
        // 배열을 반복문을 돌려서 각각의 요소마다
        inputList.forEach((inputData) => {
            renderTodo 함수의 인자에 넣어 실행시킴
            // 즉, 배열 내의 데이터를 내용으로 담은 Todo 객체가 화면에 렌더링됨
            renderTodo(inputData)
        })
    }
}
```

### `deleteTodo` 함수 : 데이터 삭제

```jsx
// 데이터를 삭제하는 함수
function deleteTodo(event) {
    // 이벤트 타겟을 선택
    // 결과적으로 이벤트 타겟은 Remove 버튼 요소에 해당함
    var deleteBtn = event.target;
    // closest 메서드를 이용하여 해당 요소에서 가장 가까운 상위 요소 중
    // class명이 'card'인 요소를 선택
    var card = deleteBtn.closest('.card');

    // section의 자식 요소들.. 즉 Todo card들이 담긴 배열에서 
    // 위에서 선택한 카드의 순서를 확인
    var cardIndex = [...section.children].indexOf(card);

    // localStorage에서 'card'를 key로 갖는 value를 조회
    var existingData = localStorage.getItem("card");
    // 조회한 데이터가 있다면 -> 쉼표로 구분된 문자열 데이터
    if (existingData) {
        // 그 데이터를 쉼표를 기준으로 잘라서 배열로 만듦
        var inputList = existingData.split(",");
        // 그 배열에서 우리가 삭제할 데이터에 해당하는 데이터를 삭제
        inputList.splice(-cardIndex-1, 1);
        // 배열 내에 남은 데이터들의 사이사이에 쉼표를 넣어 문자열로 합침
        existingData = inputList.join(",");
        // localStorage에 'card'를 key로 갖는 value에 위에서 만든 문자열을 지정
        localStorage.setItem("card", existingData);
    }
    
    // html 문서에서 card 요소를 제거
    card.remove();
}
```

### Remove 버튼 - 클릭 이벤트 추가

```jsx
// section 태그에 클릭 이벤트를 추가
section.addEventListener("click", function(event) {
    // 클릭하는 타겟의 클래스 리스트에 'btn-danger'가 있다면,
    // 즉, Remove 버튼이 맞는지 확인하는 것임.
    if (event.target.classList.contains("btn-danger")) {
        // 이벤트 객체를 인자로 넣어 deleteTodo 함수를 실행시켜서 
        // 해당 Todo 데이터 삭제
        deleteTodo(event);
    }
});
```

<br>

## 동작 화면

| 01. 반응형 화면 | 02. 페이지 접속 - 데이터 조회 | 
| --- | --- |
| ![녹화_2023_06_01_22_27_05_977](https://github.com/25th-Night/TI_TL/assets/104040502/be95b3e3-c218-44c4-a4e2-83edfd417364) | ![녹화_2023_06_01_22_33_51_325](https://github.com/25th-Night/TI_TL/assets/104040502/53b8e6d6-b9bf-4c2e-84ac-7effac01c379) |


| 03. 데이터 생성 | 04. 데이터 삭제 | 
| --- | --- |
| ![녹화_2023_06_01_22_27_38_252](https://github.com/25th-Night/TI_TL/assets/104040502/b3adc266-f882-47c3-bd65-5d52e11b3f8f) | ![녹화_2023_06_01_22_27_55_796](https://github.com/25th-Night/TI_TL/assets/104040502/773e426f-55b8-4e68-9f0c-af95a1092c98) |
