import React from "react";
import { Container } from "react-bootstrap";
import greenImage from "../../../assets/images/green-bg-picture.jpg";
import AgentCard from "../agentCard/AgentCard";

const TopAgentList = () => {
  return (
    <section className="picture-section">
      <Container>
        <h2 className="section-head mb-4 mt-5">Benton County, AR Top Agents</h2>
        {["", "", "", "", ""].map((item, index) => {
          return (
            <>
              <AgentCard />
            </>
          );
        })}
      </Container>
    </section>
  );
};

export default TopAgentList;
