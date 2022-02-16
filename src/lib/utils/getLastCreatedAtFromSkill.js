function getLastCreatedAtFromSkill(skillInfosList) {
  let lastDate = "";
  let i = 0;

  for (; i < skillInfosList.length - 1; i++) {
    if (skillInfosList[i].created_at > skillInfosList[i + 1].created_at)
      lastDate = skillInfosList[i].created_at;
  }
  if (skillInfosList[i].created_at > lastDate)
    lastDate = skillInfosList[i].created_at;
  for (let j = 0; j < skillInfosList.length; j++) {
    if (skillInfosList[j].created_at === lastDate) return skillInfosList[j];
  }
  return "No datas";
}

module.exports.getLastCreatedAtFromSkill = getLastCreatedAtFromSkill;
