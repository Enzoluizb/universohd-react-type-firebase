export type Product = {
  id?: string;
  title: string;
  description: string;
  whatsapp: string;

  imageUrl?: string; // legado
  images?: string[];  // novo

  active: boolean;
  createdAt: number;
  ownerId: string;
  ownerName: string;
  ownerRole?: "especialista" | "mastermind" | "embaixadora" | "admin";
};