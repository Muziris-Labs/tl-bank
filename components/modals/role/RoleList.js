"use client";

import {
  Radio,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

import RoleItem from "./RoleItem";

const RoleList = ({ selected, setSelected }) => {
  return (
    <List className="space-y-3 bg-transparent p-0 font-grotesque">
      <ListItem
        className={`hover:bg-gray-black bg-black/40 active:bg-black/40`}
        style={
          selected === 1
            ? { border: "2px solid #FCADFF" }
            : { border: "2px solid transparent" }
        }
        onClick={() => setSelected(1)}
      >
        <label
          htmlFor="vertical-list-org"
          className="flex w-full cursor-pointer items-center px-3 py-2"
        >
          <ListItemPrefix className="mr-3">
            <Radio
              color="purple"
              name="vertical-list"
              id="vertical-list-org"
              ripple={false}
              className="hover:before:opacity-0"
              containerProps={{
                className: "p-0",
              }}
            />
          </ListItemPrefix>

          <RoleItem
            heading="ORG"
            paragraph="Manage organization as safe owner, admin or other custom roles."
            src="organization-member"
            alt="Organization members sitting"
          />
        </label>
      </ListItem>

      <ListItem
        className="hover:bg-gray-black bg-black/40 active:bg-black/40"
        style={
          selected === 2
            ? { border: "2px solid #FCADFF" }
            : { border: "2px solid transparent" }
        }
        onClick={() => setSelected(2)}
      >
        <label
          htmlFor="vertical-list-contributor"
          className="flex w-full cursor-pointer items-center px-3 py-2"
        >
          <ListItemPrefix className="mr-3">
            <Radio
              color="purple"
              name="vertical-list"
              id="vertical-list-contributor"
              ripple={false}
              className="hover:before:opacity-0"
              containerProps={{
                className: "p-0",
              }}
              defaultChecked
            />
          </ListItemPrefix>

          <RoleItem
            heading="Contributor"
            paragraph="Manage your profile, create and track payment requests"
            src="contributor"
            alt="Contributor Standing and Smiling"
          />
        </label>
      </ListItem>
    </List>
  );
};

export default RoleList;
