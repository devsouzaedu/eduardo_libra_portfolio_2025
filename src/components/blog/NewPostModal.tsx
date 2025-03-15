"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
  category: string;
};

const PASSWORD = "eduardo123"; // Senha simples para autenticação

export function NewPostModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState<Omit<BlogPost, "id" | "date">>({
    title: "",
    excerpt: "",
    content: "",
    imageUrl: "/blog-placeholder.jpg", // Imagem padrão
    category: "Tecnologia",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      // Reset states when modal closes
      setIsAuthenticated(false);
      setPassword("");
      setFormData({
        title: "",
        excerpt: "",
        content: "",
        imageUrl: "/blog-placeholder.jpg",
        category: "Tecnologia",
      });
      setError("");
      setSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAuthenticate = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Senha incorreta");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar campos
    if (!formData.title || !formData.excerpt || !formData.content) {
      setError("Preencha todos os campos obrigatórios");
      return;
    }

    try {
      // Get existing posts from localStorage
      const existingPosts = localStorage.getItem("blogPosts");
      const posts: BlogPost[] = existingPosts ? JSON.parse(existingPosts) : [];
      
      // Create new post
      const newPost: BlogPost = {
        id: uuidv4(),
        date: new Date().toISOString(),
        ...formData,
      };
      
      // Add new post to the beginning of the array
      posts.unshift(newPost);
      
      // Save to localStorage
      localStorage.setItem("blogPosts", JSON.stringify(posts));
      
      setSuccess(true);
      setError("");
      
      // Reset form after 2 seconds
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      setError("Erro ao salvar o post. Tente novamente.");
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-background p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">
            {isAuthenticated ? "Adicionar Novo Post" : "Autenticação"}
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-muted-foreground hover:bg-primary/10 hover:text-primary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {!isAuthenticated ? (
          <form onSubmit={handleAuthenticate} className="mt-4 space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Senha de Administrador
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Digite a senha para continuar"
              />
            </div>
            {error && <p className="text-sm font-medium text-red-500">{error}</p>}
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Entrar
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            {success ? (
              <div className="rounded-md bg-green-50 p-4 dark:bg-green-900/20">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800 dark:text-green-400">
                      Post adicionado com sucesso!
                    </h3>
                    <div className="mt-2 text-sm text-green-700 dark:text-green-300">
                      <p>O post foi salvo e já está disponível no blog.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div>
                  <label htmlFor="title" className="block text-sm font-medium">
                    Título <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Título do post"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium">
                    Categoria
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="Desenvolvimento">Desenvolvimento</option>
                    <option value="Design">Design</option>
                    <option value="Negócios">Negócios</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="excerpt" className="block text-sm font-medium">
                    Resumo <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Breve resumo do post"
                    rows={2}
                    required
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-medium">
                    Conteúdo <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Conteúdo completo do post"
                    rows={8}
                    required
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="imageUrl" className="block text-sm font-medium">
                    URL da Imagem
                  </label>
                  <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="URL da imagem de capa"
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    Deixe o padrão para usar a imagem padrão
                  </p>
                </div>

                {error && <p className="text-sm font-medium text-red-500">{error}</p>}

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Publicar Post
                  </button>
                </div>
              </>
            )}
          </form>
        )}
      </div>
    </div>
  );
} 