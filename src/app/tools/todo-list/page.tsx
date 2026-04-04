"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const STORAGE_KEY = "toolbox_todo_items";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

type Filter = "all" | "active" | "completed";

function loadTodos(): TodoItem[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveTodos(todos: TodoItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export default function TodoListPage() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTodos(loadTodos());
    setMounted(true);
  }, []);

  const updateTodos = (next: TodoItem[]) => {
    setTodos(next);
    saveTodos(next);
  };

  const addTodo = () => {
    const text = input.trim();
    if (!text) return;
    const item: TodoItem = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    updateTodos([item, ...todos]);
    setInput("");
  };

  const toggleTodo = (id: string) => {
    updateTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTodo = (id: string) => {
    updateTodos(todos.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    updateTodos(todos.filter((t) => !t.completed));
  };

  const filtered = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  if (!mounted) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>TODOリスト</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">TODOリストツール</h1>
      <p className="text-muted mb-8">
        ブラウザ上で使えるシンプルなタスク管理ツールです。内容はブラウザに自動保存されます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden">
        {/* 入力欄 */}
        <div className="p-4 border-b border-card-border">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTodo()}
              className="flex-1 border border-card-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background"
              placeholder="新しいタスクを入力してEnterまたは追加ボタン"
            />
            <button
              onClick={addTodo}
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors shrink-0"
            >
              追加
            </button>
          </div>
        </div>

        {/* フィルター */}
        <div className="flex items-center gap-1 px-4 py-2 border-b border-card-border flex-wrap">
          {(["all", "active", "completed"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                filter === f
                  ? "bg-primary text-white"
                  : "text-muted hover:text-primary"
              }`}
            >
              {f === "all" ? `すべて (${todos.length})` : f === "active" ? `未完了 (${activeCount})` : `完了済み (${completedCount})`}
            </button>
          ))}
          {completedCount > 0 && (
            <button
              onClick={clearCompleted}
              className="ml-auto text-sm text-muted hover:text-red-500 transition-colors"
            >
              完了済みを削除
            </button>
          )}
        </div>

        {/* リスト */}
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-muted text-sm">
            {filter === "all"
              ? "タスクがありません。上の入力欄から追加してください。"
              : filter === "active"
              ? "未完了のタスクはありません。"
              : "完了済みのタスクはありません。"}
          </div>
        ) : (
          <ul className="divide-y divide-card-border">
            {filtered.map((todo) => (
              <li key={todo.id} className="flex items-center gap-3 px-4 py-3 group">
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                    todo.completed
                      ? "bg-primary border-primary"
                      : "border-card-border hover:border-primary"
                  }`}
                >
                  {todo.completed && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
                <span
                  className={`flex-1 text-sm ${
                    todo.completed ? "line-through text-muted" : ""
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-muted hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all text-lg leading-none shrink-0"
                  title="削除"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* フッター */}
        {todos.length > 0 && (
          <div className="px-4 py-2.5 border-t border-card-border text-xs text-muted">
            {activeCount}件の未完了タスク
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">TODOリストの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 入力欄にタスクを入力してEnterキーまたは「追加」ボタンでタスクを追加します。</p>
          <p>2. チェックボタンをクリックするとタスクを完了/未完了に切り替えられます。</p>
          <p>3. タスクにマウスを乗せると削除ボタン（×）が表示されます。</p>
          <p>4. 「すべて」「未完了」「完了済み」のフィルターでタスクを絞り込めます。</p>
          <p>タスクはブラウザのlocalStorageに自動保存されるため、再読み込みしても消えません。</p>
        </div>
      </section>


      <AffiliateSection slug="todo-list" category="日常ツール" />
      <RelatedTools currentSlug="todo-list" category="日常ツール" />
    </div>
  );
}
