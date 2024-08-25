import React from "react";

function Description({ description = "" }) {
  const formatedDescripition = description.split(/(#paragraph|#title)/);
  const isDefault = formatedDescripition.length === 1;

  if (isDefault) {
    return <p className="description">{description}</p>;
  }

  return (
    <blockquote>
      {formatedDescripition.map((section, index) => {
        const content = formatedDescripition.at(index - 1);

        if (section === "#title") {
          return (
            <React.Fragment key={`quote-${index}`}>
              <h3 className="title">{content}</h3>
              <br />
            </React.Fragment>
          );
        }

        if (section === "#paragraph") {
          return (
            <React.Fragment key={`paragraph-${index}`}>
              <p className="description">{content}</p>
              <br />
            </React.Fragment>
          );
        }

        return null;
      })}
    </blockquote>
  );
}

export default Description;
