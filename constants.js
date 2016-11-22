var LEFT = 'left';
var RIGHT = 'right';
var reverseDict = {};
reverseDict[LEFT] = RIGHT;
reverseDict[RIGHT] = LEFT;

function reverseDirection(direction){
   return reverseDict[direction];
}
