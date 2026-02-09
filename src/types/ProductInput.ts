export type ProductInput = {
  title: string;
  description: string;
  whatsapp: string;

  imageUrl?: string; // legado
  images?: string[]; // novo

  active: boolean;
  createdAt: number;
  ownerId: string;
  ownerName: string;
};
