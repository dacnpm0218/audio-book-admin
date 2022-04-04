import React from "react";

// components

import CardAddOrUpdateBook from "components/Cards/CardAddOrUpdateBook";
import CardProfile from "components/Cards/CardProfile.js";

// layout for page

import Admin from "layouts/Admin.js";
import { useRouter } from "next/router";

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardAddOrUpdateBook title={`Edit ${id} book`} id={id} />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}

Edit.layout = Admin;
