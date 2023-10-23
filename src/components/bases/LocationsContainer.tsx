"use client";
import React, { useEffect, useState } from "react";
import { LOCATION_TOPICS } from "@/constants";
import InnerGardenAboutUsImg from "@/../public/InnerGarden-AboutUs-1.jpg";
import Image from "next/image";
import SideNavPageContainer from "@/components/bases/SideNavPageContainer";
import dynamic from "next/dynamic";
import GoogleMapContainer from "@/components/map/GoogleMapContainer";
import getLocations from "@/app/actions/getLocations";
import transformToLocation from "@/app/util/transfromToLocation";
import { toast } from "react-toastify";
import { Location } from "@/types/Location";
import filterByLanguage from "@/app/util/filterByLanguage";

interface LocationsContainerProps {
  languageCode: string;
}

const LocationsContainer = ({ languageCode }: LocationsContainerProps) => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const GoogleMapContainer = dynamic(() => import("../map/GoogleMapContainer"), {
    ssr: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getLocations();
        const transformedLocation = transformToLocation(result);
        const filteredLocation = filterByLanguage(transformedLocation, languageCode);
        setLocations(filteredLocation);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching locations:", error);
        toast.warning("Failed to load google map.");
        setIsLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SideNavPageContainer title={"Locations"} sideTopics={LOCATION_TOPICS}>
      <div className={`relative w-[100%] h-[7rem] overflow-hidden filter saturate-75`}>
        <Image fill style={{ objectFit: "cover" }} src={InnerGardenAboutUsImg} alt="" sizes="auto" priority={true} />
      </div>
      <div className="flex flex-col pb-[2rem]">
        <div className="p-[2rem] pb-[1rem] flex flex-col ">
          {isLoading && (
            <div>
              <span>{`loading..`}</span>{" "}
            </div>
          )}
          {!isLoading && <GoogleMapContainer locations={locations} />}
        </div>
        <div className="text-sm font-normal text-[#444] italic pl-[2rem]">
          <span>{`*The exact locations are not accurately presented for safety and privacy of educators’ and customers’ .`}</span>
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default LocationsContainer;
