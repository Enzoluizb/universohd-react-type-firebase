export type ProductInput = {
  title: string;
  description: string;
  whatsapp: string;
  images?: string[];
  active: boolean;
  createdAt: number;
  ownerId: string;
  ownerName: string;
  ownerRole?: "especialista" | "mastermind" | "embaixadora" | "admin";
};