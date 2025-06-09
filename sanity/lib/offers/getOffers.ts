import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllOffers = async () => {
  const ALL_OFFERS_QUERY = defineQuery(
    `*[_type == "offers"] {
      _id,
      plname,
      enname,
      slug,
      image,
      price,
      validUntil,
      people,
      minNights,
      pldescription,
      endescription,
      "categories": categories[] {
        _ref,
        _key,
        "title": @->title,
        "entitle": @->entitle, 
        "pltitle": @->pltitle
      }
    } | order(validFrom desc)`
  );
  
  try {
    const offers = await sanityFetch({
      query: ALL_OFFERS_QUERY,
    });
    return offers.data || [];
  } catch (error) {
    console.error("Error fetching all products", error);
    return [];
  }
};
