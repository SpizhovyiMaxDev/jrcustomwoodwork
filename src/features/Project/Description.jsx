import React from "react";

function Description({ description = "", customStyles = "" }) {
  const formatedDescripition = description.split(/(#paragraph|#title)/);
  const isDefault = formatedDescripition.length === 1;

  if (isDefault) {
    return <p className="description">{description}</p>;
  }

  return (
    <div className={customStyles}>
      {formatedDescripition.map((section, index) => {
        const content = formatedDescripition.at(index - 1);

        if (section === "#paragraph") {
          return (
            <React.Fragment key={`paragraph-${index}`}>
              <p className="description">{content}</p>
              <br />
            </React.Fragment>
          );
        }

        if (section === "#title") {
          return (
            <React.Fragment key={`quote-${index}`}>
              <h3 className="title">{content}</h3>
              <br />
            </React.Fragment>
          );
        }

        return null;
      })}
    </div>
  );
}

export default Description;
