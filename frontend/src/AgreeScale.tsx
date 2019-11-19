import { lowerFirst } from "lodash";
import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";

interface Props {
  question: { text: string };
}

interface ScaleButtonProps {
  text: string;
  value: number;
  onClick: any;
}

const ScaleButton = ({ text, value, onClick }: ScaleButtonProps) => (
  <Form.Group>
    <Form.Label>{text}</Form.Label>
    <Form.Check
      type="radio"
      onClick={onClick}
      value={value}
      name="agreeScale"
    />
  </Form.Group>
);

const SCALE = [
  "Very Inaccurate",
  "Moderately Inaccurate",
  "Neither Accurate nor Inaccurate",
  "Moderately Accurate",
  "Very Accurate"
];

const Scale = () => {
  const [, setValue] = useState();

  const onClick = (e: React.FormEvent<HTMLFormElement>) =>
    setValue(e.currentTarget.value);

  return (
    <Form onChange={onClick}>
      <Form.Row style={{ display: "flex", justifyContent: "space-around" }}>
        {SCALE.map((text, index) => (
          <ScaleButton
            text={text}
            value={index - 2}
            key={text}
            onClick={onClick}
          />
        ))}
      </Form.Row>
    </Form>
  );
};

const FactorDisplay = ({ question }: Props) => {
  return <h3>I {lowerFirst(question.text)}</h3>;
};

const AgreeScale = ({ question }: Props) => {
  return (
    <Card style={{ padding: 50 }}>
      <FactorDisplay question={question} />
      <Scale />
    </Card>
  );
};

export default AgreeScale;
