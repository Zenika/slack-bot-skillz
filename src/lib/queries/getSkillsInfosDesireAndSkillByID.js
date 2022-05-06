const GET_SKILLS_INFOS_DESIRE_AND_SKILL_BY_ID = `
query getSkillInfosFromEmailAndID($email: String!, $id: uuid!) {
    UserSkillDesire(where: {User: {email: {_eq: $email}}, skillId: {_eq: $id}}) {
      Skill {
        UserSkillDesires {
          desireLevel
          skillLevel
          created_at
        }
      }
    }
  }`;

module.exports.GET_SKILLS_INFOS_DESIRE_AND_SKILL_BY_ID =
  GET_SKILLS_INFOS_DESIRE_AND_SKILL_BY_ID;
