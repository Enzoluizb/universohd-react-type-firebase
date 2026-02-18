import { useEffect, useState } from "react";
import { getAllCourseLinks, updateCourseLink } from "../services/courseLinks";
import type { CourseLink } from "../services/courseLinks";

export default function AdminLinks() {
  const [links, setLinks] = useState<CourseLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLinks() {
      const data = await getAllCourseLinks();
      setLinks(data);
      setLoading(false);
    }

    fetchLinks();
  }, []);

  function handleChange(id: string, newUrl: string) {
    setLinks((prev) =>
      prev.map((link) => (link.id === id ? { ...link, url: newUrl } : link)),
    );
  }

  async function handleSave(id: string, url: string) {
    try {
      setSavingId(id);
      await updateCourseLink(id, url);
      alert("Link atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar link:", error);
      alert("Erro ao atualizar link.");
    } finally {
      setSavingId(null);
    }
  }

  if (loading) return <p className="p-8">Carregando...</p>;

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Gerenciar Links dos Cursos</h1>

      <div className="space-y-6">
        {links.map((link) => (
          <div key={link.id} className="bg-white p-6 rounded shadow border">
            <h2 className="font-semibold mb-3">{link.title}</h2>

            <div className="flex gap-3">
              <input
                type="text"
                value={link.url}
                onChange={(e) => handleChange(link.id, e.target.value)}
                className="flex-1 border p-3 rounded"
              />

              <button
                onClick={() => handleSave(link.id, link.url)}
                disabled={savingId === link.id}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded"
              >
                {savingId === link.id ? "Salvando..." : "Salvar"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
