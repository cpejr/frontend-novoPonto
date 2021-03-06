import React from "react";
import { LoggedMembersContainer } from "./styles";

import {
  DefaultLabel,
  MemberName,
  MemberDescription,
  MemberAvatar,
} from "../../atoms";
import { Row, Col } from "react-bootstrap";

const LoggedMembers = ({
  name,
  imageLink,
  role,
  mandatoryHour = null,
  description,
}) => {
  return (
    <LoggedMembersContainer className="container">
      <Row className="flex-nowrap w-100 ">
        <Col sm="auto" xs="auto" className="d-none d-sm-flex">
          <MemberAvatar src={imageLink} />
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <Row className="flex-nowrap me-0">
            <MemberName name={name} className="p-0 text-truncate" />
            <MemberDescription
              description={description}
              className="ms-2 p-0 d-none d-lg-flex text-truncate flex-shrink-1 me-2"
            />
          </Row>
          <Row style={{ marginTop: 8 }} className="d-none d-sm-flex">
            {role && <DefaultLabel labelText={role} labelColor="#FFD100" />}
            {mandatoryHour && (
              <DefaultLabel
                labelText="Horário obrigatório"
                labelColor="#0085FF"
              />
            )}
          </Row>
        </Col>
      </Row>
    </LoggedMembersContainer>
  );
};

export default LoggedMembers;
