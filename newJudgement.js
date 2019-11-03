let points = [60,100,80,80,70,50];
function get_achivement(points){
  let number = points.length;
  let sum = 0;
  for(let i=0; i<number; i++){
    sum += points[i];
  }
  return sum;
}
// console.log(get_achivement(points));

function score(sum){
  let full_score = 500;
    switch(true) {
      case (sum >= full_score*0.8):
        return "A";
      case (sum >= full_score*0.6):
        return "B";
      case (sum >= full_score*0.4):
        return "C";
      default:
        return "D";
}
}
// console.log(score(sum));

function get_pass_or_failure(points){
let number = points.length;
for(let i=0; i<number; i++){
  // console.log(points[i]);
  if (points[i] >= 60){
    return "合格";}
  else{
    return "不合格";
    }
  }
}
// console.log(get_pass_or_failure(points));

function judgement(points){
  let achievement = get_achivement(points);
  let pass_or_failure =  get_pass_or_failure(points);
  return `あなたの成績は${achievement}です。${pass_or_failure}です!`;
}

console.log(judgement(points));
