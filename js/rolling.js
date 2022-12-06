//left박스 태그
const left_box = document.querySelectorAll(".pf .left");
//left 박스 안 이미지들 태그
const imgs = document.querySelectorAll(".pf .left .move_box img");
//left박스 안 이미지들 다 같이 움직이게 할 태그(안움직이네)
const move_box = document.querySelectorAll(".pf .left .move_box")

console.log(left_box);
console.log(imgs);
console.log(move_box);

//트렌스폼에 대입할 변수하나 생성
let trans_num = 0;

//자동반복함수로 trans_num -= 1 해줌
let rolling = setInterval(() => {

    trans_num -= 1;
    console.log(trans_num);
    
    //태그에 대입 left_img.style.transform = `translateY(${trans_num}%)`
    imgs.forEach((item,index)=>{
        item.style.transform = `translateY(${trans_num}%)`;
    });
    
    //조건문으로 -100%쯤 되었을 때
    //첫번째 요소 맨 마지막에 넣음 left.append(img첫번째 요소)
}, 100);
