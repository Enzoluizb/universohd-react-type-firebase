import { useEffect, useState } from "react";
import { subscribeProducts } from "../services/products";
import { useAuth } from "../hooks/useAuth";
import type { Product } from "../types/Product";
import ProductCard from "../components/marketplace/ProductCard";

export default function Profile() {
  const { user } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log("Hook useAuth - user:", user);

  useEffect(() => {
    if (!user) {
      console.log("Ainda não há usuário logado.");
      return;
    }
    console.log("Subscribing products (realtime) for user:", user.uid);

    const unsubscribe = subscribeProducts((allProducts) => {
      try {
        const items = allProducts.filter((p) => p.ownerId === user.uid);
        setProducts(items);
        setLoading(false);
      } catch (err) {
        console.error("Erro ao processar produtos:", err);
        setError("Erro ao carregar produtos");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [user]);

  function handleEdit(product: Product) {
    console.log("Editar produto:", product);
  }

  function handleRemove(id?: string) {
    if (!id) return;
    console.log("Remover produto:", id);
  }

  function handleToggleActive(product: Product) {
    console.log("Ativar/Inativar produto:", product);
  }

  if (!user) return <p>Carregando usuário...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Suas Postagens</h1>

      {loading && <p>Carregando produtos...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && products.length === 0 && (
        <p>Você ainda não publicou nenhum produto.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={handleEdit}
            onRemove={handleRemove}
            onToggleActive={handleToggleActive}
          />
        ))}
      </div>
    </div>
  );
}
