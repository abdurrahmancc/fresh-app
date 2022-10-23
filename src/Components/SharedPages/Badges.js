import React from "react";

const Badges = ({ item, className }) => {
  let badge;
  let newBadge;
  let hotBadge;
  let saleBadge;
  let bestBadge;
  let offerBadges;
  const searchOfferBadges = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const isOfferBadges = searchOfferBadges.find((n) => item?.productBadges.includes(n));

  if (item?.productBadges.toLowerCase().includes("new")) {
    newBadge = item?.productBadges;
  } else if (item?.productBadges.toLowerCase().includes("hot")) {
    hotBadge = item?.productBadges;
  } else if (item?.productBadges.toLowerCase().includes("sale")) {
    saleBadge = item?.productBadges;
  } else if (item?.productBadges.toLowerCase() === "best") {
    bestBadge = item?.productBadges;
  } else if (isOfferBadges) {
    offerBadges = isOfferBadges;
  } else {
    badge = item?.productBadges;
  }
  return (
    <div className={`${item?.productBadges || "hidden"}`}>
      {badge && (
        <span className={` px-4 uppercase py-1 bg-primary  inline-block text-neutral ${className}`}>
          {item?.productBadges}
        </span>
      )}
      {offerBadges && (
        <span className={`px-4 uppercase py-1 bg-error inline-block text-neutral ${className}`}>
          {item?.productBadges}
        </span>
      )}

      {newBadge && (
        <span className={` px-4 uppercase py-1 bg-primary inline-block text-neutral ${className}`}>
          {item?.productBadges}
        </span>
      )}
      {hotBadge && (
        <span className={` px-4 uppercase py-1 bg-error inline-block text-neutral ${className}`}>
          {item?.productBadges}
        </span>
      )}
      {saleBadge && (
        <span className={`px-4 uppercase py-1 bg-warning inline-block text-neutral ${className}`}>
          {item?.productBadges}
        </span>
      )}
      {bestBadge && (
        <span className={`px-4 uppercase py-1 bg-primary inline-block text-neutral ${className}`}>
          {item?.productBadges}
        </span>
      )}
    </div>
  );
};

export default Badges;
