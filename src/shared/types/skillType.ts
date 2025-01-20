type SkillItem = {
  name: string;
  Url: string;
  description?: string;
}

export type SkillProps = {
  skillList: SkillItem[];
}