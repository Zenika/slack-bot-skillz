const GET_LAST_UPDATED_SKILLS = `
query getSkillInfosFromID($email: String!) {
    UserSkillDesire(where: {User: {email: {_eq: $email}}}, distinct_on: skillId) {
      Skill {
        UserSkillDesires {
          created_at
          skillId
        }
      }
    }
  }`;

module.exports.GET_LAST_UPDATED_SKILLS = GET_LAST_UPDATED_SKILLS;
