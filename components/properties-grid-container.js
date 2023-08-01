import PropertyCard from "./property-card";

const PropertiesGridContainer = ({ allProperties }) => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-center text-left text-[14.51px] text-gray-700 font-body-regular-600">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[12px] px-2.5">
        <PropertyCard
          imageDimensions="/unsplashrlwe8f8anoc7@2x.png"
          imageDimensionIds="/car5.svg"
          imageDimensionValues="/bathtub5.svg"
          imageDimensionIdsAndValue="/arrowsout2.svg"
          imageDimensionIdsAndValue2="/ellipse-1@2x.png"
          imageDimensionIdsAndValue3="/sharenetwork6.svg"
          imageDimensionIdsAndValue4="/heart2.svg"
          imageDimensionIdsAndValue5="/plus7.svg"
          propWidth="400px"
          propMinWidth="355px"
          propMaxWidth="400px"
        />
        <PropertyCard
          imageDimensions="/unsplashrlwe8f8anoc8@2x.png"
          imageDimensionIds="/car5.svg"
          imageDimensionValues="/bathtub5.svg"
          imageDimensionIdsAndValue="/arrowsout2.svg"
          imageDimensionIdsAndValue2="/ellipse-1@2x.png"
          imageDimensionIdsAndValue3="/sharenetwork6.svg"
          imageDimensionIdsAndValue4="/heart2.svg"
          imageDimensionIdsAndValue5="/plus8.svg"
          propWidth="400px"
          propMinWidth="355px"
          propMaxWidth="400px"
        />
        <PropertyCard
          imageDimensions="/unsplashrlwe8f8anoc9@2x.png"
          imageDimensionIds="/car6.svg"
          imageDimensionValues="/bathtub.svg"
          imageDimensionIdsAndValue="/arrowsout3.svg"
          imageDimensionIdsAndValue2="/ellipse-1@2x.png"
          imageDimensionIdsAndValue3="/sharenetwork7.svg"
          imageDimensionIdsAndValue4="/heart2.svg"
          imageDimensionIdsAndValue5="/plus3.svg"
          propWidth="400px"
          propMinWidth="355px"
          propMaxWidth="400px"
        />
        <PropertyCard
          imageDimensions="/unsplashrlwe8f8anoc9@2x.png"
          imageDimensionIds="/car6.svg"
          imageDimensionValues="/bathtub.svg"
          imageDimensionIdsAndValue="/arrowsout3.svg"
          imageDimensionIdsAndValue2="/ellipse-1@2x.png"
          imageDimensionIdsAndValue3="/sharenetwork7.svg"
          imageDimensionIdsAndValue4="/heart2.svg"
          imageDimensionIdsAndValue5="/plus3.svg"
          propWidth="400px"
          propMinWidth="355px"
          propMaxWidth="400px"
        />
      </div>
    </div>
  );
};

export default PropertiesGridContainer;
