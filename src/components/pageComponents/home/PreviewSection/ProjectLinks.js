import React from "react";
import styled from "styled-components";

const LinksContainer = styled("div")`
  margin-bottom: 24px;
  padding: 8px 0px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: start;
  gap: 24px;
  // border: 1px solid hotpink;
`;

const ProjectLink = styled("a")`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  // color: #586165;
  color: dodgerblue;

  &:hover {
    color: #586165;
  }
`;

export default function ProjectLinks({ links }) {
  return (
    <LinksContainer>
      {links &&
        links.map((link, idx) => (
          <ProjectLink
            key={idx}
            href={link.path}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </ProjectLink>
        ))}
    </LinksContainer>
  );
}

// ProjectLinks.propTypes = {

// };
