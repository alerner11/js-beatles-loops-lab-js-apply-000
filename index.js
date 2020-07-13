// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var pairedskills = [];
  for (let counter = 0; counter < musicians.length(); counter++)
  {
    skill = `${musicians[counter]} plays ${instruments[counter]}`;
    empty[counter] = skill;
  }
  return pairedskills;
}