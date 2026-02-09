export type Product = {
  id?: string;
  title: string;
  description: string;
  whatsapp: string;

  // legado
  imageUrl?: string;

  // novo
  images?: string[];

  active: boolean;
  createdAt: number;
  ownerId: string;
  ownerName: string;
};
