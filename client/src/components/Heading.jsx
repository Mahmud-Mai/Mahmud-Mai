/* eslint-disable react/prop-types */

const Heading = ({ headingText, breadCrumbsText }) => {
  return (
    <>
      <p className="breadcrumbs">
        <span className="breadcrumbs-text"> {breadCrumbsText}</span>
      </p>
      <h2 className="my-8">{headingText}</h2>
    </>
  );
};

export default Heading;
