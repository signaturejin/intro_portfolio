if(scTop >= sections[0] && scTop < sections[1]){
    gnb.forEach((item,index)=>{
        //활성화 전 전부 비활성화
        gnb.forEach((item,index)=>{
            item.classList.remove("on");
        });
        item.classList.add("on");
    });
    // gnb_color();    
}
else if(scTop >= sections[1] && scTop < sections[2]){
    gnb.forEach((item,index)=>{
        //활성화 전 전부 비활성화
        gnb.forEach((item,index)=>{
            item.classList.remove("on");
        });
        item.classList.add("on");
    });
    // gnb_color();
}
else if(scTop >= sections[2] && scTop < sections[3]){
    gnb.forEach((item,index)=>{
        //활성화 전 전부 비활성화
        gnb.forEach((item,index)=>{
            item.classList.remove("on");
        });
        item.classList.add("on");
    });
    // gnb_color();
}




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