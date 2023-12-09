import React from "react";
import { PoojaCard } from "./components/PoojaCard";

import { nithyaPuja } from "./components/config/nithyaPuja";
import { specialPuja } from "./components/config/specialPuja";
import { homas } from "./components/config/homas";

export const Rituals = () => {
  return (
    <>
      <div class="main-header1">RITUALS</div>
      <PoojaCard data={nithyaPuja} />
      <PoojaCard data={specialPuja} />
      <PoojaCard data={homas} />
    </>
  );
};
