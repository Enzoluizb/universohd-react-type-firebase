import { useEffect, useState } from "react";
import { getAllCourseLinks, updateCourseLink } from "../services/courseLinks";
import type { CourseLink } from "../services/courseLinks";

export default function AdminLinks() {
  const [links, setLinks] = useState<CourseLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [successId, setSuccessId] = useState<string | null>(null);

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

      let formattedUrl = url.trim();

      if (!/^https?:\/\//i.test(formattedUrl)) {
        formattedUrl = `https://${formattedUrl}`;
      }

      await updateCourseLink(id, formattedUrl);

      setLinks((prev) =>
        prev.map((link) =>
          link.id === id ? { ...link, url: formattedUrl } : link,
        ),
      );

      // Mostra mensagem de sucesso
      setSuccessId(id);

      // Remove após 3 segundos
      setTimeout(() => {
        setSuccessId(null);
      }, 3000);
    } catch (error) {
      console.error("Erro ao atualizar link:", error);
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
            {successId === link.id && (
              <p className="text-green-600 text-sm mt-2 font-medium">
                Link salvo com sucesso ✔
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
