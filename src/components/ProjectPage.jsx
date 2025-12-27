import { useParams, useNavigate } from "react-router-dom";
import { portfolioItems } from "./portfolioData";

export default function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = portfolioItems.find((p) => p.slug === slug);
  if (!project) return <div>Project not found</div>;

  return (
    <div style={{ minHeight: "100vh", background: "black", color: "white" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          position: "fixed",
          top: "2rem",
          left: "2rem",
          zIndex: 10,
        }}
      >
        ← Back
      </button>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 2rem" }}>
        <span>{project.category}</span>
        <h1>{project.title}</h1>

        <div style={{ display: "grid", gap: "1rem" }}>
          <div>Year: {project.details.year}</div>
          <div>Role: {project.details.role}</div>
          <div>Mediums: {project.details.mediums}</div>
        </div>

        <p style={{ whiteSpace: "pre-line" }}>{project.fullDescription}</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {project.images.map((img, i) =>
            img.type === "iframe" ? (
              <iframe key={i} src={img.src} style={{ width: "100%", height: "500px" }} />
            ) : (
              <div key={i}>{img.placeholder}</div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
