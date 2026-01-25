import type { Product } from "../../types/Product";

type Props = {
  product: Product;
  onEdit: (product: Product) => void;
  onRemove: (id?: string) => void;
  onToggleActive: (product: Product) => void;
};

export default function ProductCard({
  product,
  onEdit,
  onRemove,
  onToggleActive,
}: Props) {
  return (
    <div className="border rounded-lg p-4 flex flex-col justify-between shadow-sm">
      <div>
        {/* IMAGEM (placeholder por enquanto) */}
        <div className="bg-gray-200 h-40 rounded mb-3" />

        <h3 className="font-bold text-lg mb-1">{product.title}</h3>

        <p className="text-sm text-gray-600 mb-2">{product.description}</p>

        <p className="text-sm">
          Status:{" "}
          <span className={product.active ? "text-green-600" : "text-gray-400"}>
            {product.active ? "Ativo" : "Inativo"}
          </span>
        </p>
      </div>

      {/* AÇÕES (admin por enquanto) */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => onToggleActive(product)}
          className="bg-yellow-500 text-white px-3 py-1 text-sm rounded"
        >
          Ativar/Inativar
        </button>

        <button
          onClick={() => onRemove(product.id)}
          className="bg-red-600 text-white px-3 py-1 text-sm rounded"
        >
          Excluir
        </button>

        <button
          onClick={() => onEdit(product)}
          className="bg-blue-600 text-white px-3 py-1 text-sm rounded"
        >
          Editar
        </button>
      </div>
    </div>
  );
}
