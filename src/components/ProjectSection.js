// import React from "react";
// import SectionTittle from "./SectionTittle";
// import projects from "../assets/data/projects";
// import ProjectItem from "./ProjectItem";
// import styled from "styled-components";

// const ProjectSectionStyles = styled.div`
//   padding: 10rem 0;
//   .project__allitems {
//     display: flex;
//     gap: 3rem;
//     margin-top: 5rem;
//   }
// `;

// export default function ProjectSection() {
//   return (
//     <ProjectSectionStyles>
//       <div className="container">
//         <SectionTittle
//           heading="Projects"
//           subheading="some of my recent works"
//         />
//         <div className="projects__allitems">
//           {projects.map((projects, index) => {
//             if (index >= 5) return;
//             return <ProjectItem />;
//           })}
//         </div>
//       </div>
//     </ProjectSectionStyles>
//   );
// }
