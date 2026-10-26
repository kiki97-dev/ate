// Lenis 초기화
const lenis = new Lenis({
   duration: 1.2,
   easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
   smooth: true,
});

const raf = time => {
   lenis.raf(time);
   requestAnimationFrame(raf);
};
requestAnimationFrame(raf);

/* AOS.init({
  duration:1500,
}); */

// 탑버튼
function topBtn() {
   $('html,body').animate(
      {
         scrollTop: 0,
      },
      100,
   );
}
