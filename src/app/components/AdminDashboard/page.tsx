// "use client"
// import { useState } from "react";

// const Admin = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [link, setLink] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
  
//     const res = await fetch("/api/projects", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ title, description, imageUrl, link }),
//     });
  
//     const data = await res.json();
  
//     if (!res.ok) {
//       console.error(data);
//       alert("Error adding project");
//       return;
//     }
  
//     alert("Project added!");
//   };
  

//   return (
//     <div className="max-w-xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="border p-2"/>
//         <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="border p-2"/>
//         <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" className="border p-2"/>
//         <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="Project Link (optional)" className="border p-2"/>
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Project</button>
//       </form>
//     </div>
//   );
// };

// export default Admin;
// "use client";

// import { useEffect, useState } from "react";

// export default function AdminDashboard() {
//   const [projects, setProjects] = useState<any[]>([]);
//   const [form, setForm] = useState<any>({
//     title: "",
//     description: "",
//     imageUrl: "",
//     link: "",
//   });
//   const [editId, setEditId] = useState<string | null>(null);

//   const fetchProjects = async () => {
//     const res = await fetch("/api/projects");
//     setProjects(await res.json());
//   };

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const submitHandler = async () => {
//     await fetch("/api/projects", {
//       method: editId ? "PUT" : "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(editId ? { id: editId, ...form } : form),
//     });

//     setForm({ title: "", description: "", imageUrl: "", link: "" });
//     setEditId(null);
//     fetchProjects();
//   };

//   const deleteProject = async (id: string) => {
//     await fetch("/api/projects", {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id }),
//     });
//     fetchProjects();
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

//       {/* FORM */}
//       <div className="grid gap-2 mb-6">
//         <input
//           placeholder="Title"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//           className="border p-2"
//         />
//         <textarea
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//           className="border p-2"
//         />
//         <input
//           placeholder="Image URL"
//           value={form.imageUrl}
//           onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
//           className="border p-2"
//         />
//         <input
//           placeholder="Project Link"
//           value={form.link}
//           onChange={(e) => setForm({ ...form, link: e.target.value })}
//           className="border p-2"
//         />
//         <button
//           onClick={submitHandler}
//           className="bg-blue-600 text-white p-2 rounded"
//         >
//           {editId ? "Update Project" : "Add Project"}
//         </button>
//       </div>

//       {/* PROJECT LIST */}
//       {projects.map((p) => (
//         <div key={p._id} className="border p-4 mb-3 rounded">
//           <h2 className="font-bold">{p.title}</h2>
//           <p>{p.description}</p>
//           <div className="flex gap-3 mt-2">
//             <button
//               className="text-blue-600"
//               onClick={() => {
//                 setEditId(p._id);
//                 setForm(p);
//               }}
//             >
//               Edit
//             </button>
//             <button
//               className="text-red-600"
//               onClick={() => deleteProject(p._id)}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";

// export default function AdminDashboard() {
//   const [projects, setProjects] = useState<any[]>([]);
//   const [form, setForm] = useState<any>({
//     title: "",
//     description: "",
//     imageUrl: "",
//     link: "",
//   });
//   const [editId, setEditId] = useState<string | null>(null);

//   // ✅ Admin ke liye ALL projects (hidden + visible)
//   const fetchProjects = async () => {
//     const res = await fetch("/api/projects/admin");
//     setProjects(await res.json());
//   };

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const submitHandler = async () => {
//     await fetch("/api/projects", {
//       method: editId ? "PUT" : "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(editId ? { id: editId, ...form } : form),
//     });

//     setForm({ title: "", description: "", imageUrl: "", link: "" });
//     setEditId(null);
//     fetchProjects();
//   };

//   const deleteProject = async (id: string) => {
//     await fetch("/api/projects", {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id }),
//     });
//     fetchProjects();
//   };

//   // ✅ HIDE / SHOW toggle
//   const toggleVisibility = async (id: string, isHidden: boolean) => {
//     await fetch("/api/projects", {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id, isHidden }),
//     });
//     fetchProjects();
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

//       {/* FORM */}
//       <div className="grid gap-2 mb-6">
//         <input
//           placeholder="Title"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//           className="border p-2"
//         />
//         <textarea
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//           className="border p-2"
//         />
//         <input
//           placeholder="Image URL"
//           value={form.imageUrl}
//           onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
//           className="border p-2"
//         />
//         <input
//           placeholder="Project Link"
//           value={form.link}
//           onChange={(e) => setForm({ ...form, link: e.target.value })}
//           className="border p-2"
//         />

//         <button
//           onClick={submitHandler}
//           className="bg-blue-600 text-white p-2 rounded"
//         >
//           {editId ? "Update Project" : "Add Project"}
//         </button>
//       </div>

//       {/* PROJECT LIST */}
//       {projects.map((p) => (
//         <div key={p._id} className="border p-4 mb-3 rounded">
//           <div className="flex justify-between items-center">
//             <h2 className="font-bold">{p.title}</h2>

//             {/* STATUS BADGE */}
//             <span
//               className={`text-xs px-2 py-1 rounded ${
//                 p.isHidden
//                   ? "bg-red-200 text-red-700"
//                   : "bg-green-200 text-green-700"
//               }`}
//             >
//               {p.isHidden ? "Hidden" : "Visible"}
//             </span>
//           </div>

//           <p className="text-sm">{p.description}</p>

//           <div className="flex gap-3 mt-3">
//             <button
//               className="text-blue-600"
//               onClick={() => {
//                 setEditId(p._id);
//                 setForm(p);
//               }}
//             >
//               Edit
//             </button>

//             <button
//               className="text-red-600"
//               onClick={() => deleteProject(p._id)}
//             >
//               Delete
//             </button>

//             {/* HIDE / SHOW BUTTON */}
//             <button
//               className={`px-3 py-1 rounded text-white ${
//                 p.isHidden ? "bg-green-600" : "bg-yellow-600"
//               }`}
//               onClick={() => toggleVisibility(p._id, !p.isHidden)}
//             >
//               {p.isHidden ? "Show" : "Hide"}
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [projects, setProjects] = useState<any[]>([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    imageUrl: "",
    link: "",
  });
  const [editId, setEditId] = useState<string | null>(null);

  const fetchProjects = async () => {
    const res = await fetch("/api/projects/admin");
    setProjects(await res.json());
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const submitHandler = async () => {
    await fetch("/api/projects", {
      method: editId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editId ? { id: editId, ...form } : form),
    });

    setForm({ title: "", description: "", imageUrl: "", link: "" });
    setEditId(null);
    fetchProjects();
  };

  const deleteProject = async (id: string) => {
    await fetch("/api/projects", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchProjects();
  };

  const toggleVisibility = async (id: string, isHidden: boolean) => {
    await fetch("/api/projects", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, isHidden }),
    });
    fetchProjects();
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* PAGE TITLE */}
      <h1 className="mb-6 text-3xl font-bold text-white">
        Projects Management
      </h1>

      {/* FORM CARD */}
      <div className="mb-8 rounded-xl border border-white/10 bg-[#0f172a] p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold text-gray-200">
          {editId ? "Edit Project" : "Add New Project"}
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <input
            placeholder="Project Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="rounded-lg border border-white/10 bg-[#020617] p-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />

          <input
            placeholder="Project Link"
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
            className="rounded-lg border border-white/10 bg-[#020617] p-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />

          <input
            placeholder="Image URL"
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            className="md:col-span-2 rounded-lg border border-white/10 bg-[#020617] p-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />

          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            className="md:col-span-2 rounded-lg border border-white/10 bg-[#020617] p-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            rows={3}
          />
        </div>

        <button
          onClick={submitHandler}
          className="mt-5 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          {editId ? "Update Project" : "Add Project"}
        </button>
      </div>

      {/* PROJECT LIST */}
      <div className="space-y-4">
        {projects.map((p) => (
          <div
            key={p._id}
            className="rounded-xl border border-white/10 bg-[#0f172a] p-5 shadow-md"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">
                {p.title}
              </h2>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  p.isHidden
                    ? "bg-red-500/20 text-red-400"
                    : "bg-green-500/20 text-green-400"
                }`}
              >
                {p.isHidden ? "Hidden" : "Visible"}
              </span>
            </div>

            <p className="mt-2 text-sm text-gray-400">
              {p.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {/* <button
                className="rounded-md bg-blue-600/20 px-3 py-1 text-sm text-blue-400 hover:bg-blue-600/30"
                onClick={() => {
                  setEditId(p._id);
                  setForm({
                    title: p.title,
                    description: p.description,
                    imageUrl: p.imageUrl,
                    link: p.link,
                  });
                }}
              >
                Edit
              </button> */}

              <button
                className="rounded-md bg-red-600/20 px-3 py-1 text-sm text-red-400 hover:bg-red-600/30"
                onClick={() => deleteProject(p._id)}
              >
                Delete
              </button>

              <button
                className={`rounded-md px-3 py-1 text-sm font-semibold text-white ${
                  p.isHidden
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-yellow-600 hover:bg-yellow-700"
                }`}
                onClick={() => toggleVisibility(p._id, !p.isHidden)}
              >
                {p.isHidden ? "Show" : "Hide"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
