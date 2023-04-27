const lists = document.querySelectorAll('.feature-sub')
const btns = document.querySelectorAll('.feature__link')

// btn.addEventListener('click', () => alert('click'))


// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', () => console.log(btns[i]))
// }

// btns.forEach((btnItem, index) => {
//   btnItem.addEventListener('click', () => {
//     btns.forEach((btnItem) => {
//       btnItem.classList.remove('feature__link_active')
//     })

//     btnItem.classList.toggle('feature__link_active')

//     lists.forEach((listItem) => {
//       listItem.classList.add('hidden')
//     })

//     lists[index].classList.remove('hidden')
//   })
// })


const featureLink = document.querySelectorAll(".feature__link");
const featureSub = document.querySelectorAll(".feature-sub");

featureLink.forEach((elemBtn, index) => {
  elemBtn.addEventListener("click", () => {
    featureSub.forEach((itemList) => {
      itemList.classList.add("hidden");
    });

    if (!elemBtn.classList.contains("feature__link_active")) {
      featureLink.forEach((elemBtn) => {
        elemBtn.classList.remove("feature__link_active");
      });
      elemBtn.classList.add("feature__link_active");
      featureSub[index].classList.remove("hidden");
    } else {
      elemBtn.classList.remove("feature__link_active");
      featureSub[index].classList.add("hidden");
    }
  });
});

// btns.forEach((btnItem, index) => {
//     btnItem.addEventListener('click', () => {
//         btnItem.classList.toggle('feature__link_active')
//         lists[index].classList.toggle('hidden')
//     })
// })


// const featureLinks=document.querySelectorAll('.feature__link')

// featureLinks.forEach((link)=>{
    
//     link.addEventListener('click',()=>{
//         let featureSub=link.nextElementSibling
        
//         if (link.classList.contains('feature__link_active')) {
            
//             featureLinks.forEach(l=>{
//                 l.classList.remove('feature__link_active')
//                 l.nextElementSibling.classList.add('hidden')
//             })  
//         } else {
//             featureLinks.forEach(l=>{
//                 l.classList.remove('feature__link_active')
//                 l.nextElementSibling.classList.add('hidden')
//             })
//             link.classList.add('feature__link_active')
//             featureSub.classList.remove('hidden')  
//         }
//     })
// })