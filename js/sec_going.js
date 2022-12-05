//필요한 태그 생성
const gnb = document.querySelectorAll(".gnb > li");
//header_srcoll.js에서 생성
/*
    const sections = document.querySelectorAll(".section");
    각 영역 시작위치값 담기 위한 배열변수
    let secStart = [];
*/

window.addEventListener("scroll",()=>{
    //header_srcoll.js에서 생성
    /* 
        스크롤바 y값 변수에 대입
        let scTop = window.scrollY;
        각 영역들 시작위치값 배열에 대입
        sections.forEach((item,index)=>{
            secStart[index] = item.offsetTop;
        });
    */

    //스크롤바 y값 변수에 대입
    let scTop = window.scrollY;

    //스크롤을 한번이라도 해야 클릭했을 때 넘어감
    gnb.forEach((item,index)=>{
        item.addEventListener("click",(e)=>{
            e.preventDefault();
    
            window.scrollTo(
                {
                    top: secStart[index] - 1000,
                    behavior: "smooth"
                }
            );
        });
    });
});