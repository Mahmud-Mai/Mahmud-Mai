/* eslint-disable react/prop-types */

const Heading = ({ headingText, breadCrumbsText }) => {
  return (
    <>
      <div className="mb-16">
        <p className="my-10">
          <span className="breadcrumbs-text"> {breadCrumbsText}</span>
        </p>
        <h2 className="my-4">{headingText}</h2>
      </div>
    </>
  );
};

export default Heading;
