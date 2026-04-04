let mockData = [
    {
        id: 0,
        isDone: false,
        content: "React Study",
        date: new Date().getTime(),
    },
    { id: 1, isDone: true, content: "친구 만나기", date: new Date().getTime() },
    { id: 2, isDone: false, content: "낮잠자기", date: new Date().getTime() },
];

let day = ["일", "월", "화", "수", "목", "금", "토"];

onload = () => {
    initData(mockData);
    const today = new Date();
    document.querySelector(".Header > h1").innerText =
        `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${day[today.getDay()]}요일`;
};

const initData = (mockData) => {
    let todosWrapper = document.querySelector(".List > .todos_wrapper");
    todosWrapper.innerHTML = "";

    mockData.forEach((data) => {
        let { id, isDone, content, date } = data;
        todosWrapper.innerHTML += `
            <div class="TodoItem">
            <input type="checkbox" onchange="onUpdate(${id})" ${isDone ? "checked" : ""}/>
            <div class="content">${content}</div>
            <div class="date">${new Date(date).toLocaleString()}</div>
            <button name=${id} onclick="todoDel(this)">삭제</button>
            </div>`;
    });
};

let idIndex = mockData.length;
document.querySelector(".Editor > button").addEventListener("click", (e) => {
    e.preventDefault();

    let text = document.querySelector(".Editor > input").value;
    let data = {
        id: idIndex++,
        isDone: false,
        content: text,
        date: new Date().getTime(),
    };
    mockData.push(data);
    document.querySelector("#input").value = "";
    initData(mockData);
});

const onUpdate = (targetId) => {
    mockData = mockData.map((data) => {
        if (data.id === targetId) {
            return { ...data, isDone: !data.isDone };
        } else {
            return data;
        }
    });
    initData(mockData);
};

const todoDel = (ele) => {
    mockData = mockData.filter((data) => data.id !== Number(ele.name));
    initData(mockData);
};

document.querySelector("#keyword").onkeyup = (e) => {
    let searchedTodos = getFilterData(e.target.value);
    initData(searchedTodos);
};

const getFilterData = (keyword) => {
    if (keyword === "") return mockData;

    return mockData.filter((data) => data.content.includes(keyword));
};
