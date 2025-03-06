interface SkillItem {
  name: string;
  Url: string;
  description?: string;
}

export interface SkillProps {
  skillList: SkillItem[];
}