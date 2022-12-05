window.addEventListener("scroll",()=>{

    //스크롤바 시작값 변수에 대입
    let scTop = window.scrollY;

    if(scTop >= secStart[0] && scTop < secStart[1]){
       
        //활성화 전 전부 비활성화
        gnb.forEach((item,index)=>{
            item.classList.remove("on");
        });
        gnb[0].classList.add("on");
        // gnb_color();    
    }
    else if(scTop >= secStart[1] && scTop < secStart[2]){
        //활성화 전 전부 비활성화
        gnb.forEach((item,index)=>{
            item.classList.remove("on");
        });
        gnb[1].classList.add("on");
        // gnb_color();
    }
    else if(scTop >= secStart[2] && scTop < secStart[3]){
        //활성화 전 전부 비활성화
        gnb.forEach((item,index)=>{
            item.classList.remove("on");
        });
        gnb[2].classList.add("on");
        // gnb_color();
    }
    else if(scTop >= secStart[3]){
        //활성화 전 전부 비활성화
        gnb.forEach((item,index)=>{
            item.classList.remove("on");
        });
        gnb[3].classList.add("on");
    }
});





// sections.forEach((item,index)=>{
//     if(scTop >= item && scTop < item[index - 1]){
//         gnb_color();
//     }
// });

//해당 영역 도착하면 li색깔이 변하는 함수
let gnb_color = ()=>{
    //해당하는 li만 색 변경
    gnb.forEach((item,index)=>{
        //활성화 전 전부 비활성화
        gnb.forEach((item,index)=>{
            item.classList.remove("on");
        });
        item.classList.add("on");
    });
}