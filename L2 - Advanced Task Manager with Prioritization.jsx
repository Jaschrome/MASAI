import React, { useMemo, useState } from "react";

const PRIORITIES = ["High", "Medium", "Low"] as const;
type Priority = (typeof PRIORITIES)[number];

type Task = {
  id: string;
  title: string;
  priority: Priority;
  completed: boolean;
};

function priorityRank(p: Priority) {
  return p === "High" ? 0 : p === "Medium" ? 1 : 2;
}

export default function AdvancedTaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [priorityFilter, setPriorityFilter] = useState<"All" | Priority>("All");
  const [statusFilter, setStatusFilter] = useState<"All" | "Completed" | "Incomplete">("All");

  const addTask = () => {
    const trimmed = title.trim();
    if (!trimmed) return;
    const newTask: Task = {
      id: crypto.randomUUID?.() || `${Date.now()}-${Math.random()}`,
      title: trimmed,
      priority,
      completed: false,
    };
    setTasks(prev => [...prev, newTask]);
    setTitle("");
    setPriority("Medium");
  };

  const toggleComplete = (id: string) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const updatePriority = (id: string, p: Priority) => {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, priority: p } : t)));
  };

  const visibleTasks = useMemo(() => {
    let list = tasks;
    if (priorityFilter !== "All") {
      list = list.filter(t => t.priority === priorityFilter);
    }
    if (statusFilter !== "All") {
      list = list.filter(t => (statusFilter === "Completed" ? t.completed : !t.completed));
    }
    return [...list].sort((a, b) => priorityRank(a.priority) - priorityRank(b.priority));
  }, [tasks, priorityFilter, statusFilter]);

  return (
    <div style={{ maxWidth: 720, margin: "24px auto", padding: 16, fontFamily: "system-ui, sans-serif" }}>
      <h2 style={{ marginBottom: 12 }}>L2 – Advanced Task Manager (Prioritized)</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto auto",
          gap: 8,
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <input
          placeholder="Task title…"
          value={title}
          onChange={e => setTitle(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter") addTask();
          }}
          style={{ padding: "8px 10px", borderRadius: 8, border: "1px solid #ddd" }}
        />
        <select
          value={priority}
          onChange={e => setPriority(e.target.value as Priority)}
          style={{ padding: "8px 10px", borderRadius: 8, border: "1px solid #ddd" }}
        >
          {PRIORITIES.map(p => (
            <option key={p} value={p}>
              {p} priority
            </option>
          ))}
        </select>
        <button
          onClick={addTask}
          disabled={!title.trim()}
          style={{
            padding: "8px 12px",
            borderRadius: 8,
            border: "1px solid #333",
            background: title.trim() ? "#111" : "#999",
            color: "white",
            cursor: title.trim() ? "pointer" : "not-allowed",
          }}
        >
          Add Task
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 8,
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span>Filter by Priority:</span>
          <select
            value={priorityFilter}
            onChange={e => setPriorityFilter(e.target.value as any)}
            style={{ padding: "6px 10px", borderRadius: 8, border: "1px solid #ddd" }}
          >
            <option value="All">All</option>
            {PRIORITIES.map(p => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span>Filter by Status:</span>
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value as any)}
            style={{ padding: "6px 10px", borderRadius: 8, border: "1px solid #ddd" }}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
          </select>
        </label>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
        {visibleTasks.map(task => {
          const isHigh = task.priority === "High";
          return (
            <li
              key={task.id}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr auto auto",
                gap: 8,
                alignItems: "center",
                padding: 10,
                borderRadius: 12,
                border: "1px solid #e6e6e6",
                background: isHigh ? "rgba(255, 69, 58, 0.08)" : "#fff",
                boxShadow: isHigh ? "0 0 0 1px rgba(255,69,58,0.2)" : "none",
              }}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
                aria-label="Mark complete"
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontWeight: 600,
                    textDecoration: task.completed ? "line-through" : "none",
                    opacity: task.completed ? 0.6 : 1,
                  }}
                >
                  {task.title}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    padding: "2px 8px",
                    borderRadius: 999,
                    border: "1px solid #ddd",
                    alignSelf: "start",
                  }}
                >
                  {task.priority}
                </span>
              </div>
              <select
                value={task.priority}
                onChange={e => updatePriority(task.id, e.target.value as Priority)}
                title="Change priority"
                style={{ padding: "6px 10px", borderRadius: 8, border: "1px solid #ddd" }}
              >
                {PRIORITIES.map(p => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              <button
                onClick={() => deleteTask(task.id)}
                style={{
                  padding: "6px 10px",
                  borderRadius: 8,
                  border: "1px solid #b91c1c",
                  background: "#dc2626",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      {visibleTasks.length === 0 && (
        <p style={{ marginTop: 16, color: "#666" }}>No tasks match your filters.</p>
      )}
    </div>
  );
}
