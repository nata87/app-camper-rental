import CamperCard from 'components/CamperCard/CamperCard';

const CamperCardList = ({ campers }) => {
  return (
    <>
      {campers.map(camper => {
        return <CamperCard camper={camper} key={camper._id} />;
      })}
    </>
  );
};

export default CamperCardList;
