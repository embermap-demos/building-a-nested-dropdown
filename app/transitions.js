export default function(){
  this.transition(
    this.hasClass('fading-menu'),
    this.use('crossFade', { duration: 100 })
  );
}
