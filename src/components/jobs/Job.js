import React, { useState } from "react";
import { Card, Badge, Collapse, Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";

export default function Job({ job, details }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} -{" "}
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">
              {job.type}
            </Badge>
            <Badge variant="secondary">{job.location}</Badge>
            <div style={{ wordBreak: "break-all" }}>
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </div>
          <img
            className="d-none d-md-block"
            height="50"
            alt={job.company}
            src={job.company_logo}
          />
        </div>
        {!details && (
          <Card.Text>
            <Link to={`/jobs/${job.id}`}>View Details</Link>
          </Card.Text>
        )}
        {details && (
          <div className="my-4">
            <Button
              onClick={() => setOpen((prevOpen) => !prevOpen)}
              variant="primary"
            >
              {open ? "Close" : "Apply"}
            </Button>

            <Collapse in={open}>
              <div className="mt-4">
                <UserForm />
              </div>
            </Collapse>

            <ReactMarkdown className="mt-5" source={job.description} />
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
