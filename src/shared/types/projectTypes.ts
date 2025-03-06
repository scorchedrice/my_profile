export interface ProjectDetailType {
  id: number;
  overview: {
    title: string;
    period: string;
    github: string;
    demo: string;
    teamMembers: number;
    role: string;
    mainImg: string;
  };
  description: {
    summary: string;
    motivation: string;
    mainFeatures: Array<{
      title: string;
      content: string;
    }>;
    techStack: {
      frontend?: string[];
      backend?: string[];
      deployment?: string[];
      tools?: string[];
    };
    challenges: Array<{
      problem: string;
      solution: string;
      solutionSummary: string;
    }>;
    achievement: string[];
  };
  images: Array<{
    url: string;
    caption: string;
  }>;
}

export interface DescriptionProps extends Pick<ProjectDetailType, 'description'> {}

export interface OverviewProps extends Pick<ProjectDetailType, 'overview'> {
  onClose: () => void;  // onClose prop 추가
}

export interface ProjectImageProps extends Pick<ProjectDetailType, 'images'> {}

