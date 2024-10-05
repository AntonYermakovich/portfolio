export type TServeiceContent = {
  children: React.ReactNode;
  openModal: boolean;
  setOpenModal: any;
  modal?: number 
};

export type TService = {
  title: string;
};

export type TServices = {
  services: TService[];
};

export type TMenuList = {
  open: boolean,
  setOpenMenu: (open:boolean) => void
}

export type TSkill = {
  title: string;
  value: number;
};

export type TSkillsContent = {
  children: React.ReactNode;
  skills: TSkill[];
};

export type TInputs = {
  name: string;
  email: string;
  project: string;
  message: string;
};

export type TModal = {
  children: React.ReactNode
  show: boolean
  setShow: (prev:boolean) => void
}

export type TProject = {
  id: number,
  title: string,
  description: string,
  link: string,
  img: string
}